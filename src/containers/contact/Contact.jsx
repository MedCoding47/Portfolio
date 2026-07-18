import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiMessageCircle, FiMapPin } from "react-icons/fi";
import "./Contact.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact section" id="contact">
      <div className="contact__inner container">
        <motion.div
          className="contact__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="contact__title" variants={fadeUp}>
            {t("contact.title")}
          </motion.h2>
          <motion.p className="contact__subtitle" variants={fadeUp}>
            {t("contact.subtitle")}
          </motion.p>

          <motion.div className="contact__availability" variants={fadeUp}>
            <span className="contact__availability-dot" />
            {t("contact.availability")}
          </motion.div>

          <motion.div className="contact__location" variants={fadeUp}>
            <FiMapPin size={16} />
            <span>{t("contact.location")}</span>
            <span className="contact__location-arrow">→</span>
            <span className="contact__location-target">{t("contact.locationTarget")}</span>
          </motion.div>

          <motion.div className="contact__links" variants={fadeUp}>
            <a
              href="mailto:mohamed204ayat@gmail.com"
              className="contact__link contact__link--primary"
            >
              <FiMail size={18} />
              {t("contact.email")}
            </a>
            <a
              href="https://www.linkedin.com/in/ayat-mohamed-b73653315/"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <FiLinkedin size={18} />
              {t("contact.linkedin")}
            </a>
            <a
              href="https://github.com/MedCoding47"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <FiGithub size={18} />
              {t("contact.github")}
            </a>
            <a
              href="https://wa.me/212607302999"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <FiMessageCircle size={18} />
              {t("contact.whatsapp")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
