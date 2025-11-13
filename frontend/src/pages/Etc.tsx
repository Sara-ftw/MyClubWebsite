import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { JuniorMovementSection } from "@/components/JuniorMovementSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Card } from "@/components/ui/card";
import { Flame, Lightbulb, Award, Target } from "lucide-react";
import logo from "@/assets/logo-light.png";
import { useEffect } from "react";

const Etc = () => {
    useEffect(() => {  window.scrollTo(0, 0); },[]);
  
  const values = [
    {
      icon: Flame,
      title: "PASSION",
      description: "L'énergie qui nous pousse à exceller dans chaque projet",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description: "Des solutions créatives pour relever les défis de demain",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Award,
      title: "EXCELLENCE",
      description: "Un engagement vers la qualité et la performance",
      color: "bg-secondary/10 text-secondary",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <img src={logo} alt="ETC Junior Entreprise" className="h-24 w-auto mx-auto" />
            <h1 className="text-5xl md:text-6xl font-bebas">
              ENERGETIC TECHNOLOGIES CONSULTING
            </h1>
            <p className="text-2xl font-montserrat text-secondary">
              LEADERS JUNIORS
            </p>
            <p className="text-xl">
              La première Junior Entreprise de l'ENSTAB
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bebas text-primary mb-4">
                QUI SOMMES-NOUS ?
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="space-y-12">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <div className="prose prose-lg max-w-none mx-auto">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    ETC Junior Entreprise est une association étudiante à but non lucratif qui 
                    offre des services de consulting dans les domaines des technologies énergétiques 
                    et des systèmes avancés. Fondée par des étudiants passionnés de l'ENSTAB, nous 
                    mettons notre expertise académique au service des entreprises et des startups.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Depuis notre création, nous avons pour mission de créer un pont entre le monde 
                    académique et le monde professionnel, permettant aux étudiants de développer 
                    leurs compétences tout en offrant des solutions innovantes à nos clients.
                  </p>
                </div>
              </div>
              
              <div className="relative animate-slide-up">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                  <div className="relative max-w-full mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform -rotate-1"></div>
                    <img 
                      src="images/etc.JPG"
                      alt="ETC Junior Entreprise" 
                      className="relative w-full h-[400px] md:h-[300px] object-cover rounded-3xl shadow-2xl transform hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bebas text-primary mb-4">
              NOS VALEURS
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center space-y-4 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="flex justify-center">
                  <div className={`p-6 rounded-full ${value.color}`}>
                    <value.icon size={48} />
                  </div>
                </div>
                <h3 className="text-2xl font-bebas text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bebas text-primary mb-4">
                NOS ACTIVITÉS
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <Target size={32} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-primary mb-2">
                      Consulting
                    </h3>
                    <p className="text-gray-600">
                      Études et conseils en technologies énergétiques et systèmes industriels
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <Lightbulb size={32} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-primary mb-2">
                      Événementiel
                    </h3>
                    <p className="text-gray-600">
                      Organisation de forums, conférences et workshops professionnels
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <Award size={32} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-primary mb-2">
                      Formation
                    </h3>
                    <p className="text-gray-600">
                      Ateliers et séminaires de développement des compétences
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <Target size={32} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-primary mb-2">
                      Networking
                    </h3>
                    <p className="text-gray-600">
                      Création de liens entre étudiants, entreprises et alumni
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <JuniorMovementSection />

      <ServicesSection />

      {/* Mission Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bebas text-secondary">
              NOTRE MISSION
            </h2>
            <p className="text-lg leading-relaxed">
              Former les leaders de demain en offrant des opportunités professionnelles 
              aux étudiants de l'ENSTAB, tout en apportant des solutions innovantes et 
              de qualité à nos partenaires et clients.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Etc;