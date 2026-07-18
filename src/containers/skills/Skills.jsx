import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiVite,
  SiAngular,
  SiDotnet,
  SiNodedotjs,
  SiLaravel,
  SiPython,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FiLayout, FiServer, FiDatabase, FiCloud, FiTool } from "react-icons/fi";
import "./Skills.scss";

const CATEGORY_ICONS = {
  frontend: FiLayout,
  backend: FiServer,
  database: FiDatabase,
  devops: FiCloud,
};

const TECH_ICONS = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3 / SCSS": { icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Vite": { icon: SiVite, color: "#646CFF" },
  "Angular": { icon: SiAngular, color: "#DD0031" },
  ".NET / C#": { icon: SiDotnet, color: "#512BD4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "PHP / Laravel": { icon: SiLaravel, color: "#FF2D20" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "SQL Server": { icon: FiTool, color: "#CC2927" },
  "Oracle": { icon: FiTool, color: "#F80000" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "AWS": { icon: FiCloud, color: "#FF9900" },
  "Git / GitHub": { icon: SiGit, color: "#F05032" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function TechIcon({ name, size = 28 }) {
  const tech = TECH_ICONS[name];
  if (!tech) return null;
  const Icon = tech.icon;
  return (
    <div className="skills__tech-icon" title={name}>
      <Icon size={size} color={tech.color} />
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const categories = t("skills.categories", { returnObjects: true });
  const allSkills = categories.flatMap((cat) => cat.skills);

  return (
    <section className="skills section" id="skills">
      <div className="skills__inner container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="section-heading" variants={fadeUp}>
            {t("skills.title")}
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t("skills.subtitle")}
          </motion.p>

          <motion.div className="skills__tech-grid" variants={fadeUp}>
            {allSkills.map((skill, i) => (
              <TechIcon key={i} name={skill.name} />
            ))}
          </motion.div>

          <div className="skills__grid">
            {categories.map((cat, i) => {
              const CatIcon = CATEGORY_ICONS[cat.icon] || FiLayout;
              return (
                <motion.div className="skills__category" key={i} variants={fadeUp}>
                  <div className="skills__category-header">
                    <CatIcon size={18} className="skills__category-icon" />
                    <h3 className="skills__category-name">{cat.name}</h3>
                  </div>
                  <div className="skills__list">
                    {cat.skills.map((skill, j) => (
                      <div className="skills__item" key={j}>
                        <div className="skills__item-header">
                          <span className="skills__item-name">{skill.name}</span>
                          <span className="skills__item-level">{skill.level}%</span>
                        </div>
                        <div className="skills__bar">
                          <motion.div
                            className="skills__bar-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: j * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
