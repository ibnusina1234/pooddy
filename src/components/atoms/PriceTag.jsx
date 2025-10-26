export default function PriceTag({ price, className = '' }) {
  return (
    <div className={`bg-gradient-to-br from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-black text-lg shadow-lg ${className}`}>
      {price}
    </div>
  );
}