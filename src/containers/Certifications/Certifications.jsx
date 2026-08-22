import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiFileText } from "react-icons/fi";
import "./Certifications.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const BADGE_ID = "dab79ef1-aacb-4439-95ba-2238bdbb9168";
const BADGE_URL = `https://www.credly.com/badges/${BADGE_ID}/public_url`;

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="certifications section" id="certifications">
      <span className="section-bg-text" aria-hidden="true">{t("certifications.title")}</span>
      <div className="certifications__inner container">
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
            {t("certifications.title")}
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            {t("certifications.subtitle")}
          </motion.p>

          <motion.div className="certifications__card" variants={fadeUp} whileHover={{ y: -4 }}>
            <div className="certifications__badge-wrap">
              <iframe
                title={`Credly Badge — ${t("certifications.ciscoTitle")}`}
                src={`https://www.credly.com/embedded_badge/${BADGE_ID}`}
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
              <h3 className="certifications__name">{t("certifications.ciscoTitle")}</h3>
              <p className="certifications__issuer">{t("certifications.ciscoIssuer")}</p>
              <p className="certifications__desc">{t("certifications.ciscoDesc")}</p>
              <div className="certifications__actions">
                <a
                  className="btn btn--outline"
                  href={BADGE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("certifications.viewBadge")} <FiExternalLink size={14} />
                </a>
                <a
                  className="btn btn--primary"
                  href="/Portfolio/Managing-a-Business-Venture.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiFileText size={14} /> {t("certifications.viewPdf")}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
