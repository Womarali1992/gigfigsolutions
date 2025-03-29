
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-gigfig-dark-purple mb-1">Gigfig</div>
            <p className="text-sm text-gigfig-dark-text/70">
              Short Term Help, Long-Term Solutions
            </p>
          </div>
          
          <div className="text-sm text-gigfig-dark-text/70 flex items-center">
            <span>© {new Date().getFullYear()} Gigfig. All rights reserved.</span>
            <Heart className="h-4 w-4 text-gigfig-purple mx-2 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
