import SectionTitle from '../molecules/SectionTitle';
import ProductCard from '../molecules/ProductCard';

export default function ProductsSection({ products }) { // ✅ Remove onOrder
  return (
    <section id="products" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Pilih favorit kamu, masukkan ke keranjang, dan checkout via WhatsApp! 🛒💕">
          Our Menu ✨
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}