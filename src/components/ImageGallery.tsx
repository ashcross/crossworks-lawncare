import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Sample gallery images - replace with your actual images
const galleryImages = [
  {
    src: "https://res.cloudinary.com/degvaujqm/image/upload/f_auto,q_auto/roof-01-before.webp",
    alt: "Roof resotration - before with moss and lichen",
    width: 919,
    height: 919,
  },
  {
    src: "https://res.cloudinary.com/degvaujqm/image/upload/f_auto,q_auto/roof-01-after.webp",
    alt: "Roof restoration - after and clean",
    width: 919,
    height: 919,
  },
  {
    src: "https://res.cloudinary.com/degvaujqm/image/upload/f_auto,q_auto/grass-01-before-and-after.webp",
    alt: "Grass lawn restoration - before and after",
    width: 919,
    height: 919,
  },
  {
    src: "https://res.cloudinary.com/degvaujqm/image/upload/f_auto,q_auto/grass-02-before-and-after.webp",
    alt: "Grass lawn restoration - before and after",
    width: 919,
    height: 919,
  },
  {
    src: "https://res.cloudinary.com/degvaujqm/image/upload/f_auto,q_auto/grass-03-before-and-after.webp",
    alt: "Grass lawn restoration - before and after",
    width: 919,
    height: 919,
  },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    setSelectedImage((prev) => 
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) => 
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <h2 
          id="gallery-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Our Work
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Browse through our portfolio of completed projects across the Far North. 
          From immaculate lawns to pristine exteriors, see the quality of our work firsthand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
              onKeyDown={(e) => e.key === "Enter" && setSelectedImage(index)}
              tabIndex={0}
              role="button"
              aria-label={`View larger version of ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <Dialog 
          open={selectedImage !== null} 
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent 
            className="max-w-[90vw] max-h-[90vh] p-0 bg-black/95"
            onKeyDown={handleKeyDown}
          >
            {selectedImage !== null && (
              <div className="relative flex items-center justify-center h-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[85vh] object-contain"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close gallery"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ImageGallery;
