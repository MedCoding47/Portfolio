import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./About.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about section" id="about">
      <div className="about__inner container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="section-heading" variants={fadeUp}>
            {t("about.title")}
          </motion.h2>

          <motion.div className="about__content" variants={fadeUp}>
            <p className="about__text" dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
            <p className="about__text" dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
            <p className="about__text" dangerouslySetInnerHTML={{ __html: t("about.p3") }} />
          </motion.div>

          <motion.div className="about__stats" variants={fadeUp}>
            {["experience", "projects", "clients", "german"].map((key) => (
              <div className="about__stat" key={key}>
                <span className="about__stat-value">{t(`about.stats.${key}`)}</span>
                <span className="about__stat-label">{t(`about.stats.${key}Label`)}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
