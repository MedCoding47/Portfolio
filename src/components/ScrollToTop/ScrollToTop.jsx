import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import "./ScrollToTop.scss";

export default function ScrollToTop({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
