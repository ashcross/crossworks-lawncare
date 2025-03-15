import { useState } from "react";
import { Scissors, Droplets, Sprout, Wrench } from "lucide-react";
import { Button } from "./ui/button";

interface SubService {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceSection {
  title: string;
  description: string;
  image: string;
  subServices: SubService[];
}

const services: ServiceSection[] = [
  {
    title: "Lawn Care",
    description: "We offer a range or lawn maintenance services to get your grass healthy and beautiful. See some examples of what we do below:",
    image: "https://res.cloudinary.com/degvaujqm/image/upload/f_auto,q_auto/grass-03-before-and-after.webp",
    subServices: [
      {
        icon: <Scissors className="w-6 h-6 text-primary" />,
        title: "Regular Mowing & Edging",
        description: "Professional cutting and edging services to maintain the perfect lawn height and neat borders. We have a regular schedule to keep your lawns looking tidy."
      },
      {
        icon: <Droplets className="w-6 h-6 text-primary" />,
        title: "Clean up & Mulching",
        description: "After each mow we make sure your property remains clean and tidy. Our mulching mower blades finely chop grass clippings and redistribute them back onto your lawn, providing natural fertilization to keep your grass lush and green."
      },
      {
        icon: <Sprout className="w-6 h-6 text-primary" />,
        title: "Overgrown Lawn Restoration",
        description: "If your lawn has gotten out of hand, we provide overgrown lawn restoration services. We’ll get your yard looking tidy and manageable again."
      },
      {
        icon: <Sprout className="w-6 h-6 text-primary" />,
        title: "Hedge Trimming & Tree Pruning",
        description: "If you want a sharp edge to your hedge, or want a messy tree tidied up, we can cut it back and sort it out!"
      },
    ],
  },
  {
    title: "Exterior house cleaning and Pressure Washing Services",
    description: "Complete property care solutions to maintain your property's value and appearance.",
    image: "https://res.cloudinary.com/degvaujqm/image/upload/f_auto,q_auto/building-01-before-and-after.webp",
    subServices: [
      {
        icon: <Wrench className="w-6 h-6 text-primary" />,
        title: "Exterior House Washing",
        description: "With the use of soft-washing techniques, we use the appropriate chemicals to brighten up your home, while protecting your delicate surfaces. Say goodbye to things like moss, algae and mildew, and hello to a bright and clean surface."
      },
      {
        icon: <Wrench className="w-6 h-6 text-primary" />,
        title: "Roof, Deck, Driveway, Wall and Gutter Cleaning",
        description: "Using Commercial Grade gear, we can get your outdoor surfaces looking great again! Whether it be a dirty driveway, or a roof that needs some attention, we have you covered!"
      },
      {
        icon: <Wrench className="w-6 h-6 text-primary" />,
        title: "Commercial Pressure Washing",
        description: "Designed for businesses - we clean high-traffic areas, remove dirt, grime, and graffiti, and restore the appearance of your commercial property, helping you maintain a professional image for customers and clients."
      },
      {
        icon: <Wrench className="w-6 h-6 text-primary" />,
        title: "Window Washing",
        description: "Let us clean the exterior of your windows with our professional washing service, eliminating dirt, stains, and grime that builds up on glass and window frames."
      },
    ],
  },
];

const ServiceSection = ({ service }: { service: ServiceSection }) => {
  return (
    <div className="grid md:grid-cols-5 gap-24 py-16">
      <div className="relative h-auto col-span-2 my-auto">
        <img
          src={service.image}
          alt={service.title}
          className="w-full max-h-full object-cover rounded-lg"
        />
      </div>
      <div className="space-y-8 col-span-3">
        <div>
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-gray-600">{service.description}</p>
        </div>
        
        <div className="space-y-6">
          {service.subServices.map((subService, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {subService.icon}
                </div>
                <h3 className="text-xl font-semibold">{subService.title}</h3>
              </div>
              <p className="text-gray-600 ml-16">{subService.description}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="w-full md:w-auto"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Free Quote
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {services.map((service, index) => (
            <ServiceSection key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
