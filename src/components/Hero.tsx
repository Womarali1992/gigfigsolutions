import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gigfig-dark-text mb-6 animate-fade-in">
            Quick Easy Set Up, <br />
            <span className="bg-clip-text bg-gradient-to-r from-primary to-secondary text-gigfig-green">Long term AI assistance</span>
          </h1>
          <div className="glass-card p-6 md:p-8 rounded-xl max-w-3xl mx-auto mb-10 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <p className="text-lg md:text-xl text-gigfig-dark-text/90">Build the future - one gig at a time </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            <a href="#services">
              <Button className="glass-button px-8 py-6 text-base rounded-full">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="bg-white/50 backdrop-blur-sm hover:bg-white/70 px-8 py-6 text-base rounded-full">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;