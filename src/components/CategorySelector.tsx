
import React, { useState, useRef, useEffect } from "react";
import { Building, Briefcase, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

type CategoryOption = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const categories: CategoryOption[] = [
  {
    id: "real-estate",
    label: "Real Estate Investment Broker",
    icon: <Building className="h-6 w-6" />,
  },
  {
    id: "business",
    label: "Business Broker",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    id: "capital",
    label: "Capital Broker",
    icon: <DollarSign className="h-6 w-6" />,
  }
];

interface CategorySelectorProps {
  onCategoryChange?: (category: string) => void;
  defaultCategory?: string;
  className?: string;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  onCategoryChange,
  defaultCategory = "real-estate",
  className,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLLabelElement | null)[]>([]);
  const isMobile = useIsMobile();

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    if (onCategoryChange) {
      onCategoryChange(value);
    }
    
    // Scroll the selected pill into view with smooth behavior
    const index = categories.findIndex(cat => cat.id === value);
    if (pillRefs.current[index]) {
      pillRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  };

  useEffect(() => {
    // Initialize refs array
    pillRefs.current = pillRefs.current.slice(0, categories.length);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      <RadioGroup
        value={selectedCategory}
        onValueChange={handleCategoryChange}
        className="flex items-center relative"
        aria-label="Broker Categories"
      >
        <div className="relative w-full">
          {isMobile && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/60 backdrop-blur-sm border-white/40 shadow-md hover:bg-white/80"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Button>
          )}
          
          <ScrollArea 
            ref={containerRef}
            className="w-full overflow-x-auto pb-4"
          >
            <div 
              className="flex space-x-6 snap-x snap-mandatory px-10 md:px-0 md:justify-center"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className="snap-center shrink-0"
                >
                  <label
                    ref={(el) => (pillRefs.current[index] = el)}
                    htmlFor={`category-${category.id}`}
                    className={cn(
                      "glass-card flex flex-col items-center justify-center w-36 h-36 p-5 rounded-2xl cursor-pointer transition-all duration-300 snap-center",
                      "hover:scale-105 hover:shadow-lg hover:border-white/50",
                      selectedCategory === category.id
                        ? "bg-gradient-to-b from-gigfig-green/80 to-gigfig-purple/60 text-white border-white/50 font-medium shadow-lg"
                        : "bg-white/40 border-white/30 text-gigfig-dark-text hover:bg-white/60"
                    )}
                  >
                    <div
                      className={cn(
                        "p-3 rounded-full mb-3 transition-colors",
                        selectedCategory === category.id
                          ? "bg-white/20 text-white"
                          : "bg-white/50 text-gigfig-dark-text/70 group-hover:text-gigfig-green"
                      )}
                    >
                      {React.cloneElement(category.icon as React.ReactElement, {
                        className: cn(
                          "h-9 w-9 transition-all",
                          selectedCategory === category.id
                            ? "text-white" 
                            : "text-gigfig-dark-text/70"
                        ),
                      })}
                    </div>
                    <span className="text-sm font-medium text-center line-clamp-2">
                      {category.label}
                    </span>
                    <RadioGroupItem
                      id={`category-${category.id}`}
                      value={category.id}
                      className="sr-only"
                      aria-checked={selectedCategory === category.id}
                    />
                  </label>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          {isMobile && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/60 backdrop-blur-sm border-white/40 shadow-md hover:bg-white/80"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Button>
          )}
        </div>
      </RadioGroup>
    </div>
  );
};

export default CategorySelector;
