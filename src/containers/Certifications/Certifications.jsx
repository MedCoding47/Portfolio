import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiExternalLink, FiFileText, FiX, FiMaximize2 } from "react-icons/fi";
import "./Certifications.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const CERTS = [
  {
    badgeId: "dab79ef1-aacb-4439-95ba-2238bdbb9168",
    pdf: "/Portfolio/Managing-a-Business-Venture.pdf",
    image:
      "https://images.credly.com/size/340x340/images/397c4c71-2f0b-4476-8f61-6a6c726d6cd4/linkedin_thumb_image.png",
  },
  {
    badgeId: "f072f16b-6c1e-457c-9795-9a1bfe1c07f9",
    pdf: "/Portfolio/Data-Science-Essentials-with-Python.pdf",
    image:
      "https://images.credly.com/size/340x340/images/62db59ef-19f9-4652-a00c-7582baee8177/linkedin_thumb_blob",
  },
  {
    badgeId: "277b3b9a-29f0-4f13-b758-a996a63308dd",
    pdf: "/Portfolio/Prompt-Like-an-Engineer.pdf",
    image:
      "https://images.credly.com/size/340x340/images/cafee69a-0443-4054-9916-e6644dd75961/linkedin_thumb_blob",
  },
  {
    badgeId: "22ff12a8-cf0e-40ad-a5fb-107cdc781edd",
    pdf: "/Portfolio/Introduction-to-Data-Science.pdf",
    image:
      "https://images.credly.com/size/340x340/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/linkedin_thumb_image.png",
  },
];

export default function Certifications() {
  const { t } = useTranslation();
  const items = t("certifications.items", { returnObjects: true });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

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
                  className="certifications__card certifications__card--clickable"
                  key={cert.badgeId}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelected({ cert, item })}
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
                    <div
                      className="certifications__actions"
                      onClick={(e) => e.stopPropagation()}
                    >
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
                  <span className="certifications__more">
                    {t("certifications.viewDetails")} <FiMaximize2 size={14} />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
          >
            <motion.div
              className="cert-modal__panel"
              role="dialog"
              aria-modal="true"
              aria-label={selected.item.title}
              initial={{ opacity: 0, y: 48, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 48, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                className="cert-modal__close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <FiX size={22} />
              </button>

              <div className="cert-modal__badge-side">
                <a
                  href={`https://www.credly.com/badges/${selected.cert.badgeId}/public_url`}
                  target="_blank"
                  rel="noreferrer"
                  title={t("certifications.viewBadge")}
                >
                  <img src={selected.cert.image} alt={`${selected.item.title} badge`} />
                </a>
              </div>

              <div className="cert-modal__content">
                <span className="certifications__verified">
                  <FiAward size={16} /> {t("certifications.verifiedBadge")}
                </span>
                <h3 className="cert-modal__title">{selected.item.title}</h3>
                <p className="cert-modal__issuer">
                  {t("certifications.issuedBy")}{" "}
                  <strong>{selected.item.issuer}</strong>
                </p>
                <p className="cert-modal__desc">{selected.item.detail || selected.item.desc}</p>

                <div className="cert-modal__skills">
                  {(selected.item.skills || []).map((skill) => (
                    <span className="cert-modal__skill" key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="cert-modal__actions">
                  <a
                    className="btn btn--outline"
                    href={`https://www.credly.com/badges/${selected.cert.badgeId}/public_url`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("certifications.viewBadge")} <FiExternalLink size={14} />
                  </a>
                  <a
                    className="btn btn--primary"
                    href={selected.cert.pdf}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiFileText size={14} /> {t("certifications.viewPdf")}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
