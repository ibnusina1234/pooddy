import { motion } from 'framer-motion';

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-black mb-2">{value}</div>
      <div className="text-xl font-medium opacity-90">{label}</div>
    </motion.div>
  );
}