import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="scroll-progress"
    />
  );
}

export function Marquee({ text, speed = 30, className = "" }) {
  const ref = useRef(null);
  return (
    <div ref={ref} className={`marquee ${className}`}>
      <div className="marquee__track">
        <span className="marquee__text">{text}</span>
        <span className="marquee__text" aria-hidden="true">{text}</span>
        <span className="marquee__text" aria-hidden="true">{text}</span>
        <span className="marquee__text" aria-hidden="true">{text}</span>
      </div>
    </div>
  );
}

export function SplitHeading({ text, className = "", ...props }) {
  const words = text.split(" ");

  return (
    <motion.h2 className={`split-heading ${className}`} {...props}>
      {words.map((word, i) => (
        <span key={i} className="split-heading__word">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              className="split-heading__char"
              variants={{
                hidden: { opacity: 0, y: 30, rotateX: -40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.h2>
  );
}
