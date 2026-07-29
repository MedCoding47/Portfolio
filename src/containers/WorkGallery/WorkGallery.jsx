import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useAnimations";
import img1 from "../../assets/images/work/1.jpeg";
import img2 from "../../assets/images/work/2.jpeg";
import img3 from "../../assets/images/work/3.jpeg";
import img4 from "../../assets/images/work/4.jpeg";
import "./WorkGallery.scss";

const images = [
  { src: img1, alt: "Work 1" },
  { src: img2, alt: "Work 2" },
  { src: img3, alt: "Work 3" },
  { src: img4, alt: "Work 4" },
];

export default function WorkGallery() {
  const reveal = useScrollReveal(0.15);

  return (
    <section className="work-gallery section">
      <div className="work-gallery__inner container">
        <motion.div {...reveal}>
          <div className="work-gallery__track">
            {images.map((img, i) => (
              <motion.figure
                className="work-gallery__item"
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="work-gallery__media">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
