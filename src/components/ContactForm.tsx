import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

declare global {
  interface Window {
    turnstile: any;
    onloadTurnstileCallback: () => void;
  }
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Initialize Turnstile
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback";
    script.async = true;
    script.defer = true;
    
    // Callback when Turnstile is ready
    window.onloadTurnstileCallback = () => {
      window.turnstile.render('#turnstile-container', {
        sitekey: '0x4AAAAAAA7iStvlhUXukK_8', // Replace with your actual site key
        callback: function(token: string) {
          setTurnstileToken(token);
        },
      });
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
      delete window.onloadTurnstileCallback;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      toast({
        title: "Error",
        description: "Please complete the security check",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_bs7jei4', // Replace with your EmailJS service ID
        'template_k3cbmu9', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          turnstile: turnstileToken,
        },
        '2JBp9RKirFKiRlxF2' // Replace with your EmailJS public key
      );

      toast({
        title: "Quote Request Received!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
      // Reset Turnstile
      window.turnstile.reset();
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you with a customized quote for your property.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full"
              disabled={isLoading}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full"
              disabled={isLoading}
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full"
              disabled={isLoading}
            />
          </div>
          <div>
            <Textarea
              placeholder="Tell us about your property and service needs..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full min-h-[150px]"
              disabled={isLoading}
            />
          </div>
          <div id="turnstile-container" className="flex justify-center"></div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Request Free Quote"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
