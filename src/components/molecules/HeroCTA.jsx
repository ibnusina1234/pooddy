import { motion } from 'framer-motion';
import Button from '../atoms/Button';

export default function HeroCTA({ whatsappNumber, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <Button href="#products" variant="primary">
        Order Sekarang 🍮
        <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
      </Button>
      <Button 
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo! Aku mau tanya tentang Pooddy 💖")}`}
        variant="secondary"
      >
        Chat via WhatsApp
      </Button>
    </motion.div>
  );
}