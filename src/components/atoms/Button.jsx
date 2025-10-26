export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  type = 'button',
  disabled = false
}) {
  const baseStyles = "px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  
  const variants = {
    primary: "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-2xl hover:shadow-pink-500/50",
    secondary: "bg-white/20 backdrop-blur-md text-white border-2 border-white/50 hover:bg-white/30",
    white: "bg-white text-pink-600 shadow-2xl hover:shadow-xl hover:shadow-white/30",
    card: "w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-xl hover:shadow-pink-500/50"
  };

  const Component = href ? 'a' : 'button';
  const props = href 
    ? { 
        href, 
        target: href.startsWith('http') ? '_blank' : undefined, 
        rel: href.startsWith('http') ? 'noopener noreferrer' : undefined
      } 
    : { 
        onClick, 
        type,
        disabled
      };

  return (
    <Component 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
}