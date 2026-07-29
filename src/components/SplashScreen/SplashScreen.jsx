import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SplashScreen.scss";

const NAME = "Ayat Mohamed".split("");
const ROLE = "Softwareentwickler";

const customEase = [0.22, 1, 0.36, 1];

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = 60;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random() * 0.3 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 204, 0, ${p.a})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 204, 0, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="splash__canvas" />;
}

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState("enter");
  const [typed, setTyped] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("brackets"), 400);
    const t2 = setTimeout(() => setPhase("name"),    2200);
    const t3 = setTimeout(() => setPhase("role"),    3800);
    const t4 = setTimeout(() => setPhase("glitch"),  5400);
    const t5 = setTimeout(() => onFinish(),           6400);

    return () => {
      clearTimeout(t1); clearTimeout(t2);
      clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
    };
  }, [onFinish]);

  useEffect(() => {
    if (phase !== "role") return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(ROLE.slice(0, i));
      if (i >= ROLE.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "role") { setCursor(true); return; }
    const interval = setInterval(() => setCursor((c) => !c), 400);
    return () => clearInterval(interval);
  }, [phase]);

  const showBrackets = phase !== "enter";

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          className={`splash ${phase === "glitch" ? "splash--glitch" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
        >
          <Particles />

          <div className="splash__scanlines" />

          <motion.div className="splash__center"
            animate={phase === "glitch" ? { scale: 0.95, opacity: 0, rotateZ: [0, 0.3, -0.3, 0] } : {}}
            transition={phase === "glitch" ? { duration: 0.6, ease: customEase } : {}}
          >
            <div className="splash__braces-wrapper">
              <motion.span
                className="splash__brace splash__brace--left"
                initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                animate={
                  showBrackets
                    ? { opacity: 1, x: 0, filter: "blur(0px)" }
                    : { opacity: 0, x: -30, filter: "blur(8px)" }
                }
                transition={{ delay: 0.2, duration: 0.7, ease: customEase }}
              >
                {"<"}
              </motion.span>

              <motion.span
                className="splash__slash"
                initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                animate={
                  showBrackets
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: -20, filter: "blur(8px)" }
                }
                transition={{ delay: 0.45, duration: 0.7, ease: customEase }}
              >
                {"/"}
              </motion.span>

              <motion.span
                className="splash__brace splash__brace--right"
                initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                animate={
                  showBrackets
                    ? { opacity: 1, x: 0, filter: "blur(0px)" }
                    : { opacity: 0, x: 30, filter: "blur(8px)" }
                }
                transition={{ delay: 0.7, duration: 0.7, ease: customEase }}
              >
                {">"}
              </motion.span>

              {(phase === "name" || phase === "role") && (
                <motion.div
                  className="splash__name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: customEase }}
                >
                  {NAME.map((letter, i) => (
                    <motion.span
                      key={i}
                      className="splash__letter"
                      initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        delay: i * 0.045,
                        duration: 0.5,
                        ease: customEase,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="splash__role-line">
              {phase === "role" && (
                <motion.span
                  className="splash__prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  $
                </motion.span>
              )}
              <span className="splash__role-text">{typed}</span>
              {cursor && <span className="splash__cursor" />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
