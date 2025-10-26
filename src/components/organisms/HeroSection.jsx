import { motion } from 'framer-motion';
import Badge from '../atoms/Badge';
import HeroTitle from '../molecules/HeroTitle';
import HeroSubtitle from '../molecules/HeroSubtitle';
import HeroCTA from '../molecules/HeroCTA';
import ScrollIndicator from '../molecules/ScrollIndicator';
import FloatingEmoji from '../atoms/FloatingEmoji';

export default function HeroSection({ whatsappNumber }) {
  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1600&q=80"
          alt="Delicious pudding"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/50 via-purple-900/30 to-rose-900/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <Badge variant="hero">✨ Homemade with Love</Badge>
          </motion.div>

          {/* Title */}
          <HeroTitle delay={0.6}>
            Pooddy<span className="text-pink-300">💖</span>
          </HeroTitle>

          {/* Rest of the code stays the same... */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-2xl md:text-3xl text-pink-100 mb-4 font-semibold"
          >
            Pudding Silky & Aesthetic yang Gak Cuma Enak,
          </motion.p>
          
          <HeroSubtitle delay={1.0}>
            Tapi Enak Bangettt! 🤤
          </HeroSubtitle>

          <HeroCTA whatsappNumber={whatsappNumber} delay={1.2} />

          {/* Floating Emojis */}
          <div className="absolute top-20 left-10 md:left-20">
            <FloatingEmoji emoji="🍮" delay={0} duration={3} />
          </div>
          <div className="absolute top-32 right-20 md:right-32">
            <FloatingEmoji emoji="✨" delay={0.5} duration={2.5} />
          </div>
          <div className="absolute bottom-40 left-20 md:left-32">
            <FloatingEmoji emoji="💖" delay={1} duration={3.5} />
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </header>
  );
}