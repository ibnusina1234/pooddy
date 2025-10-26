import { motion } from 'framer-motion';

export default function FloatingEmoji({ 
  emoji, 
  delay = 0, 
  duration = 3, 
  className = ''
}) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut"
      }}
      className={`text-6xl opacity-30 pointer-events-none select-none ${className}`}
    >
      {emoji}
    </motion.div>
  );
}