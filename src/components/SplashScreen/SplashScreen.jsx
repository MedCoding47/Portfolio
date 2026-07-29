import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.scss";

const NAME = "Ayat Mohamed".split("");
const ROLE = "Softwareentwickler";

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState("appear");
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("open1"), 350);
    const t2 = setTimeout(() => setPhase("close1"), 800);
    const t3 = setTimeout(() => setPhase("open2"), 1100);
    const t4 = setTimeout(() => setPhase("reveal"), 1700);
    const t5 = setTimeout(() => setShowRole(true), 2500);
    const t6 = setTimeout(() => setPhase("exit"), 3700);
    const t7 = setTimeout(() => onFinish(), 4300);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); clearTimeout(t7); };
  }, [onFinish]);

  const open = phase === "open1" || phase === "open2" || phase === "reveal";
  const exiting = phase === "exit";

  const nameX = open ? 0 : -30;
  const nameOpacity = open ? 1 : 0;

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
                className="splash__brace"
                animate={{ x: open ? -140 : 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                {"<"}
              </motion.span>

              <motion.span
                className="splash__slash"
                animate={{ x: open ? -70 : 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                {"/"}
              </motion.span>

              <motion.div
                className="splash__name-wrapper"
                animate={{ x: nameX, opacity: nameOpacity }}
                transition={{ type: "spring", stiffness: 140, damping: 16, mass: 0.8 }}
              >
                {NAME.map((letter, i) => (
                  <motion.span
                    key={i}
                    className="splash__letter"
                    animate={{ opacity: open ? 1 : 0, y: open ? 0 : 8 }}
                    transition={{ delay: open ? 0.1 + i * 0.03 : 0, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>

              <motion.span
                className="splash__brace"
                animate={{ x: open ? 140 : 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                {">"}
              </motion.span>
            </div>

            <AnimatePresence>
              {showRole && (
                <motion.p
                  className="splash__role"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
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
