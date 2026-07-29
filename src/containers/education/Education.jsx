import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useScrollReveal, fadeUp } from "../../hooks/useAnimations";
import "./Education.scss";

const schoolEmojis = {
  ofppt: "🎓",
  lycee: "📚",
};

export default function Education() {
  const { t } = useTranslation();
  const schools = t("education.schools", { returnObjects: true });
  const reveal = useScrollReveal(0.2);

  return (
    <section className="education section" id="education">
      <span className="section-bg-text" aria-hidden="true">{t("education.title")}</span>
      <div className="education__inner container">
        <motion.div {...reveal}>
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="section-heading" variants={fadeUp}>
            {t("education.title")}
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t("education.subtitle")}
          </motion.p>

          <div className="education__grid">
            {schools.map((school, i) => (
              <motion.div
                className="education__card"
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <motion.div
                  className="education__icon"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                >
                  {schoolEmojis[school.icon] || "📖"}
                </motion.div>
                <div className="education__info">
                  <h3 className="education__school">{school.school}</h3>
                  <p className="education__degree">{school.degree}</p>
                  <p className="education__location">{school.location}</p>
                  <span className="education__date">{school.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
