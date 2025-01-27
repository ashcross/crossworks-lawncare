import { useState } from "react";
import { Scissors, Droplets, Sprout, Pressure, Tool } from "lucide-react";
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
    description: "Comprehensive lawn maintenance services to keep your grass healthy and beautiful.",
    image: "/placeholder.svg",
    subServices: [
      {
        icon: <Scissors className="w-6 h-6 text-primary" />,
        title: "Regular Mowing & Edging",
        description: "Professional cutting and edging services to maintain the perfect lawn height and neat borders."
      },
      {
        icon: <Droplets className="w-6 h-6 text-primary" />,
        title: "Irrigation System Maintenance",
        description: "Expert maintenance and repairs for your irrigation systems to ensure optimal water distribution."
      },
      {
        icon: <Sprout className="w-6 h-6 text-primary" />,
        title: "Fertilization & Weed Control",
        description: "Targeted treatment programs to promote healthy growth and prevent weed invasion."
      },
    ],
  },
  {
    title: "Property Cleaning & Maintenance",
    description: "Complete property care solutions to maintain your property's value and appearance.",
    image: "/placeholder.svg",
    subServices: [
      {
        icon: <Pressure className="w-6 h-6 text-primary" />,
        title: "Pressure Washing",
        description: "High-powered cleaning for driveways, decks, and exterior surfaces to remove dirt and grime."
      },
      {
        icon: <Tool className="w-6 h-6 text-primary" />,
        title: "General Property Maintenance",
        description: "Comprehensive maintenance services to keep your property in top condition year-round."
      },
    ],
  },
];

const ServiceSection = ({ service }: { service: ServiceSection }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 py-16">
      <div className="relative h-[400px]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="space-y-8">
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