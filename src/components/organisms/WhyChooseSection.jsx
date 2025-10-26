import SectionTitle from '../molecules/SectionTitle';
import FeatureCard from '../molecules/FeatureCard';

export default function WhyChooseSection() {
  const features = [
    { 
      icon: "🏠", 
      title: "100% Homemade", 
      description: "Dibuat fresh setiap hari dengan bahan berkualitas premium" 
    },
    { 
      icon: "📸", 
      title: "Instagramable", 
      description: "Packaging lucu & aesthetic, cocok banget buat konten!" 
    },
    { 
      icon: "💰", 
      title: "Harga Terjangkau", 
      description: "Mulai dari 9K aja, worth it banget untuk kualitas premium!" 
    },
      { 
      icon: "✌️", 
      title: "Bisa Request Ukuran & Varian", 
      description: "Kami menerima request ukuran dan varian sesuai keinginanmu!" 
    },
    { 
      icon: "🥳", 
      title: "Cocok untuk Semua Acara", 
      description: "Pooddy sempurna untuk ulang tahun, kado, atau sekadar treat diri sendiri!" 
    },
    { 
      icon: "🚚", 
      title: "Gratis Ongkir", 
      description: "Gratis ongkir untuk area tertentu, bikin belanja makin hemat!" 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Why Pooddy? 💕</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}