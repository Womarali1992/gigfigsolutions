import React from "react";
import { Globe, Code, Settings } from "lucide-react";

const Services = () => {
  return <section id="services" className="py-20 md:py-28 bg-slate-100 bg-[gigfig-light-blue]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">
          Solutions tailored to your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center mt-10">
          <div style={{ animationDelay: '0.1s' }} className="backdrop-blur-md border border-white/40 shadow-lg p-6 md:p-8 flex flex-col h-full animate-fade-in transition-all duration-300 bg-transparent rounded-3xl max-w-md">
            <div className="bg-gigfig-green/20 p-3 rounded-full w-fit mb-4 backdrop-blur-sm">
              <Globe className="h-6 w-6 text-gigfig-green" />
            </div>
            <p className="text-gray-800 flex-grow">
              <strong className="text-purple-600 text-2xl">Gig</strong><span className="text-purple-600 text-2xl"> -</span> Quick setup into your website & CRM with messaging tailored to your audience.
            </p>
          </div>
          <div style={{ animationDelay: '0.2s' }} className="backdrop-blur-md border border-white/40 shadow-lg p-6 md:p-8 flex flex-col h-full animate-fade-in transition-all duration-300 bg-transparent rounded-3xl max-w-md">
            <div className="bg-gigfig-green/20 p-3 rounded-full w-fit mb-4 backdrop-blur-sm">
              <Code className="h-6 w-6 text-gigfig-green" />
            </div>
            <p className="text-gray-800 flex-grow">
              <strong className="text-purple-600 text-2xl">Fig</strong><span className="text-purple-600 text-2xl"> -</span> Long-term solution—your assistant is set up and maintained for a low monthly fee.
            </p>
          </div>
          <div style={{ animationDelay: '0.3s' }} className="backdrop-blur-md border border-white/40 shadow-lg p-6 md:p-8 flex flex-col h-full animate-fade-in transition-all duration-300 bg-transparent rounded-3xl max-w-md">
            <div className="bg-gigfig-green/20 p-3 rounded-full w-fit mb-4 backdrop-blur-sm">
              <Settings className="h-6 w-6 text-gigfig-green" />
            </div>
            <p className="text-gray-800 flex-grow">
              <strong className="text-purple-600 text-2xl">Solutions</strong><span className="text-purple-600 text-2xl"> -</span> Tackle your biggest challenges—get more work done each month with fewer headaches.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;