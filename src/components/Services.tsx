import React from "react";
import { Globe, Code, Settings } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-tr from-white/30 to-purple-50/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title relative inline-block mb-8">
          What We Offer
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-gigfig-purple rounded-full"></span>
        </h2>
        <p className="section-subtitle">
          Solutions tailored to your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-items-center mt-14">
          <div 
            style={{ animationDelay: '0.1s' }} 
            className="relative bg-white/80 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-white/90 hover:to-purple-50/50 transform hover:-translate-y-1 animate-fade-in"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-100 to-emerald-100 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform shadow-sm">
              <Globe className="h-8 w-8 text-gigfig-green" />
            </div>
            <p className="text-gray-800 text-lg">
              <strong className="text-gigfig-purple text-2xl block mb-3">Gig</strong>
              <span className="block text-gray-600 leading-relaxed">We build custom AI assistants to handle the busy work—so you can focus on what matters most.</span>
            </p>
          </div>
          
          <div 
            style={{ animationDelay: '0.2s' }} 
            className="relative bg-white/80 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-white/90 hover:to-purple-50/50 transform hover:-translate-y-1 animate-fade-in"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-100 to-emerald-100 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform shadow-sm">
              <Code className="h-8 w-8 text-gigfig-green" />
            </div>
            <p className="text-gray-800 text-lg">
              <strong className="text-gigfig-purple text-2xl block mb-3">Fig</strong>
              <span className="block text-gray-600 leading-relaxed">We've figured out how to seamlessly integrate these assistants into your workflow—no disruption, just momentum.</span>
            </p>
          </div>
          
          <div 
            style={{ animationDelay: '0.3s' }} 
            className="relative bg-white/80 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-white/90 hover:to-purple-50/50 transform hover:-translate-y-1 animate-fade-in lg:col-span-1 md:col-span-2"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-100 to-emerald-100 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform shadow-sm">
              <Settings className="h-8 w-8 text-gigfig-green" />
            </div>
            <p className="text-gray-800 text-lg">
              <strong className="text-gigfig-purple text-2xl block mb-3">Solutions</strong>
              <span className="block text-gray-600 leading-relaxed">A long-term solution with a simple monthly fee that keeps your assistant running and your focus where it belongs: growing your business.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
