import { motion } from 'framer-motion';
import Button from '../atoms/Button';

export default function CTASection({ whatsappNumber }) {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Try? 🍮✨
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Order sekarang juga dan rasain puddingnya yang lembut, creamy, dan bikin ketagihan!
          </p>
          <Button
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo! Aku mau order Pooddy 💖")}`}
            variant="white"
            className="inline-block"
          >
            Chat Now on WhatsApp 💬
          </Button>
        </motion.div>
      </div>
    </section>
  );
}