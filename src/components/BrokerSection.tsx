import React, { useState } from "react";
import { CategorySelector } from "@/components/CategorySelector";

const BrokerSection = () => {
  const [category, setCategory] = useState("real-estate");
  
  const handleCategoryChange = (selectedCategory: string) => {
    console.log("Selected category:", selectedCategory);
    setCategory(selectedCategory);
  };
  
  return (
    <section id="broker-services" className="py-20 md:py-28 bg-slate-100 bg-[gigfig-light-blue]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Broker Services</h2>
        <p className="section-subtitle text-center">
          Explore our comprehensive brokerage services tailored to your needs.
        </p>
        
        <div className="mb-12 w-full max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gigfig-dark-text mb-6 text-center">
            Select your broker type
          </h3>
          <CategorySelector 
            onCategoryChange={handleCategoryChange} 
            defaultCategory={category} 
          />
        </div>
        
        <div className="glass-card rounded-xl p-8 md:p-10 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {category === "real-estate" && "Real Estate Brokerage Assistant"}
            {category === "business" && "Business Brokerage assistants"}
            {category === "capital" && "Capital Brokerage assistant"}
          </h3>
          
          <div className="mt-14 mb-8">
            <h3 className="text-2xl font-bold mb-10 text-center">
              How a Brokerage Assistant <span className="text-blue-600">Supports You</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 24/7 Message Handling */}
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-blue-300 group hover:bg-gradient-to-br hover:from-blue-200/70 hover:to-blue-50/70">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-3 group-hover:scale-110 transition-transform">
                    <span className="text-blue-600 text-lg font-bold">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">24/7 Message Handling</p>
                    <p className="text-gray-600">Field calls, texts, emails, and chat inquiries when agents are unavailable and escalate hot leads immediately.</p>
                  </div>
                </div>
              </div>

              {/* Lead Qualification & Intake */}
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-blue-300 group hover:bg-gradient-to-br hover:from-blue-200/70 hover:to-blue-50/70">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-3 group-hover:scale-110 transition-transform">
                    <span className="text-blue-600 text-lg font-bold">📝</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Lead Qualification &amp; Intake</p>
                    <p className="text-gray-600">Screen new prospects with key questions (budget, timing, must-haves), log details, and assign the right agent.</p>
                  </div>
                </div>
              </div>

              {/* General Q&A Support */}
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-blue-300 group hover:bg-gradient-to-br hover:from-blue-200/70 hover:to-blue-50/70">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-3 group-hover:scale-110 transition-transform">
                    <span className="text-blue-600 text-lg font-bold">❓</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">General Q&amp;A Support</p>
                    <p className="text-gray-600">Provide instant answers on properties, neighborhoods, financing basics, and common FAQs.</p>
                  </div>
                </div>
              </div>

              {/* CRM & Profile Management */}
              <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-blue-300 group hover:bg-gradient-to-br hover:from-blue-200/70 hover:to-blue-50/70">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-3 group-hover:scale-110 transition-transform">
                    <span className="text-blue-600 text-lg font-bold">💾</span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">CRM &amp; Profile Management</p>
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