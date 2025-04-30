
import React from "react";
import { Globe, Code, Settings } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-tr from-white/30 to-purple-50/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title relative inline-block mb-8">
          What We Offer
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gigfig-green to-gigfig-purple rounded-full"></span>
        </h2>
        <p className="section-subtitle">
          Solutions tailored to your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center mt-14">
          <div 
            style={{ animationDelay: '0.1s' }} 
            className="backdrop-blur-md border border-white/40 shadow-lg p-8 flex flex-col h-full animate-fade-in transition-all duration-300 
                     hover:shadow-xl hover:scale-105 bg-white/30 rounded-3xl max-w-md group"
          >
            <div className="bg-gigfig-green/20 p-4 rounded-full w-fit mb-6 backdrop-blur-sm group-hover:bg-gigfig-green/30 transition-all">
              <Globe className="h-8 w-8 text-gigfig-green" />
            </div>
            <p className="text-gray-800 flex-grow text-lg">
              <strong className="text-purple-600 text-2xl">Gig</strong>
              <span className="text-purple-600 text-2xl"> -</span> 
              <span className="block mt-2">Quick setup into your website & CRM with messaging tailored to your audience.</span>
            </p>
          </div>
          
          <div 
            style={{ animationDelay: '0.2s' }} 
            className="backdrop-blur-md border border-white/40 shadow-lg p-8 flex flex-col h-full animate-fade-in transition-all duration-300 
                     hover:shadow-xl hover:scale-105 bg-white/30 rounded-3xl max-w-md group"
          >
            <div className="bg-gigfig-green/20 p-4 rounded-full w-fit mb-6 backdrop-blur-sm group-hover:bg-gigfig-green/30 transition-all">
              <Code className="h-8 w-8 text-gigfig-green" />
            </div>
            <p className="text-gray-800 flex-grow text-lg">
              <strong className="text-purple-600 text-2xl">Fig</strong>
              <span className="text-purple-600 text-2xl"> -</span>
              <span className="block mt-2">Long-term solution—your assistant is set up and maintained for a low monthly fee.</span>
            </p>
          </div>
          
          <div 
            style={{ animationDelay: '0.3s' }} 
            className="backdrop-blur-md border border-white/40 shadow-lg p-8 flex flex-col h-full animate-fade-in transition-all duration-300 
                     hover:shadow-xl hover:scale-105 bg-white/30 rounded-3xl max-w-md group lg:col-span-1 md:col-span-2"
          >
            <div className="bg-gigfig-green/20 p-4 rounded-full w-fit mb-6 backdrop-blur-sm group-hover:bg-gigfig-green/30 transition-all">
              <Settings className="h-8 w-8 text-gigfig-green" />
            </div>
            <p className="text-gray-800 flex-grow text-lg">
              <strong className="text-purple-600 text-2xl">Solutions</strong>
              <span className="text-purple-600 text-2xl"> -</span>
              <span className="block mt-2">Tackle your biggest challenges—get more work done each month with fewer headaches.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
