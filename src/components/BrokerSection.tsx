
import React, { useState } from "react";
import { CategorySelector } from "@/components/CategorySelector";

const BrokerSection = () => {
  const [category, setCategory] = useState("real-estate");
  
  const handleCategoryChange = (selectedCategory: string) => {
    console.log("Selected category:", selectedCategory);
    setCategory(selectedCategory);
  };
  
  return (
    <section id="broker-services" className="py-20 md:py-28 bg-gradient-to-tr from-purple-50/40 to-green-50/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center relative inline-block mb-8">
          Broker Services
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gigfig-green to-gigfig-purple rounded-full"></span>
        </h2>
        <p className="section-subtitle text-center">
          Explore our comprehensive brokerage services tailored to your needs.
        </p>
        
        <div className="mb-14 w-full max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gigfig-dark-text mb-8 text-center">
            Select your broker type
          </h3>
          <CategorySelector 
            onCategoryChange={handleCategoryChange} 
            defaultCategory={category} 
          />
        </div>
        
        <div className="glass-card rounded-xl p-8 md:p-10 lg:p-12 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {category === "real-estate" && "Real Estate Brokerage Assistant"}
            {category === "business" && "Business Brokerage Assistants"}
            {category === "capital" && "Capital Brokerage Assistant"}
          </h3>
          
          <div className="mt-14 mb-8">
            <h3 className="text-2xl font-bold mb-12 text-center">
              How a Brokerage Assistant <span className="text-gigfig-purple">Supports You</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* 24/7 Message Handling */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gigfig-purple/20 group hover:bg-gradient-to-br hover:from-white/80 hover:to-purple-50/50 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-gigfig-purple text-xl font-bold">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-xl mb-2 text-gigfig-purple">24/7 Message Handling</p>
                    <p className="text-gray-600">Field calls, texts, emails, and chat inquiries when agents are unavailable and escalate hot leads immediately.</p>
                  </div>
                </div>
              </div>

              {/* Lead Qualification & Intake */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gigfig-purple/20 group hover:bg-gradient-to-br hover:from-white/80 hover:to-purple-50/50 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-gigfig-purple text-xl font-bold">📝</span>
                  </div>
                  <div>
                    <p className="font-medium text-xl mb-2 text-gigfig-purple">Lead Qualification &amp; Intake</p>
                    <p className="text-gray-600">Screen new prospects with key questions (budget, timing, must-haves), log details, and assign the right agent.</p>
                  </div>
                </div>
              </div>

              {/* General Q&A Support */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gigfig-purple/20 group hover:bg-gradient-to-br hover:from-white/80 hover:to-purple-50/50 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-gigfig-purple text-xl font-bold">❓</span>
                  </div>
                  <div>
                    <p className="font-medium text-xl mb-2 text-gigfig-purple">General Q&amp;A Support</p>
                    <p className="text-gray-600">Provide instant answers on properties, neighborhoods, financing basics, and common FAQs.</p>
                  </div>
                </div>
              </div>

              {/* CRM & Profile Management */}
              <div className="bg-white/70 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gigfig-purple/20 group hover:bg-gradient-to-br hover:from-white/80 hover:to-purple-50/50 transform hover:-translate-y-1">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-gigfig-purple text-xl font-bold">💾</span>
                  </div>
                  <div>
                    <p className="font-medium text-xl mb-2 text-gigfig-purple">CRM &amp; Profile Management</p>
                    <p className="text-gray-600">Capture and update customer profiles with preferences and interaction history for personalized follow-up.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokerSection;
