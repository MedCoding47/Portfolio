/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ayat Mohamed",
  title: "Hi all, I'm Medcoding",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/117qv10fl5JKbkrTcWCF-awF3tiESP3np/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MedCoding47",
  linkedin: "https://www.linkedin.com/in/ayat-mohamed-b73653315/",
  gmail: "mohamed204ayat@gmail.com",
  gitlab: "https://gitlab.com/mohamedayat148",
  instagram: "https://www.instagram.com/_mohamed_ayat/",
  whatsapp:  "https://wa.me/212607302999",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
 
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  
  {
    skillName: "npm",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "mongodb",
    fontAwesomeClassname: "fas fa-leaf" // Font Awesome n’a pas d’icône officielle MongoDB, donc 'leaf' est une alternative
  },
  {
    skillName: "laravel",
    fontAwesomeClassname: "fab fa-laravel" // Nécessite Font Awesome Pro
  },
  {
    skillName: "bootstrap",
    fontAwesomeClassname: "fab fa-bootstrap"
  },
  {
    skillName: "tailwind",
    fontAwesomeClassname: "fas fa-wind" // Pas d’icône officielle Tailwind dans Font Awesome ; alternative possible
  },
  {
    skillName: "vite",
    fontAwesomeClassname: "fas fa-bolt" // Pas d’icône officielle pour Vite non plus
  },
  {
    skillName: "jsx",
    fontAwesomeClassname: "fas fa-code" // JSX n’a pas d’icône dédiée, on utilise 'code'
  }
],
display: true
 // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
 schools: [
  {
    schoolName: "Institut spécialisé de gestion et informatique (Centre Philips - Ofppt)",
    logo: require("./assets/images/ofppt.png"), // Replace with your actual logo file if available
    subHeader: "Technicien spécialisé en développement digital option Full Stack",
    duration: "2023 - 2025",
    desc: "",
    descBullets: []
  },
  {
    schoolName: "Lycée Tarik Ibnou Zyad, Casablanca",
    logo: require("./assets/images/tariq.png"), // Replace with your actual logo file if available
    subHeader: "Baccalauréat en Sciences Physique",
    duration: "2021 - 2022",
    desc: "",
    descBullets: []
  }
]

};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Stagiaire en développement Web",
      company: "Animal Planet",
      companylogo: require("./assets/images/planet.jpg"), // Add your actual logo if available
      date: "27/01/2025 – 08/03/2025",
      desc: "Participation au développement d’un site web d’adoption d’animaux avec interface utilisateur et espace boutique.",
      descBullets: [
        "Création d’un site web permettant la gestion des annonces pour chiens, chats, poissons, oiseaux et rongeurs.",
        "Développement d’une interface intuitive pour faciliter la navigation et la recherche d’animaux à adopter.",
        "Intégration de fonctionnalités de gestion de stock et de commandes pour l’espace boutique."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "PLATEFORMES ACADÉMIQUES RÉALISÉES AVEC DES TECHNOLOGIES AVANCÉES",
  projects: [
    {
      image: require("./assets/images/al.png"), // Replace with actual logo or relevant image
      projectName: "Plateforme d’Adoption des Animaux",
      projectDesc: "Site web de gestion d’adoption d’animaux (chiens, chats, poissons, oiseaux, rongeurs), avec React, Laravel, MySQL, API.",
      footerLink: [
        {
          name: "Voir le Projet",
          url: "https://github.com/MedCoding47/pet" // Remplacez par le lien réel si disponible
        }
      ]
    },
    {
      image: require("./assets/images/ele.jpg"), // Replace with actual logo or relevant image
      projectName: "Plateforme de Location de Véhicules Électriques",
      projectDesc: "Plateforme de réservation et de gestion de véhicules (autos, vélos) utilisant Vite, Laravel et MySQL.",
      footerLink: [
        {
          name: "Voir le Projet",
          url: "https://github.com/souyousy/location_voiture" // Remplacez par le lien réel si disponible
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Certifications and academic accomplishments that highlight my development journey.",

  achievementsCards: [
    {
      title: "Career Essentials in Generative AI",
      subtitle:
        "Certification by Microsoft and LinkedIn, covering fundamentals and applications of generative AI.",
      image: require("./assets/images/mo.jpg"), // Replace with actual image path
      imageAlt: "Microsoft Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/cc1aa06bff0c7bcfd90a3ce20a2087001670b302b9d1b4b3c276da9b6c2d4088"
        }
      ]
    },
    {
      title: "Projet Animal Planet - Plateforme d’Adoption",
      subtitle:
        "Développement complet d’un site d’adoption d’animaux avec gestion des annonces, boutique, et navigation fluide.",
      image: require("./assets/images/al.png"), // Replace with actual image
      imageAlt: "Animal Planet Project",
      footerLink: [
        {
          name: "Voir le Projet",
          url: "https://github.com/MedCoding47/pet" // Add GitHub or deployed project URL
        }
      ]
    },
    {
      title: "Plateforme Location Véhicules Électriques",
      subtitle:
        "Plateforme web pour louer des autos et vélos électriques. Utilise Vite, Laravel, MySQL.",
      image: require("./assets/images/ele.jpg"), // Replace with actual image
      imageAlt: "Vehicle Rental Project",
      footerLink: [
        {
          name: "Voir Démo",
          url: "https://github.com/souyousy/location_voiture" // Add project URL or GitHub repo
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "I like to share what I learn about development, especially full stack and web technologies.",
  displayMediumBlogs: false, // You can switch to true if you publish on Medium
  blogs: [
    {
      url: "https://dev.to/", // Example placeholder
      title: "Pourquoi React + Laravel est une combinaison puissante",
      description:
        "Découvrez comment combiner Laravel pour le back-end et React pour le front-end dans un projet full stack."
    }
  ],
  display: true
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I love to share my knowledge and experiences 🎤"),

  talks: [], // Add future events here
  display: false // Hide this section until you have public talks
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Invitations bienvenues à parler de technologie, IA et dev web.",
  podcast: [],
  display: false // You can set to true if you publish a podcast later
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: "Reach Out to me!",
  subtitle: "Discutons d’un projet ou envoyez-moi un message. Ma boîte est ouverte !",
  number: "+212607302999",
  email_address: "mohamed204ayat@gmail.com"
};



const twitterDetails = {
  userName: "", // Add your username without "@"
  display: false // Set true if you want to show Twitter feed
};

const isHireable = true;



export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
