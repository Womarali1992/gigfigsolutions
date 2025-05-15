import React, { useState, useEffect } from "react";
import { MessageSquare, Database, FileText, Users, Book, Presentation, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const BrokerSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("guest-relations");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    duration: 30,
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
    watchDrag: true,
    direction: "ltr",
    breakpoints: {
      "(min-width: 768px)": {
        slidesToScroll: 1,
        containScroll: false
      }
    }
  });

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        const selectedIndex = emblaApi.selectedScrollSnap();
        const category = automationCategories[selectedIndex];
        if (category && category.id !== selectedCategory) {
          setSelectedCategory(category.id);
        }
      };

      emblaApi.on('select', onSelect);
      
      return () => {
        emblaApi.off('select', onSelect);
      };
    }
  }, [emblaApi, selectedCategory]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index, true);
    }
  };

  useEffect(() => {
    if (emblaApi) {
      const selectedIndex = automationCategories.findIndex(cat => cat.id === selectedCategory);
      if (selectedIndex !== -1) {
        scrollTo(selectedIndex);
      }
    }
  }, [selectedCategory, emblaApi]);

  const automationCategories = [
    {
      id: "guest-relations",
      icon: <Users className="h-8 w-8 text-gigfig-green" />,
      title: "AI Guest Relations Chatbot",
      subtitle: "Handles service, reservation, and local-info questions around the clock",
      benefits: [
        {
          title: "Instant 24/7 Response",
          description: "Replies in seconds, 24/7 – no holds, no off-hours delays.",
          emoji: "⚡"
        },
        {
          title: "Live System Integration",
          description: "Accurate info every time – pulls data from live amenity and booking systems.",
          emoji: "🔄"
        },
        {
          title: "Staff Optimization",
          description: "Frees staff for VIP tasks – routine questions never hit the help desk.",
          emoji: "👥"
        },
        {
          title: "Personalized Service",
          description: "Keeps the conversation personal – remembers names, dates, and context.",
          emoji: "🎯"
        },
        {
          title: "Revenue Generation",
          description: "Drives bookings & upsells – offers spa slots or tours when guests show interest.",
          emoji: "💰"
        },
        {
          title: "Infinite Scalability",
          description: "Scales effortlessly at peak – quality stays high whether chats are 10 or 10,000.",
          emoji: "📈"
        }
      ]
    },
    {
      id: "social-media",
      icon: <MessageSquare className="h-8 w-8 text-gigfig-green" />,
      title: "Social-Media Management Automation",
      subtitle: "Schedules, monitors, and reports across Instagram, Facebook, X, and LinkedIn",
      benefits: [
        {
          title: "Automated Publishing",
          description: "Posts publish themselves on schedule – brand stays active every day.",
          emoji: "📅"
        },
        {
          title: "Rapid Engagement",
          description: "Fast replies to tags & DMs – customers feel heard within minutes.",
          emoji: "💬"
        },
        {
          title: "Real-time Monitoring",
          description: "Never miss a trend or mention – keyword alerts surface buzz instantly.",
          emoji: "🔍"
        },
        {
          title: "Performance Analytics",
          description: "Weekly performance email – reach and clicks consolidated in one report.",
          emoji: "📊"
        },
        {
          title: "Brand Consistency",
          description: "Consistent voice & visuals – templates keep tone and style on brand.",
          emoji: "✨"
        },
        {
          title: "Time Efficiency",
          description: "Hours saved each week – marketers focus on strategy, not busywork.",
          emoji: "⏱️"
        }
      ]
    },
    {
      id: "document-processing",
      icon: <FileText className="h-8 w-8 text-gigfig-green" />,
      title: "Document Processing Automation",
      subtitle: "Generates, files, and tracks invoices, contracts, and forms",
      benefits: [
        {
          title: "Automated Generation",
          description: "Documents build themselves – data turns into polished PDFs instantly.",
          emoji: "📄"
        },
        {
          title: "Smart Data Extraction",
          description: "Zero manual re-typing – OCR pulls totals, dates, and names for you.",
          emoji: "🔎"
        },
        {
          title: "Streamlined Approvals",
          description: "One-click approvals – Slack/email buttons replace print-sign-scan loops.",
          emoji: "✅"
        },
        {
          title: "Intelligent Filing",
          description: "Files land in the right folder – auto-named and stored in Drive or S3.",
          emoji: "📁"
        },
        {
          title: "Complete Tracking",
          description: "Full audit trail – every edit, approval, and rejection is logged.",
          emoji: "📋"
        },
        {
          title: "Rapid Processing",
          description: "Minutes instead of days – faster processing means quicker payments.",
          emoji: "🚀"
        }
      ]
    },
    {
      id: "data-sync",
      icon: <Database className="h-8 w-8 text-gigfig-green" />,
      title: "Customer-Data Sync Automation",
      subtitle: "Keeps every platform (CRM, support desk, database) in lock-step",
      benefits: [
        {
          title: "Universal Updates",
          description: "One-and-done updates – change a field once and it's fixed everywhere.",
          emoji: "🔄"
        },
        {
          title: "Smart Deduplication",
          description: "No duplicate contacts – the workflow merges look-alikes automatically.",
          emoji: "🎯"
        },
        {
          title: "Enhanced Support",
          description: "Faster, smarter support – agents always see the latest history and notes.",
          emoji: "🎮"
        },
        {
          title: "Real-time Insights",
          description: "Instant sales visibility – dashboards refresh in real time, not overnight.",
          emoji: "📊"
        },
        {
          title: "Error Prevention",
          description: "Fewer costly mistakes – no typos or missed edits from copy-and-paste.",
          emoji: "🛡️"
        },
        {
          title: "Live Analytics",
          description: "Live performance metrics – exec KPIs stay accurate without manual exports.",
          emoji: "📈"
        }
      ]
    },
    {
      id: "knowledge-base",
      icon: <Book className="h-8 w-8 text-gigfig-green" />,
      title: "Knowledge-Base & Assistant System",
      subtitle: "Scrapes, classifies, and serves scattered information through a chatbot",
      benefits: [
        {
          title: "Instant Information",
          description: "Find answers in seconds – one search box covers every site and PDF.",
          emoji: "⚡"
        },
        {
          title: "Auto-Updated Content",
          description: "Always-up-to-date info – scheduled scrapes replace stale pages.",
          emoji: "🔄"
        },
        {
          title: "Centralized Resources",
          description: "Single hub for forms & guides – users get the exact document they need.",
          emoji: "📚"
        },
        {
          title: "Guided Submissions",
          description: "Fewer submission errors – guidance prevents wrong files or missed steps.",
          emoji: "🎯"
        },
        {
          title: "Knowledge Democratization",
          description: "No tribal-knowledge bottlenecks – new hires get instant expertise.",
          emoji: "🧠"
        },
        {
          title: "Easy Expansion",
          description: "Grows with your content – add new sources by pasting a URL.",
          emoji: "🚀"
        }
      ]
    },
    {
      id: "presentation",
      icon: <Presentation className="h-8 w-8 text-gigfig-green" />,
      title: "AI Presentation Generator",
      subtitle: "Turns a short prompt into a polished, on-brand slide deck",
      benefits: [
        {
          title: "Rapid Creation",
          description: "Deck done in minutes – outline in, finished slides out.",
          emoji: "⚡"
        },
        {
          title: "Professional Design",
          description: "Agency-level design – layouts, fonts, and colors applied automatically.",
          emoji: "🎨"
        },
        {
          title: "Smart Asset Selection",
          description: "Built-in visuals that fit – images, icons, and charts picked for each slide.",
          emoji: "🖼️"
        },
        {
          title: "Easy Customization",
          description: "Drag-and-drop reordering – rearrange or delete slides in seconds.",
          emoji: "✨"
        },
        {
          title: "Visual Consistency",
          description: "Brand consistency – logo, colors, and fonts lock in every deck.",
          emoji: "🎯"
        },
        {
          title: "Enhanced Impact",
          description: "Higher engagement & confidence – clear, well-designed slides land the message.",
          emoji: "🚀"
        }
      ]
    }
  ];

  const selectedCategoryData = automationCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="broker-services" className="py-20 md:py-28 bg-gradient-to-tr from-purple-50/40 to-green-50/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gigfig-dark-text mb-8 relative inline-block">
            Gigs our AI Assistants can Handle
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-gigfig-purple rounded-full"></span>
          </h2>
          <p className="text-xl text-gigfig-dark-text/80 mb-10 max-w-3xl text-center">
            Let your AI team take care of the busywork—so you can focus on your business
          </p>
        </div>

        {/* Category Carousel */}
        <div className="max-w-[900px] mx-auto">
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden py-4">
              <div className="flex">
                {automationCategories.map((category, index) => (
                  <div 
                    key={category.id} 
                    className="flex-[0_0_20%] min-w-[160px] px-2"
                  >
                    <button
                      onClick={() => scrollTo(index)}
                      className={`glass-card flex flex-col items-center justify-center w-full aspect-[3/4] p-4 rounded-2xl cursor-pointer transition-all duration-300 snap-center ${
                        selectedCategory === category.id 
                          ? 'bg-gradient-to-b from-gigfig-green/80 to-gigfig-purple/60 text-white border-white/50 shadow-lg ring-2 ring-white/50'
                          : 'bg-gradient-to-b from-gigfig-green/60 to-gigfig-purple/40 text-white/90 border-white/30 hover:shadow-lg hover:border-white/50'
                      }`}
                    >
                      {/* Icon Container */}
                      <div className={`p-2.5 rounded-full mb-4 transition-all duration-300 ease-out bg-white/20 text-white ${
                        selectedCategory === category.id ? 'scale-110' : ''
                      }`}>
                        {React.cloneElement(category.icon, {
                          className: "h-8 w-8 transition-all text-white"
                        })}
                      </div>

                      {/* Title */}
                      <span className="text-sm font-medium text-center leading-tight px-2 line-clamp-3">
                        {category.title}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => emblaApi?.scrollPrev()} 
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => emblaApi?.scrollNext()} 
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Selected Category Description */}
        {selectedCategoryData && (
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-lg text-gigfig-dark-text/80 px-4">
              {selectedCategoryData.subtitle}
            </p>
          </div>
        )}

        {/* Benefits Grid */}
        {selectedCategoryData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategoryData.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="relative bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gradient-to-br hover:from-white/90 hover:to-purple-50/50 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gigfig-purple/30 to-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl" role="img" aria-label={benefit.title}>
                    {benefit.emoji}
                  </span>
                  <h4 className="font-semibold text-lg text-gigfig-purple group-hover:text-gigfig-purple/90">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrokerSection;
