import MainLayout from '../components/templates/MainLayout';
import Navbar from '../components/organisms/Navbar';
import CartSidebar from '../components/organisms/CartSidebar'; // ✅ IMPORT
import HeroSection from '../components/organisms/HeroSection';
import StatsSection from '../components/organisms/StatsSection';
import ProductsSection from '../components/organisms/ProductsSection';
import WhyChooseSection from '../components/organisms/WhyChooseSection';
import CTASection from '../components/organisms/CTASection';
import Footer from '../components/organisms/Footer';
import { products } from '../data/products';
import { config } from '../data/config';

export default function HomePage() {
  return (
    <MainLayout>
      <Navbar whatsappNumber={config.whatsappNumber} />
      <CartSidebar /> {/* ✅ TAMBAH INI */}
      
      <HeroSection whatsappNumber={config.whatsappNumber} />
      <StatsSection />
      <ProductsSection products={products} />
      <WhyChooseSection />
      <CTASection whatsappNumber={config.whatsappNumber} />
      <Footer 
        whatsappNumber={config.whatsappNumber}
        instagram={config.instagram}
      />
    </MainLayout>
  );
}