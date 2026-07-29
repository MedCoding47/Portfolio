import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import "./Footer.scss";

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className="footer__inner">
        <div className="footer__top">
          <motion.div className="footer__brand" variants={item}>
            <span className="footer__logo">
              &lt;Ayat<span className="footer__logo-dot">.</span>/&gt;
            </span>
            <p className="footer__tagline">{t("footer.tagline")}</p>
          </motion.div>
          <motion.div className="footer__links" variants={item}>
            {[
              { icon: FiGithub, href: "https://github.com/MedCoding47", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/ayat-mohamed-b73653315/", label: "LinkedIn" },
              { icon: FiMail, href: "mailto:mohamed204ayat@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3, color: "var(--color-primary)" }}
                transition={{ duration: 0.2 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div className="footer__bottom" variants={item}>
          <p>{t("footer.built")}</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
