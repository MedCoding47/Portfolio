import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useMotionValue, useSpring, useTransform } from "framer-motion";

export function useScrollReveal(staggerDelay = 0.08) {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: staggerDelay } },
    },
  };
}

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function useMouseParallax(strength = 0.03) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const handleMouse = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width);
      y.set((e.clientY - rect.top) / rect.height);
    },
    [x, y]
  );

  const xRange = useTransform(x, [0, 1], [-strength * 100, strength * 100]);
  const yRange = useTransform(y, [0, 1], [-strength * 100, strength * 100]);

  const xSpring = useSpring(xRange, { stiffness: 50, damping: 20 });
  const ySpring = useSpring(yRange, { stiffness: 50, damping: 20 });

  return { x: xSpring, y: ySpring, handleMouse };
}

export function useScrollHide(threshold = 50) {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handle = () => {
      const current = window.scrollY;
      if (current > threshold && current > lastScroll.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [threshold]);

  return hidden;
}

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
}
