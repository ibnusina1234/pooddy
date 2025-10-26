import StatCard from '../molecules/StatCard';

export default function StatsSection() {
  const stats = [
    { value: "1000+", label: "Happy Customers" },
    { value: "6", label: "Varian Rasa" },
    { value: "100%", label: "Homemade Fresh" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              value={stat.value}
              label={stat.label}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}