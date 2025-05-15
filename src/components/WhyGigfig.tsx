import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Stretch Your Budget Further",
    description: "Auto-posting, follow-ups, and round-the-clock lead capture help convert more clicks into customers, squeezing extra value from every marketing dollar."
  },
  {
    title: "Instant Lead Response",
    description: "AI chat and SMS sequences greet prospects the moment they reach out, keeping interest hot and reducing the chance of leads going cold."
  },
  {
    title: "Personalized Engagement at Scale",
    description: "Unified customer data plus smart templates deliver emails, texts, and DMs that read like you wrote them yourself—boosting open rates and loyalty without extra effort."
  },
  {
    title: "Paperwork on Cruise Control",
    description: "Invoices, contracts, and slide decks generate, file, and track themselves so you can focus on revenue-driving tasks instead of admin chores."
  },
  {
    title: "Reliable, Real-Time Data",
    description: "Live sync wipes out duplicates and stale records, ensuring every report and dashboard reflects up-to-the-minute reality."
  },
  {
    title: "Faster Deal Flow",
    description: "AI scores, routes, and books meetings before competitors can even hit 'reply,' shortening your sales cycle and keeping momentum high."
  },
  {
    title: "Launch Fast, Grow Smoothly",
    description: "Plug-and-play workflows fit right into your existing tools today and expand effortlessly as your business scales tomorrow."
  },
  {
    title: "Clear, Growth-Friendly Pricing",
    description: "Straightforward plans you can budget for confidently—no hidden fees, just predictable costs tied to tangible value."
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
