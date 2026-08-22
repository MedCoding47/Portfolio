import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiFileText } from "react-icons/fi";
import "./Certifications.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const CERTS = [
  {
    badgeId: "dab79ef1-aacb-4439-95ba-2238bdbb9168",
    pdf: "/Portfolio/Managing-a-Business-Venture.pdf",
  },
  {
    badgeId: "f072f16b-6c1e-457c-9795-9a1bfe1c07f9",
    pdf: "/Portfolio/Data-Science-Essentials-with-Python.pdf",
  },
];

export default function Certifications() {
  const { t } = useTranslation();
  const items = t("certifications.items", { returnObjects: true });

  return (
    <section className="certifications section" id="certifications">
      <span className="section-bg-text" aria-hidden="true">{t("certifications.title")}</span>
      <div className="certifications__inner container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div className="accent-bar" variants={fadeUp} />
          <motion.h2 className="section-heading" variants={fadeUp}>
            {t("certifications.title")}
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t("certifications.subtitle")}
          </motion.p>

          <div className="certifications__grid">
            {items.map((item, i) => {
              const cert = CERTS[i];
              if (!cert) return null;
              return (
                <motion.div
                  className="certifications__card"
                  key={cert.badgeId}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                >
                  <div className="certifications__badge-wrap">
                    <iframe
                      title={`Credly Badge — ${item.title}`}
                      src={`https://www.credly.com/embedded_badge/${cert.badgeId}`}
                      width="150"
                      height="270"
                      frameBorder="0"
                      loading="lazy"
                    />
                  </div>
                  <div className="certifications__info">
                    <span className="certifications__verified">
                      <FiAward size={16} /> {t("certifications.verifiedBadge")}
                    </span>
                    <h3 className="certifications__name">{item.title}</h3>
                    <p className="certifications__issuer">{item.issuer}</p>
                    <p className="certifications__desc">{item.desc}</p>
                    <div className="certifications__actions">
                      <a
                        className="btn btn--outline"
                        href={`https://www.credly.com/badges/${cert.badgeId}/public_url`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("certifications.viewBadge")} <FiExternalLink size={14} />
                      </a>
                      <a
                        className="btn btn--primary"
                        href={cert.pdf}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiFileText size={14} /> {t("certifications.viewPdf")}
                      </a>
                    </div>
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
