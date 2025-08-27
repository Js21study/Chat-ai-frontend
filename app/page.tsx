import { Footer } from "./components/Footer";
import { CTASection } from "./components/CTASection";
import { Features } from "./components/Features";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100">
      <Navigation />
      <HeroSection />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
}
