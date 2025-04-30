import React, { useState } from "react";
import { CategorySelector } from "@/components/CategorySelector";

const BrokerSection = () => {
  const [category, setCategory] = useState("real-estate");
  
  const handleCategoryChange = (selectedCategory: string) => {
    console.log("Selected category:", selectedCategory);
    setCategory(selectedCategory);
  };
  
  const features = [
    {
      icon: "🤖",
      title: "24/7 Concierge Communication",
      description: "Answer general questions any time, across chat, SMS, and email."
    },
    {
      icon: "📝",
      title: "Client Intake & Profile Setup",
      description: "Collect requirements, preferences, and goals automatically."
    },
    {
      icon: "📊",
      title: "Information & Instruction Sharing",
      description: "Send property details, documents, and next steps to keep clients informed and engaged."
    },
    {
      icon: "💬",
      title: "Relationship Management",
      description: "Stay top-of-mind with smart check-ins, updates, and follow-ups."
    },
    {
      icon: "📅",
      title: "Appointment Setting",
      description: "Automatically schedule calls, property viewings, and consultations."
    },
    {
      icon: "🖋️",
      title: "Contracts & Paperwork",
      description: "Generate, send, and follow up on contracts, disclosures, and forms."
    }
  ];
  
  return (
    <section id="broker-services" className="py-20 md:py-28 bg-gradient-to-tr from-purple-50/40 to-green-50/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gigfig-dark-text mb-8 relative inline-block">
            Gigs our AI Assistants can Handle
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-gigfig-purple rounded-full"></span>
          </h2>
          <p className="text-xl text-gigfig-dark-text/80 mb-10 max-w-3xl text-center">
            Let your AI team take care of the busywork—so you can focus on your business
          </p>
        </div>
        
        <div className="mb-14 w-full max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gigfig-dark-text mb-8 text-center">
            Select your broker type
          </h3>
          <CategorySelector 
            onCategoryChange={handleCategoryChange} 
            defaultCategory={category} 
          />
        </div>
        
        <div className="mt-14 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="relative bg-white/80 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-white/90 hover:to-purple-50/50 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-100 to-emerald-100 rounded-xl group-hover:scale-110 transition-transform shadow-sm">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl mb-3 text-gigfig-purple group-hover:text-gigfig-purple/90">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokerSection;
