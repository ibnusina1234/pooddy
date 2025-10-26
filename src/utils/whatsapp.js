import { config } from '../data/config';

/**
 * Send WhatsApp message for product order
 * @param {string} productName - Name of the product
 */
export const sendWhatsAppMessage = (productName) => {
  const message = `Halo! Aku mau order ${productName} dong 💖`;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${config.whatsappNumber}?text=${encodedMessage}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Send custom WhatsApp message
 * @param {string} message - Custom message text
 */
export const sendCustomMessage = (message) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${config.whatsappNumber}?text=${encodedMessage}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Get WhatsApp link with optional message
 * @param {string} message - Optional message (default: "Halo!")
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppLink = (message = "Halo! Aku mau tanya tentang Pooddy 💖") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${config.whatsappNumber}?text=${encodedMessage}`;
};