import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useScrollReveal, fadeUp } from "../../hooks/useAnimations";
import "./Experience.scss";

export default function Experience() {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true });
  const reveal = useScrollReveal(0.15);

  return (
    <section className="experience section" id="experience">
      <span className="section-bg-text" aria-hidden="true">{t("experience.title")}</span>
      <div className="experience__inner container">
        <motion.div {...reveal}>
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="section-heading" variants={fadeUp}>
            {t("experience.title")}
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t("experience.subtitle")}
          </motion.p>

          <div className="experience__timeline">
            {jobs.map((job, i) => (
              <motion.div
                className="experience__item"
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="experience__item-line">
                  <motion.div
                    className={`experience__item-dot ${job.current ? "experience__item-dot--active" : ""}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  />
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
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.15 + 0.4 + j * 0.08 }}
                      >
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="experience__tags">
                    {job.tags.map((tag, j) => (
                      <motion.span
                        className="tag"
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.15 + 0.5 + j * 0.05 }}
                        whileHover={{ scale: 1.05, borderColor: "var(--color-primary)" }}
                      >
                        {tag}
                      </motion.span>
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
