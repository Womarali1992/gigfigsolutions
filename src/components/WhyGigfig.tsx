import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "Technology that supports your business—not complicates it",
  "Solutions that are fast to launch and easy to use",
  "Systems built to grow with your business",
  "Simple, transparent pricing with no surprises",
  "Dedicated support every step of the way",
  "Focus on delivering real business value",
  "Automated lead capture from email, chat, web forms, and ads",
  "Quick setup with no new hires required",
  "Low-cost service: one-time setup fee plus a small subscription",
  "Lead conversion engine that screens, scores, and prioritizes prospects",
  "CRM integration included—works seamlessly with your systems",
  "Fast launch and effortless use—go live in days, not weeks",
  "Scalable, long-term solution that grows with you",
  "Save on ad spend by capturing more leads",
  "Spend less time on admin and more time closing deals"
];

const WhyGigfig = () => {
  return (
    <section id="why-gigfig" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Why Gigfig?</h2>
        <p className="section-subtitle text-center">
          We believe technology should support your business—not complicate it. Our goal is to deliver 
          solutions that are fast to launch, easy to use, and built to grow with you.
        </p>
        
        <div className="glass-card rounded-xl p-8 md:p-10 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CheckCircle className="h-6 w-6 text-gigfig-purple flex-shrink-0 mt-0.5" />
                <p className="text-gigfig-dark-text/90">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGigfig;
