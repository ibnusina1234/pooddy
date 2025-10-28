import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import Button from '../atoms/Button';
import { config } from '../../data/config';

export default function CartSidebar() {
      const {
            cartItems,
            isCartOpen,
            setIsCartOpen,
            updateQuantity,
            removeFromCart,
            clearCart,
            getTotalItems,
            getTotalPrice,
            formatPrice
      } = useCart();

      // Generate WhatsApp message
      const generateWhatsAppMessage = () => {
            let message = " *PESANAN POODDY*\n\n";

            cartItems.forEach((item, index) => {
                  const itemPrice = parseInt(item.price.replace('K', '')) * 1000;
                  const subtotal = itemPrice * item.quantity;
                  message += `${index + 1}. ${item.name}\n`;
                  if (item.size) message += `   Ukuran: ${item.size}\n`;
                  if (item.buyerName) message += `   Nama Pemesan: ${item.buyerName}\n`;
                  message += `   Qty: ${item.quantity}x\n`;
                  message += `   Harga: ${formatPrice(item.price)}\n`;
                  message += `   Subtotal: Rp ${subtotal.toLocaleString('id-ID')}\n\n`;
            });

            message += `*TOTAL: Rp ${getTotalPrice().toLocaleString('id-ID')}*\n\n`;
            message += "Terima kasih! ";

            // Return both raw and encoded for debugging
            const encoded = encodeURIComponent(message);
            // debug logs (will appear in browser console)
            console.debug('WhatsApp raw message:', message);
            console.debug('WhatsApp encoded message:', encoded);
            return encoded;
      };

      const handleCheckout = () => {
            const message = generateWhatsAppMessage();
            const url = `https://wa.me/${config.whatsappNumber}?text=${message}`;
            console.debug('Opening WhatsApp URL:', url);
            window.open(url, '_blank', 'noopener,noreferrer');
            clearCart();
            setIsCartOpen(false);
      }; return (
            <>
                  {/* Backdrop */}
                  <AnimatePresence>
                        {isCartOpen && (
                              <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsCartOpen(false)}
                                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                              />
                        )}
                  </AnimatePresence>

                  {/* Sidebar */}
                  <AnimatePresence>
                        {isCartOpen && (
                              <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                    className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
                              >
                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6">
                                          <div className="flex items-center justify-between mb-2">
                                                <h2 className="text-2xl font-black">Keranjang 🛒</h2>
                                                <button
                                                      onClick={() => setIsCartOpen(false)}
                                                      className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                                                >
                                                      <span className="text-2xl">✕</span>
                                                </button>
                                          </div>
                                          <p className="text-white/90">{getTotalItems()} items</p>
                                    </div>

                                    {/* Cart Items */}
                                    <div className="flex-1 overflow-y-auto p-4">
                                          {cartItems.length === 0 ? (
                                                <div className="text-center py-12">
                                                      <div className="text-6xl mb-4">🛒</div>
                                                      <p className="text-gray-500 text-lg font-semibold">
                                                            Keranjang masih kosong
                                                      </p>
                                                      <p className="text-gray-400 text-sm mt-2">
                                                            Yuk, pilih pudding favoritmu!
                                                      </p>
                                                </div>
                                          ) : (
                                                <div className="space-y-4">
                                                      {cartItems.map((item) => (
                                                            <motion.div
                                                                  key={item.cartId}
                                                                  initial={{ opacity: 0, y: 20 }}
                                                                  animate={{ opacity: 1, y: 0 }}
                                                                  exit={{ opacity: 0, x: -100 }}
                                                                  className="bg-gray-50 rounded-2xl p-4 relative"
                                                            >
                                                                  {/* Remove Button */}
                                                                  <button
                                                                        onClick={() => removeFromCart(item.cartId)}
                                                                        className="absolute top-2 right-2 text-red-500 hover:bg-red-100 rounded-full p-1.5 transition-colors"
                                                                  >
                                                                        <span className="text-lg">🗑️</span>
                                                                  </button>

                                                                  <div className="flex gap-4">
                                                                        {/* Image */}
                                                                        <img
                                                                              src={item.image}
                                                                              alt={item.name}
                                                                              className="w-20 h-20 object-cover rounded-xl"
                                                                        />

                                                                        {/* Info */}
                                                                        <div className="flex-1">
                                                                              <h3 className="font-black text-gray-800 mb-1">
                                                                                    {item.name}
                                                                              </h3>
                                                                              <p className="text-pink-600 font-bold mb-2">
                                                                                    {formatPrice(item.price)}
                                                                              </p>
                                                                                    {item.size && (
                                                                                          <p className="text-sm text-gray-600">Ukuran: {item.size}</p>
                                                                                    )}
                                                                                    {item.buyerName && (
                                                                                          <p className="text-sm text-gray-600">Nama: {item.buyerName}</p>
                                                                                    )}

                                                                              {/* Quantity Control */}
                                                                              <div className="flex items-center gap-3">
                                                                                    <button
                                                                                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                                                                          className="bg-white hover:bg-gray-100 text-gray-800 font-bold w-8 h-8 rounded-lg transition-colors"
                                                                                    >
                                                                                          −
                                                                                    </button>
                                                                                    <span className="font-bold text-gray-800 w-8 text-center">
                                                                                          {item.quantity}
                                                                                    </span>
                                                                                    <button
                                                                                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                                                                          className="bg-pink-500 hover:bg-pink-600 text-white font-bold w-8 h-8 rounded-lg transition-colors"
                                                                                    >
                                                                                          +
                                                                                    </button>
                                                                              </div>
                                                                        </div>
                                                                  </div>

                                                                  {/* Subtotal */}
                                                                  <div className="mt-3 pt-3 border-t border-gray-200">
                                                                        <div className="flex justify-between items-center">
                                                                              <span className="text-sm text-gray-600">Subtotal:</span>
                                                                              <span className="font-black text-gray-800">
                                                                                    Rp {(parseInt(item.price.replace('K', '')) * 1000 * item.quantity).toLocaleString('id-ID')}
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                            </motion.div>
                                                      ))}
                                                </div>
                                          )}
                                    </div>

                                    {/* Footer - Checkout */}
                                    {cartItems.length > 0 && (
                                          <div className="border-t border-gray-200 p-4 bg-white">
                                                {/* Total */}
                                                <div className="mb-4">
                                                      <div className="flex justify-between items-center mb-2">
                                                            <span className="text-gray-600">Total Items:</span>
                                                            <span className="font-bold">{getTotalItems()}</span>
                                                      </div>
                                                      <div className="flex justify-between items-center">
                                                            <span className="text-lg font-bold text-gray-800">Total:</span>
                                                            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                                                                  Rp {getTotalPrice().toLocaleString('id-ID')}
                                                            </span>
                                                      </div>
                                                </div>

                                                {/* Buttons */}
                                                      <div className="space-y-2">
                                                      <Button
                                                            variant="primary"
                                                            onClick={handleCheckout}
                                                            className="w-full"
                                                      >
                                                            <span>Checkout via WhatsApp</span>
                                                            <span className="text-xl">💬</span>
                                                      </Button>
                                                      <button
                                                            onClick={clearCart}
                                                            className="w-full py-3 text-red-600 hover:bg-red-50 rounded-full font-bold transition-colors"
                                                      >
                                                            Kosongkan Keranjang
                                                      </button>
                                                </div>
                                          </div>
                                    )}
                              </motion.div>
                        )}
                  </AnimatePresence>
            </>
      );
}