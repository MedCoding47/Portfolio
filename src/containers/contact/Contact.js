import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            {/* Titre */}
            <h1 className="heading contact-title">
              {contactInfo.title || "Contact Me"}
            </h1>

            {/* Sous-titre */}
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle ||
                "Discutons d’un projet ou envoyez-moi un message."}
            </p>

            {/* Coordonnées */}
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {/* Téléphone */}
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  {/* WhatsApp */}
                  <a
                    className="contact-detail"
                    href={`https://wa.me/${contactInfo.number.replace(
                      "+",
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📱 WhatsApp
                  </a>
                  <br />
                  <br />
                </>
              )}

              {/* Email */}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />

              {/* Réseaux sociaux */}
              <SocialMedia />
            </div>
          </div>

          {/* Animation ou image */}
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
