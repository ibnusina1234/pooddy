import { motion } from 'framer-motion';
import Badge from '../atoms/Badge';
import PriceTag from '../atoms/PriceTag';
import Button from '../atoms/Button';
import { useCart } from '../../context/CartContext'; // ✅ PENTING!
import { useState } from 'react';

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('120');

  const handleConfirmAdd = () => {
    const price = selectedSize === '120' ? '9K' : '18K';
    const sizeLabel = selectedSize === '120' ? '120 ml' : '200 ml';
    const cartItem = {
      ...product,
      price,
      size: sizeLabel,
    };

    addToCart(cartItem);
    setIsModalOpen(false);
    setSelectedSize('120');
  };

  // Show "Start from 9k" when base price is 9K
  const displayPrice = product.price === '9K' ? 'Start from 9k' : product.price;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="group relative w-full h-full"
      >
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">

          {/* Image Section */}
          <div className="relative h-72 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {!product.comingSoon && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}

            {product.comingSoon && (
              <div className="absolute inset-0 bg-gray-800/80 flex items-center justify-center">
                <div className="bg-white px-8 py-4 rounded-xl shadow-2xl">
                  <span className="text-3xl font-black text-rose-500">COMING SOON</span>
                </div>
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {product.tags.map((tag, i) => (
                  <Badge key={i} variant="default">{tag}</Badge>
                ))}
              </div>
            )}

            {/* Price */}
            <div className="absolute top-4 right-4">
              <PriceTag price={displayPrice} />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-2xl font-black text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">{product.name}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{product.desc}</p>

            {!product.comingSoon ? (
              <Button variant="card" onClick={() => setIsModalOpen(true)}>
                <span>🛒 Add to Cart</span>
              </Button>
            ) : (
              <div className="text-gray-400 text-center italic">Akan segera hadir!</div>
            )}
          </div>

          <div className="absolute inset-0 rounded-3xl border-4 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </motion.div>

      {/* Modal for size and buyer name */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 w-11/12 max-w-md">
            <h4 className="text-lg font-bold mb-3">Pilih Ukuran & Nama Pemesan</h4>

            <div className="mb-4">
              <label className="block font-semibold mb-2">Ukuran</label>
              <div className="flex gap-3">
                <label className={`px-3 py-2 border rounded-lg cursor-pointer ${selectedSize==='120' ? 'border-pink-500 bg-pink-50' : ''}`}>
                  <input type="radio" name="size" value="120" checked={selectedSize==='120'} onChange={() => setSelectedSize('120')} className="mr-2" />
                  120 ml — 9K
                </label>
                <label className={`px-3 py-2 border rounded-lg cursor-pointer ${selectedSize==='200' ? 'border-pink-500 bg-pink-50' : ''}`}>
                  <input type="radio" name="size" value="200" checked={selectedSize==='200'} onChange={() => setSelectedSize('200')} className="mr-2" />
                  200 ml — 18K
                </label>
              </div>
            </div>



            <div className="flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-lg border">Batal</button>
              <button onClick={handleConfirmAdd} className="px-4 py-2 rounded-lg bg-pink-500 text-white font-bold">Tambahkan</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}