import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";

const Hero = () => {
  const { backgroundY, contentY } = useParallax(0.5);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className="relative min-h-[600px] h-[75vh] overflow-hidden will-change-transform"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b')",
          filter: "brightness(0.7)",
          transform: `translateY(${backgroundY}px)`,
        }}
      />
      <div 
        className="container relative z-10 mx-auto px-4 h-full flex items-end transition-transform"
        style={{
          transform: `translateY(${contentY}px)`,
        }}
      >
        <div className="max-w-2xl text-white pb-[10vh]">
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