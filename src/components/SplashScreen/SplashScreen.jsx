import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.scss";

const NAME = "Ayat Mohamed".split("");
const ROLE = "Softwareentwickler";

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
  const [phase, setPhase] = useState("closed");
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    // Cycle 1: open
    const t1 = setTimeout(() => setPhase("open1"), 400);
    // Cycle 1: close
    const t2 = setTimeout(() => setPhase("closed1"), 800);
    // Cycle 2: open
    const t3 = setTimeout(() => setPhase("open2"), 1100);
    // Cycle 2: close + reveal name
    const t4 = setTimeout(() => { setPhase("reveal"); setShowName(true); }, 1600);
    // Role appears
    const t5 = setTimeout(() => setShowRole(true), 2500);
    // Exit
    const t6 = setTimeout(() => setPhase("exit"), 3600);
    const t7 = setTimeout(() => onFinish(), 4200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); clearTimeout(t7); };
  }, [onFinish]);

  const isOpen = phase === "open1" || phase === "open2";
  const isReveal = phase === "reveal" || phase === "exit";

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
                animate={{ x: (isOpen || isReveal) ? -130 : 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 16 }}
              >
                {"<"}
              </motion.span>

              <motion.span
                className="splash__slash"
                animate={{ x: (isOpen || isReveal) ? -60 : 0, opacity: (isOpen || isReveal) ? 1 : 1 }}
                transition={{ type: "spring", stiffness: 160, damping: 16 }}
              >
                {"/"}
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
                animate={{ x: (isOpen || isReveal) ? 130 : 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 16 }}
              >
                {">"}
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
