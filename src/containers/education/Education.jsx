import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import "./Education.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Education() {
  const { t } = useTranslation();
  const schools = t("education.schools", { returnObjects: true });

  return (
    <section className="education section" id="education">
      <div className="education__inner container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="section-heading" variants={fadeUp}>
            {t("education.title")}
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t("education.subtitle")}
          </motion.p>

          <div className="education__grid">
            {schools.map((school, i) => (
              <motion.div className="education__card" key={i} variants={fadeUp}>
                <div className="education__card-icon">
                  {school.logo === "ofppt" ? "🎓" : "📚"}
                </div>
                <div className="education__card-content">
                  <h3 className="education__school">{school.school}</h3>
                  <p className="education__degree">{school.degree}</p>
                  <div className="education__meta">
                    <span className="education__meta-item">
                      <FiMapPin size={14} />
                      {school.location}
                    </span>
                    <span className="education__meta-item">
                      <FiCalendar size={14} />
                      {school.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
