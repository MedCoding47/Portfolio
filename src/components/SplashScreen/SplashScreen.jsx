import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.scss";

const NAME = "Ayat Mohamed".split("");
const ROLE = "Software Developer";

const letterVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState("enter");
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowName(true), 800);
    const t2 = setTimeout(() => setShowRole(true), 1800);
    const t3 = setTimeout(() => setPhase("exit"), 3200);
    const t4 = setTimeout(() => onFinish(), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="splash__content">
            <div className="splash__braces">
              <motion.span
                className="splash__brace splash__brace--left"
                initial={{ x: 0, scale: 1.5 }}
                animate={showName ? { x: -120, scale: 1 } : { x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
              >
                {"{"}
              </motion.span>

              <div className="splash__name-wrapper">
                {showName && NAME.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="splash__letter"
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>

              <motion.span
                className="splash__brace splash__brace--right"
                initial={{ x: 0, scale: 1.5 }}
                animate={showName ? { x: 120, scale: 1 } : { x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
              >
                {"}"}
              </motion.span>
            </div>

            <AnimatePresence>
              {showRole && (
                <motion.p
                  className="splash__role"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {ROLE}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
