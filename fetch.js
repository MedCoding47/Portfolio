const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct.",
};

// 🟢 Récupération des données GitHub
if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME || GITHUB_USERNAME.includes("YOUR")) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  const query = {
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  };

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node",
      "Content-Type": "application/json",
    }
  };

  const req = https.request(options, res => {
    let body = "";
    console.log(`GitHub API status: ${res.statusCode}`);
    if (res.statusCode !== 200) throw new Error(ERR.requestFailed);

    res.on("data", chunk => (body += chunk));
    res.on("end", () => {
      fs.writeFile("./public/profile.json", body, err => {
        if (err) console.error(err);
        else console.log("✅ GitHub profile saved to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    console.error("GitHub request error:", error);
  });

  req.write(JSON.stringify(query));
  req.end();
}

// 🟡 Récupération des articles Medium (si présent)
if (MEDIUM_USERNAME && !MEDIUM_USERNAME.includes("YOUR")) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const rssUrl = encodeURIComponent(`https://medium.com/feed/@${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=${rssUrl}`,
    port: 443,
    method: "GET",
  };

  const req = https.request(options, res => {
    let body = "";
    console.log(`Medium API status: ${res.statusCode}`);
    if (res.statusCode !== 200) throw new Error(ERR.requestFailedMedium);

    res.on("data", chunk => (body += chunk));
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", body, err => {
        if (err) console.error(err);
        else console.log("✅ Medium blogs saved to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    console.error("Medium request error:", error);
  });

  req.end();
}
