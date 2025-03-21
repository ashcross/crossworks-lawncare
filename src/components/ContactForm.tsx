import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

// Declare global grecaptcha
declare global {
  interface Window {
    grecaptcha: any;
    onloadCallback: () => void;
  }
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Make sure window.onloadCallback is defined
    window.onloadCallback = () => {
      if (recaptchaRef.current && window.grecaptcha) {
        window.grecaptcha.render(recaptchaRef.current, {
          'sitekey': '6LdVR_kqAAAAAIpSjz47nHTz22Unm6ysUKMUt2rE'
        });
      }
    };

    // Load script if it hasn't been loaded yet
    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (window.grecaptcha && window.onloadCallback) {
      // If already loaded, call callback manually
      window.onloadCallback();
    }

    return () => {
      // Cleanup if needed
      if (document.querySelector('script[src*="recaptcha/api.js"]')) {
        window.onloadCallback = undefined;
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get the recaptcha response
      const recaptchaResponse = window.grecaptcha.getResponse();
      
      if (!recaptchaResponse) {
        throw new Error("Please complete the reCAPTCHA verification");
      }
      
      // Replace these with your actual EmailJS service, template and user IDs
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone_number: formData.phone,
        message: formData.message,
        'g-recaptcha-response': recaptchaResponse
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully:", response);
      toast({
        title: "Quote Request Received!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
            />
          </div>
          <div>
            <Textarea
              placeholder="Tell us about your property and service needs..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full min-h-[150px]"
            />
          </div>
          <div ref={recaptchaRef} className="g-recaptcha mb-4"></div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request Free Quote"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;