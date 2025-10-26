export default function Logo({ 
  size = 'md', 
  showText = false,
  className = '' 
}) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Pooddy Logo" 
        className={`${sizes[size]} object-contain rounded-full hover:scale-110 transition-all duration-300 hover:rotate-6 shadow-lg hover:shadow-xl border-2 border-pink-200 hover:border-pink-400`}
      />
      {showText && (
        <span className="text-2xl font-black text-gray-800">
          Pooddy<span className="text-pink-500">💖</span>
        </span>
      )}
    </div>
  );
}