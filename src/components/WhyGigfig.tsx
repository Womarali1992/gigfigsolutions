import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Save Money on Ad Spend",
    description: "Capture and convert more leads automatically—so your ad dollars go further."
  },
  {
    title: "Never Miss a Lead Again",
    description: "Instant AI follow-up means fewer cold leads and more closed deals."
  },
  {
    title: "Better Client Engagement",
    description: "Stay in touch with personalized, timely communication across every channel."
  },
  {
    title: "Less Admin, More Closings",
    description: "Free up hours of repetitive work so you can focus on what you do best."
  },
  {
    title: "Smarter Lead Qualification",
    description: "AI filters, scores, and routes inquiries to the right place—no more wasted calls."
  },
  {
    title: "Launch Fast, Scale Seamlessly",
    description: "No new hires, no heavy systems. Get started in days and grow at your pace."
  },
  {
    title: "Simple, Transparent Pricing",
    description: "No surprises. Just clear, value-driven plans built for growing businesses."
  }
];

const WhyGigfig = () => {
  return (
    <section id="why-gigfig" className="py-20 md:py-28 bg-gradient-to-bl from-white/40 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center w-full">
          <h2 className="section-title relative inline-block mb-8">
            Why Gigfig?
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-gigfig-purple rounded-full"></span>
          </h2>
        </div>
        <p className="section-subtitle text-center">
          We believe technology should support your business—not complicate it. Our goal is to deliver 
          solutions that are fast to launch, easy to use, and built to grow with you.
        </p>
        
        <div className="glass-card rounded-xl p-8 md:p-10 max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-2 animate-fade-in group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-gigfig-green flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-gigfig-dark-text group-hover:text-gigfig-dark-text transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gigfig-dark-text/80 pl-9 group-hover:text-gigfig-dark-text/90 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGigfig;
