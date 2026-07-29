import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiMessageCircle } from "react-icons/fi";
import { useScrollReveal, fadeUp } from "../../hooks/useAnimations";
import "./Contact.scss";

const CONTACTS = [
  { icon: FiMail, label: "Email", href: "mailto:mohamed204ayat@gmail.com", primary: true },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ayat-mohamed-b73653315/" },
  { icon: FiGithub, label: "GitHub", href: "https://github.com/MedCoding47" },
  { icon: FiMessageCircle, label: "WhatsApp", href: "https://wa.me/212600000000" },
];

export default function Contact() {
  const { t } = useTranslation();
  const reveal = useScrollReveal(0.12);

  return (
    <section className="contact section" id="contact">
      <span className="section-bg-text" aria-hidden="true">{t("contact.title")}</span>
      <div className="contact__inner container">
        <motion.div {...reveal}>
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="section-heading" variants={fadeUp}>
            {t("contact.title")}
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t("contact.subtitle")}
          </motion.p>

          <motion.div className="contact__availability" variants={fadeUp}>
            <motion.span
              className="contact__status-dot"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {t("contact.available")}
          </motion.div>

          <motion.p className="contact__location" variants={fadeUp}>
            {t("contact.location")}
          </motion.p>

          <motion.div className="contact__links" variants={fadeUp}>
            {CONTACTS.map(({ icon: Icon, label, href, primary }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`contact__link ${primary ? "contact__link--primary" : ""}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
              >
                <motion.span
                  className="contact__link-icon"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={20} />
                </motion.span>
                <span className="contact__link-label">{label}</span>
                <span className="contact__link-arrow">&rarr;</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
