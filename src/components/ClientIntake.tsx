import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";

const ClientIntake = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-bl from-white/40 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center w-full">
          <h2 className="section-title relative inline-block mb-8">
            Client Intake & Profile Setup
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-emerald-500 to-gigfig-purple rounded-full"></span>
          </h2>
        </div>
        <p className="section-subtitle text-center">
          Streamline your client onboarding process with our intelligent intake system
        </p>
        
        <div className="glass-card rounded-xl p-8 md:p-10 max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card border-white/30 hover:border-white/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <ClipboardList className="h-6 w-6 text-gigfig-green" />
                  <CardTitle className="text-xl font-semibold text-gigfig-dark-text">
                    Automated Requirements
                    <br />
                    Collection
                  </CardTitle>
                </div>
                <CardDescription className="text-gigfig-dark-text/80">
                  Our AI assistant automatically collects and organizes client requirements, preferences, and goals through an intuitive conversation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gigfig-dark-text/80">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gigfig-green"></span>
                    Smart questionnaire adaptation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gigfig-green"></span>
                    Real-time requirement validation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gigfig-green"></span>
                    Automated follow-up questions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/30 hover:border-white/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <ClipboardList className="h-6 w-6 text-gigfig-green" />
                  <CardTitle className="text-xl font-semibold text-gigfig-dark-text">
                    Intelligent Profile
                    <br />
                    Management
                  </CardTitle>
                </div>
                <CardDescription className="text-gigfig-dark-text/80">
                  Create and maintain detailed client profiles that evolve with your business relationship.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gigfig-dark-text/80">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gigfig-green"></span>
                    Dynamic profile updates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gigfig-green"></span>
                    Preference tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gigfig-green"></span>
                    Historical data analysis
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientIntake; 