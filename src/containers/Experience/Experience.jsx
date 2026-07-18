import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Experience.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true });

  return (
    <section className="experience section" id="experience">
      <div className="experience__inner container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="section-heading" variants={fadeUp}>
            {t("experience.title")}
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t("experience.subtitle")}
          </motion.p>

          <div className="experience__timeline">
            {jobs.map((job, i) => (
              <motion.div className="experience__item" key={i} variants={fadeUp}>
                <div className="experience__item-line">
                  <div className={`experience__item-dot ${job.current ? "experience__item-dot--active" : ""}`} />
                  {i < jobs.length - 1 && <div className="experience__item-connector" />}
                </div>
                <div className="experience__item-content">
                  <div className="experience__item-header">
                    <div>
                      <h3 className="experience__role">{job.role}</h3>
                      <p className="experience__company">{job.company}</p>
                    </div>
                    <span className="experience__date">
                      {job.current && <span className="experience__current-badge">Current</span>}
                      {job.date}
                    </span>
                  </div>
                  <p className="experience__desc">{job.description}</p>
                  <ul className="experience__bullets">
                    {job.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="experience__tags">
                    {job.tags.map((tag, j) => (
                      <span className="tag" key={j}>{tag}</span>
                    ))}
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
