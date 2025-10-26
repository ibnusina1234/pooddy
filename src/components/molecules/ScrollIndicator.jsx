import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-white/80 text-center cursor-pointer hover:text-white transition-colors"
      >
        <div className="text-sm mb-2 font-medium">Scroll untuk lihat menu</div>
        <div className="text-2xl">↓</div>
      </motion.div>
    </motion.div>
  );
}