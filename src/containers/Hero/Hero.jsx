import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { useMouseParallax } from "../../hooks/useAnimations";
import photo from "../../assets/images/photo-optimized.png";
import "./Hero.scss";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { t } = useTranslation();
  const mouse = useMouseParallax(0.04);
  const mouseStrong = useMouseParallax(0.08);

  return (
    <section className="hero" id="hero" onMouseMove={(e) => { mouse.handleMouse(e); mouseStrong.handleMouse(e); }}>
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

          <motion.h1 className="hero__name" variants={item}>
            {t("hero.name").split("").map((char, i) => (
              <motion.span
                key={i}
                className="hero__name-char"
                initial={{ opacity: 0, y: 30, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.6 + i * 0.03, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
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
              href="/Portfolio/Lebenslauf_Ayat_Mohamed.pdf"
              download="Lebenslauf_Ayat_Mohamed.pdf"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ x: mouse.x, y: mouse.y }}
        >
          <motion.div
            className="hero__image-frame"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={photo} alt="Ayat Mohamed" className="hero__photo" />
            <div className="hero__image-glow" />
          </motion.div>
          <motion.div
            className="hero__image-decoration hero__image-decoration--1"
            style={{ x: mouseStrong.x, y: mouseStrong.y }}
          />
          <motion.div
            className="hero__image-decoration hero__image-decoration--2"
            style={{ x: mouseStrong.x, y: mouse.y }}
          />
        </motion.div>
      </div>
    </section>
  );
}
