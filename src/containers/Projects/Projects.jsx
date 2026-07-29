import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useScrollReveal, fadeUp } from "../../hooks/useAnimations";
import "./Projects.scss";

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });
  const reveal = useScrollReveal(0.1);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="projects section" id="projects">
      <span className="section-bg-text" aria-hidden="true">{t("projects.title")}</span>
      <div className="projects__inner container">
        <motion.div {...reveal}>
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="section-heading" variants={fadeUp}>
            {t("projects.title")}
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t("projects.subtitle")}
          </motion.p>

          <div className="projects__grid">
            {projects.map((project, i) => (
              <motion.div
                className={`projects__card ${project.featured ? "projects__card--featured" : ""}`}
                key={i}
                variants={fadeUp}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.featured && (
                  <span className="projects__featured-badge">{t("projects.featured")}</span>
                )}

                <motion.div
                  className="projects__card-glow"
                  animate={{ opacity: hoveredIdx === i ? 0.15 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="projects__card-icon"
                  animate={hoveredIdx === i ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {"{ }"}
                </motion.div>

                <h3 className="projects__card-title">{project.name}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <motion.div
                  className="projects__card-tags"
                  animate={hoveredIdx === i ? { y: -2 } : { y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.tags.map((tag, j) => (
                    <motion.span
                      className="tag"
                      key={j}
                      whileHover={{ scale: 1.05, borderColor: "var(--color-primary)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="projects__card-links"
                  animate={hoveredIdx === i ? { y: 0, opacity: 1 } : { y: 4, opacity: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="projects__card-link"
                    >
                      <FiGithub size={16} />
                      {t("projects.viewCode")}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="projects__card-link"
                    >
                      <FiExternalLink size={16} />
                      Live
                    </a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
