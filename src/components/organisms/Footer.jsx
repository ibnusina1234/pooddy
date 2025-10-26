
import Logo from '../atoms/Logo';
export default function Footer({ whatsappNumber, instagram }) {
      const currentYear = new Date().getFullYear();

      return (
            <footer className="py-12 bg-gray-900 text-white">
                  <div className="max-w-6xl mx-auto px-6 text-center">
                        {/* ✅ LOGO - TAMBAH INI */}
                        <div className="flex justify-center mb-4">
                              <Logo size="lg" className="opacity-90 hover:opacity-100" />
                        </div>
                        <h3 className="text-3xl font-black mb-4">
                              Pooddy<span className="text-pink-400">💖</span>
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                              Pudding Homemade Silky & Aesthetic untuk semua kalangan yang cinta dessert!
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 mb-6 flex-wrap">
                              <a
                                    href={`https://instagram.com/${instagram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-400 hover:text-pink-300 transition-colors duration-300 flex items-center gap-2"
                              >
                                    <span className="text-2xl">📷</span>
                                    <span>@{instagram}</span>
                              </a>
                              <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center gap-2"
                              >
                                    <span className="text-2xl">💬</span>
                                    <span>WhatsApp</span>
                              </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-gray-500 text-sm">
                              © {currentYear} Pooddy. Made with 💖 in Indonesia
                        </p>
                         <p className="text-gray-500 text-sm">
                              created by @ibnusinaalby
                        </p>
                  </div>
            </footer>
      );
}