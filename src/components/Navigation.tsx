
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300",
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl">
            <span className="text-gigfig-green">Gig</span><span className="text-gigfig-purple">fig</span>
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gigfig-dark-text"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            to="/"
            className="text-gigfig-dark-text hover:text-gigfig-green transition-colors font-medium"
          >
            Home
          </Link>
          <a
            href="/#broker-services"
            className="text-gigfig-dark-text hover:text-gigfig-green transition-colors font-medium"
          >
            Broker Services
          </a>
          <a
            href="/#services"
            className="text-gigfig-dark-text hover:text-gigfig-green transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="/#why-gigfig"
            className="text-gigfig-dark-text hover:text-gigfig-green transition-colors font-medium"
          >
            Why Gigfig
          </a>
          <a
            href="/#contact"
            className="text-gigfig-dark-text hover:text-gigfig-green transition-colors font-medium"
          >
            Contact
          </a>
          <Button className="glass-button rounded-full px-6">Get Started</Button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 transform w-64 bg-white/95 backdrop-blur-md shadow-lg z-40 transition-transform duration-300 ease-in-out md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col p-8 space-y-6">
            <button
              onClick={toggleMenu}
              className="self-end text-gigfig-dark-text mb-6"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-lg text-gigfig-dark-text hover:text-gigfig-green transition-colors"
            >
              Home
            </Link>
            <a
              href="/#broker-services"
              onClick={toggleMenu}
              className="text-lg text-gigfig-dark-text hover:text-gigfig-green transition-colors"
            >
              Broker Services
            </a>
            <a
              href="/#services"
              onClick={toggleMenu}
              className="text-lg text-gigfig-dark-text hover:text-gigfig-green transition-colors"
            >
              Services
            </a>
            <a
              href="/#why-gigfig"
              onClick={toggleMenu}
              className="text-lg text-gigfig-dark-text hover:text-gigfig-green transition-colors"
            >
              Why Gigfig
            </a>
            <a
              href="/#contact"
              onClick={toggleMenu}
              className="text-lg text-gigfig-dark-text hover:text-gigfig-green transition-colors"
            >
              Contact
            </a>
            <Button className="glass-button w-full rounded-full">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
