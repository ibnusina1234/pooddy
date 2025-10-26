import { motion } from 'framer-motion';

export default function HeroSubtitle({ children, delay = 0 }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
    >
      {children}
    </motion.p>
  );
}