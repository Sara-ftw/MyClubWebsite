import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { ExpositionGallery } from "@/components/ExpositionGallery";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, GraduationCap, Rocket } from "lucide-react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {  window.scrollTo(0, 0); },[]);
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      
      <StatsSection />

      {/* About Forum Section */}
      <section id="salon-exposition" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bebas text-primary">
              SALON D'EXPOSITION
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dans le but de consolider son image de marque et d'élargir son réseau professionnel, 
              l'ETC Junior Entreprise mise fortement sur le développement de l'axe événementiel. 
              Depuis cinq ans, elle se distingue par l'organisation d'événements marquants qui 
              continuent de séduire et d'inspirer le monde entrepreneurial.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Parmi ses initiatives phares figure le forum annuel des entreprises, un rendez-vous 
              incontournable autour d'un thème inédit favorisant les échanges entre étudiants, 
              entreprises et start-ups. Cet événement comprend des stands d'exposition, des ateliers 
              pratiques et des conférences enrichissantes animées par des experts du domaine.
            </p>
            
            <ExpositionGallery />
          </div>
        </div>
      </section>

      {/* Panel Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/panel2.jpg" 
            alt="Panel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bebas text-secondary">
              PANEL
            </h2>
            <p className="text-lg leading-relaxed text-white">
              Un panel est experts, professionnels ou représentants d'entreprises autour d'un 
              thème précis. Il vise à échanger des idées, partager des expériences et offrir 
              au public une vision diversifiée sur le sujet abordé. Ce format favorise le débat 
              constructif, la transmission de connaissances et l'interaction entre les intervenants 
              et l'audience.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary text-center mb-12">
            POUR QUI ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex justify-center">
                <div className="bg-secondary/10 p-6 rounded-full">
                  <Building2 size={48} className="text-secondary" />
                </div>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-primary">Entreprises</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Mettre en avant votre marque</li>
                <li>• Un environnement d'expositions</li>
                <li>• Rencontrer des talents</li>
              </ul>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex justify-center">
                <div className="bg-accent/10 p-6 rounded-full">
                  <GraduationCap size={48} className="text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-primary">Étudiants</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Acquérir des connaissances</li>
                <li>• Opportunités de réseautage</li>
                <li>• Décrocher des stages et PFE</li>
              </ul>
            </Card>

            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex justify-center">
                <div className="bg-secondary/10 p-6 rounded-full">
                  <Rocket size={48} className="text-secondary" />
                </div>
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-primary">Start-ups</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Rencontrer des investisseurs</li>
                <li>• Se donner de la visibilité</li>
                <li>• Networking professionnel</li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/inscription">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-bold text-lg px-12 py-6">
                Rejoignez-nous !
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <PartnersCarousel />

      <Footer />
    </div>
  );
};

export default Home;
