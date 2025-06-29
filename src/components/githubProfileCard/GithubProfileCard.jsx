import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, isHireable } from "../../portfolio";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";

export default function GithubProfileCard({ prof }) {
  if (!prof || Object.keys(prof).length === 0) {
    return null;
  }

  prof.hireable = isHireable ? "Yes" : "No";

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">
                {contactInfo.subtitle}
              </p>
            </div>
            <h2 className="bio-text">
              "{emoji(prof.bio || "Développeur passionné")}"
            </h2>
            {prof.location && (
              <div className="location-div">
                <span className="desc-prof">{prof.location}</span>
              </div>
            )}
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: {prof.hireable}
              </span>
            </div>
            <div className="contact-details">
              <p className="desc-prof">
                📞{" "}
                <a href={`tel:${contactInfo.number}`}>
                  {contactInfo.number}
                </a>
              </p>
              <p className="desc-prof">
                📧{" "}
                <a href={`mailto:${contactInfo.email_address}`}>
                  {contactInfo.email_address}
                </a>
              </p>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
