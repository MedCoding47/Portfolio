import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import "./Projects.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });

  return (
    <section className="projects section" id="projects">
      <div className="projects__inner container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
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
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {project.featured && (
                  <span className="projects__featured-badge">{t("projects.featured")}</span>
                )}
                <h3 className="projects__card-title">{project.name}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-tags">
                  {project.tags.map((tag, j) => (
                    <span className="tag" key={j}>{tag}</span>
                  ))}
                </div>
                <div className="projects__card-links">
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
