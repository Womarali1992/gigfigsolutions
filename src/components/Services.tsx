
import React from "react";
import { Globe, Code, Zap, Settings } from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard = ({ title, price, description, icon, delay }: ServiceCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 md:p-8 flex flex-col h-full animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <div className="bg-gigfig-blue/10 p-3 rounded-full w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gigfig-dark-text">{title}</h3>
      <p className="text-sm text-gigfig-dark-purple font-medium mb-3">Starting at {price}</p>
      <p className="text-gigfig-dark-text/80 flex-grow">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">What We Offer</h2>
        <p className="section-subtitle text-center">
          Solutions tailored to your business needs, from simple websites to complex software systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <ServiceCard
            title="Simple Websites"
            price="$500"
            description="Clean, professional websites designed to showcase your business and help you connect with customers."
            icon={<Globe className="h-6 w-6 text-gigfig-blue" />}
            delay="0.1s"
          />
          <ServiceCard
            title="Custom Software"
            price="$5,000"
            description="Scalable platforms and applications built to address your specific business challenges."
            icon={<Code className="h-6 w-6 text-gigfig-blue" />}
            delay="0.2s"
          />
          <ServiceCard
            title="Automation & Support"
            price="Custom Quote"
            description="Save time and reduce manual work with smart tools that streamline your operations."
            icon={<Zap className="h-6 w-6 text-gigfig-blue" />}
            delay="0.3s"
          />
          <ServiceCard
            title="Custom Solutions"
            price="Custom Quote"
            description="Integrations and systems built around your workflow to maximize efficiency."
            icon={<Settings className="h-6 w-6 text-gigfig-blue" />}
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
