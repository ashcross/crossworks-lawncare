import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className="relative min-h-[600px] h-[75vh]"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/degvaujqm/image/upload/f_auto,q_auto/jake-nackos-C2PCa6DhlYE-unsplash.jpg')",
          filter: "brightness(0.7)",
        }}
      />
      <div 
        className="container relative z-10 mx-auto px-4 h-full flex items-end"
      >
        <div className="max-w-2xl text-white pb-[10vh]">
          <h1 className="text-5xl font-bold mb-6">Professional Lawn & Property Care in Northland</h1>
          <p className="text-xl mb-8">Transform your outdoor spaces with our expert lawn mowing and pressure washing services.</p>
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
