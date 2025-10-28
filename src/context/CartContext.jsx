import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('pooddy-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('pooddy-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // If same product id and size exists, increase quantity
      const existingIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingIndex !== -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + (product.quantity || 1),
          price: product.price || updated[existingIndex].price,
        };
        return updated;
      }

      const cartId = `${product.id}-${product.size || ''}-${Date.now()}`;
      const newItem = {
        ...product,
        cartId,
        quantity: product.quantity ?? 1,
      };

      return [...prevItems, newItem];
    });
  };

  // Remove item from cart
  const removeFromCart = (cartId) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartId !== cartId));
  };

  // Update quantity
  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cartId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.cartId === cartId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get total items count
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace('K', '')) * 1000;
      return total + (price * item.quantity);
    }, 0);
  };

  // Format price for display
  const formatPrice = (priceString) => {
    const price = parseInt(priceString.replace('K', '')) * 1000;
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    formatPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}