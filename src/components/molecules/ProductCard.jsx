import { motion } from 'framer-motion';
import Badge from '../atoms/Badge';
import PriceTag from '../atoms/PriceTag';
import Button from '../atoms/Button';
import { useCart } from '../../context/CartContext'; // ✅ PENTING!

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    console.log('Added to cart:', product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative w-full"
    >
      <div className="relative bg-white rounded-xl md:rounded-3xl overflow-hidden shadow-md md:shadow-xl transition-all duration-500 md:hover:-translate-y-2">
        {/* Image: mobile compact -> md besar */}
        <div className="relative h-28 sm:h-36 md:h-72 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {product.comingSoon && (
            <div className="absolute inset-0 bg-gray-800/75 flex items-center justify-center z-40">
              <div className="bg-white/95 px-3 sm:px-6 py-1.5 sm:py-3 rounded-full shadow-2xl">
                <span className="text-xs sm:text-sm md:text-2xl font-extrabold text-rose-600">COMING SOON</span>
              </div>
            </div>
          )}

          {product.tags && product.tags.length > 0 && (
            <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
              {product.tags.map((tag, i) => (
                <Badge key={i} variant="default" className="text-[10px] sm:text-xs md:text-sm px-2 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="absolute top-3 right-3 text-xs sm:text-sm md:text-base">
            <PriceTag price={product.price} />
          </div>
        </div>

        {/* Content: mobile compact */}
        <div className="p-3 sm:p-4 md:p-6">
          <h3 className="text-base sm:text-lg md:text-2xl font-black text-gray-800 mb-1 sm:mb-2 group-hover:text-pink-600 transition-colors">
            {product.name}
          </h3>

          {/* sembunyikan deskripsi di very small screens */}
          <p className="text-gray-600 mb-2 sm:mb-4 leading-relaxed text-sm md:text-base hidden sm:block">
            {product.desc}
          </p>

          {!product.comingSoon ? (
            <div className="flex justify-start">
              <Button
                variant="card"
                onClick={handleAddToCart}
                className="text-xs sm:text-sm md:text-base py-1 px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4"
              >
                <span>🛒 Add to Cart</span>
              </Button>
            </div>
          ) : (
            <div className="text-center text-gray-400 italic text-sm sm:text-base">Akan segera hadir</div>
          )}
        </div>

        <div className="absolute inset-0 rounded-xl md:rounded-3xl border-4 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}