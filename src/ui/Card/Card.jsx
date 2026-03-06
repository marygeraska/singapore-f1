import { motion } from "framer-motion";
import { useTheme } from "../Theme";


export default function Card({ children }) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className={theme.card} // Стили (border, bg, rounded) теперь только тут
    >
      {children}
    </motion.div>
  );
}


