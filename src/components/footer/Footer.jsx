import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">
              &lt;Ayat<span className="footer__logo-dot">.</span>/&gt;
            </span>
            <p className="footer__tagline">{t("footer.tagline")}</p>
          </div>
          <div className="footer__links">
            <a href="https://github.com/MedCoding47" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ayat-mohamed-b73653315/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:mohamed204ayat@gmail.com" aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>{t("footer.built")}</p>
        </div>
      </div>
    </footer>
  );
}
