import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import photo from "../../assets/images/photo-optimized.webp";
import "./Hero.scss";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero__badge" variants={item}>
            <span className="hero__badge-dot" />
            {t("hero.badge")}
          </motion.div>

          <motion.p className="hero__greeting" variants={item}>
            {t("hero.greeting")}
          </motion.p>

          <motion.h1 className="hero__name" variants={item}>
            {t("hero.name")}
          </motion.h1>

          <motion.h2 className="hero__role" variants={item}>
            {t("hero.role")}
          </motion.h2>

          <motion.p
            className="hero__subtitle"
            variants={item}
            dangerouslySetInnerHTML={{ __html: t("hero.subtitle") }}
          />

          <motion.div className="hero__german-tag" variants={item}>
            <span className="hero__flag">🇩🇪</span>
            {t("hero.badgeSub")}
          </motion.div>

          <motion.div className="hero__ctas" variants={item}>
            <a href="#projects" className="hero__cta hero__cta--primary">
              {t("hero.cta_projects")}
            </a>
            <a href="#contact" className="hero__cta hero__cta--secondary">
              {t("hero.cta_contact")}
            </a>
            <a
              href="/Portfolio/mohamed_ayat_lebenslauf.pdf"
              download="mohamed_ayat_lebenslauf.pdf"
              className="hero__cta hero__cta--outline"
            >
              <FiDownload size={16} />
              {t("hero.cta_resume")}
            </a>
          </motion.div>

          <motion.div className="hero__social" variants={item}>
            <a href="https://github.com/MedCoding47" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ayat-mohamed-b73653315/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:mohamed204ayat@gmail.com" aria-label="Email">
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__image-frame">
            <img src={photo} alt="Ayat Mohamed" className="hero__photo" />
            <div className="hero__image-glow" />
          </div>
          <div className="hero__image-decoration hero__image-decoration--1" />
          <div className="hero__image-decoration hero__image-decoration--2" />
        </motion.div>
      </div>
    </section>
  );
}
