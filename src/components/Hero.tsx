import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          backgroundImage: "url('https://res.cloudinary.com/degvaujqm/image/upload/f_auto,q_auto/jake-nackos-C2PCa6DhlYE-unsplash.webp')",
          filter: "brightness(0.7)",
        }}
      />
      <div className="container relative z-10 mx-auto px-4 h-full flex flex-col items-center justify-center gap-8">
        
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <Link to="/" className="mb-4 aspect-square bg-white/60 backdrop-blur-sm flex justify-center items-center rounded-full p-6 shadow-lg">
              <img 
                src="/logo.png" 
                alt="CrossWorks Lawnmowing & Property Care" 
                className="h-24 w-auto transition-transform hover:scale-105" 
              />
            </Link>
          </div>
        </div>

        <div className="max-w-2xl text-white text-center drop-shadow-lg ">
          <div className="flex justify-center gap-4 text-gray-200 mb-4 font-semibold"><span>Honest</span>|<span>Hardworking</span>|<span>Reliable</span></div>
          <h1 className="text-5xl font-bold mb-6">CrossWorks Lawnmowing and Property Care</h1>
          <p className="text-xl mb-8">Transform your outdoor spaces with our expert lawn mowing and pressure washing services.</p>
          <Button
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 justify-self-center"
          >
            Get Free Quote <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
