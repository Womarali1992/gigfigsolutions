
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gigfig-dark-purple">
            Gigfig
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#services" className="text-gigfig-dark-text hover:text-gigfig-purple transition-colors">
            Services
          </a>
          <a href="#why-gigfig" className="text-gigfig-dark-text hover:text-gigfig-purple transition-colors">
            Why Gigfig
          </a>
          <a href="#contact" className="text-gigfig-dark-text hover:text-gigfig-purple transition-colors">
            Contact
          </a>
        </div>
        <div>
          <a href="#contact">
            <Button className="glass-button">
              Get Started
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
