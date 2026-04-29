import HeroSection from "@pages/home/sections/HeroSection";
import Header from "@shared/components/Header";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <HeroSection />
    </div>
  );
}
