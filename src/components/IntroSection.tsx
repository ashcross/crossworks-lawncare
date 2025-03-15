const IntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Welcome to CrossWorks, your local Lawnmowing and Property Care Professionals serving the Far North
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              We deliver professional lawn care and pressure washing services that keep your property looking its best all year round.
            </p>
            <p>
              With reasonable and affordable pricing, we provide transparent, fair quotes based on your specific needs. Our team brings expertise and dedication to every job, whether it's regular lawn maintenance or restoring your home's exterior to its clean beginnings.
            </p>
            <p>
              We proudly service Kaitaia, Ahipara, Awanui, Taipa, Waipapakauri, Karikari Peninsula and more surrounding areas. So let us help you maintain your slice of Northland paradise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;