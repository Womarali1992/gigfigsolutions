
import React, { useState } from "react";
import { CategorySelector } from "@/components/CategorySelector";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BrokerDashboard = () => {
  const [category, setCategory] = useState("real-estate");
  
  const handleCategoryChange = (selectedCategory: string) => {
    console.log("Selected category:", selectedCategory);
    setCategory(selectedCategory);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-20 flex-grow flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gigfig-dark-text mb-10 text-center">
          Broker Services Dashboard
        </h1>
        
        <div className="mb-12 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-gigfig-dark-text mb-6 text-center">
            Select your broker type
          </h2>
          <CategorySelector 
            onCategoryChange={handleCategoryChange} 
            defaultCategory={category} 
          />
        </div>
        
        <div className="glass-card p-8 rounded-xl w-full max-w-3xl">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {category === "real-estate" && "Real Estate Investment Services"}
            {category === "insurance" && "Insurance Brokerage Services"}
            {category === "business" && "Business Brokerage Services"}
            {category === "mortgage" && "Mortgage Brokerage Services"}
          </h3>
          <p className="text-gigfig-dark-text/80 text-center">
            {category === "real-estate" && "Explore our portfolio of investment properties and opportunities for real estate investors."}
            {category === "insurance" && "Find the right insurance coverage for your business and personal needs."}
            {category === "business" && "Buy or sell businesses with our experienced business brokers."}
            {category === "mortgage" && "Get competitive rates and flexible terms with our mortgage brokerage services."}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrokerDashboard;
