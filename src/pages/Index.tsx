import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <Services />
        <ContactForm />
        <ImageGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;