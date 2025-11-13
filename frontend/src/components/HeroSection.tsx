import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const scrollToSalon = () => {
    const element = document.getElementById('salon-exposition');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero.jpg" 
          alt="Forum Hero" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-primary/70"></div>
      
      {/* Animated Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bebas text-white leading-tight">
            FORUM ANNUEL
            <br />
            <span className="text-secondary">DE L'ENSTAB</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-roboto">
            8ème édition - Connecter les talents, les entreprises et les innovations
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Calendar size={20} className="text-secondary" />
              <span className="font-montserrat font-medium">19 Novembre 2025</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin size={20} className="text-accent" />
              <span className="font-montserrat font-medium">ENSTAB, Borj Cedria</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Users size={20} className="text-secondary" />
              <span className="font-montserrat font-medium">+400 Participants</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link to="/inscription">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-bold text-lg px-8 py-6">
                S'inscrire maintenant
              </Button>
            </Link>
            <Button 
              size="lg" 
              onClick={scrollToSalon}
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all font-montserrat font-bold text-lg px-8 py-6 shadow-lg"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};