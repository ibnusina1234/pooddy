import { motion } from 'framer-motion';

export default function HeroTitle({ children, delay = 0 }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight"
    >
      {children}
    </motion.h1>
  );
}