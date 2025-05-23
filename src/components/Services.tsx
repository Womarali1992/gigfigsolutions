import React from "react";
import { Sparkles, Zap, Rocket } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-tr from-white/30 to-purple-50/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title relative inline-block mb-6">
          What We Offer
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-gigfig-purple rounded-full"></span>
        </h2>
        <p className="section-subtitle">
          Solutions tailored to your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center mt-10">
          <div 
            style={{ animationDelay: '0.1s' }} 
            className="relative bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-white/90 hover:to-purple-50/50 transform hover:-translate-y-1 animate-fade-in"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-100 to-emerald-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-sm rotate-3">
                <Sparkles className="h-10 w-10 text-gigfig-green" />
              </div>
              <h3 className="text-5xl font-bold text-gigfig-purple mb-2">Gig</h3>
              <div className="text-xl font-semibold text-gigfig-dark-text mb-3">
                <div>One-Time Setup,</div>
                <div>Seamless Integration</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-gigfig-purple/50 to-emerald-500/50 mb-4"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We handle the full setup—analyzing your systems and embedding the AI assistant directly into your existing workflow. No disruption, no confusion—just a frictionless addition that works from day one.
            </p>
          </div>
          
          <div 
            style={{ animationDelay: '0.2s' }} 
            className="relative bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-white/90 hover:to-purple-50/50 transform hover:-translate-y-1 animate-fade-in"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-100 to-emerald-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-sm -rotate-3">
                <Zap className="h-10 w-10 text-gigfig-green" />
              </div>
              <h3 className="text-5xl font-bold text-gigfig-purple mb-2">Fig</h3>
              <div className="text-xl font-semibold text-gigfig-dark-text mb-3">
                <div>All-in-One Automation,</div>
                <div>Zero Ongoing Headaches</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-gigfig-purple/50 to-emerald-500/50 mb-4"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our AI assistant keeps solving your recurring tasks without requiring constant input, maintenance, or rising costs. One solution, always running—so you stay focused on growth, not management.
            </p>
          </div>
          
          <div 
            style={{ animationDelay: '0.3s' }} 
            className="relative bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-white/90 hover:to-purple-50/50 transform hover:-translate-y-1 animate-fade-in lg:col-span-1 md:col-span-2"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-100 to-emerald-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <Rocket className="h-10 w-10 text-gigfig-green" />
              </div>
              <h3 className="text-5xl font-bold text-gigfig-purple mb-2">Solutions</h3>
              <div className="text-xl font-semibold text-gigfig-dark-text mb-3">
                <div>Custom AI Tools,</div>
                <div>Built for Your Business</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-gigfig-purple/50 to-emerald-500/50 mb-4"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We go beyond plug-and-play. Need something tailored? We design purpose-built automations and custom workflows to match exactly how your business operates—no compromises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
