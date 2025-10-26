export default function Badge({ children, variant = 'default' }) {
  const variants = {
    default: "px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-pink-600 shadow-lg",
    hero: "px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium border border-white/30 hover:bg-white/30 transition-colors duration-300",
    product: "px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-xs font-bold shadow-md"
  };

  return <span className={variants[variant]}>{children}</span>;
}