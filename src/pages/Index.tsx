import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyGigfig from "@/components/WhyGigfig";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BrokerSection from "@/components/BrokerSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <BrokerSection />
        <WhyGigfig />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
