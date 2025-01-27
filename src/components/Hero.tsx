import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      // Get hero section bounds
      const heroRect = heroRef.current.getBoundingClientRect();
      
      // Only update scroll position if hero section is visible
      if (heroRect.bottom > 0) {
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-[600px] max-h-[75vh]"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b')",
          transform: `translateY(${Math.min(scrollPosition * 0.5, 200)}px)`,
          filter: "brightness(0.7)",
        }}
      />
      <div 
        className="container relative z-10 mx-auto px-4 h-full flex items-center"
        style={{
          transform: `translateY(${Math.min(scrollPosition * 0.2, 80)}px)`,
        }}
      >
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Professional Lawn Care & Property Maintenance</h1>
          <p className="text-xl mb-8">Transform your property with our expert services. Get your free quote today!</p>
          <Button
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 transition-all transform hover:scale-105"
          >
            Get Free Quote <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;