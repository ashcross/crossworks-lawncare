import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Service {
  title: string;
  description: string;
  subServices: string[];
}

const services: { [key: string]: Service } = {
  lawnCare: {
    title: "Lawn Care",
    description: "Comprehensive lawn maintenance services to keep your grass healthy and beautiful.",
    subServices: [
      "Regular Mowing & Edging",
      "Fertilization & Weed Control",
      "Aeration & Overseeding",
      "Lawn Disease Treatment",
      "Irrigation System Maintenance",
    ],
  },
  propertyMaintenance: {
    title: "Property Cleaning & Maintenance",
    description: "Complete property care solutions to maintain your property's value and appearance.",
    subServices: [
      "Pressure Washing",
      "Gutter Cleaning",
      "General Property Maintenance",
    ],
  },
};

const ServiceCard = ({ service }: { service: Service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
        {isExpanded ? <ChevronUp /> : <ChevronDown />}
      </div>
      <p className="mt-4 text-gray-600">{service.description}</p>
      <div
        className={`mt-4 space-y-2 transition-all duration-300 ${
          isExpanded ? "block" : "hidden"
        }`}
      >
        {service.subServices.map((subService, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-gray-50 rounded"
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-3" />
            <span>{subService}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.values(services).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;