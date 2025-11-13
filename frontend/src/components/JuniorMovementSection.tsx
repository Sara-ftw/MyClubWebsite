import { Users, Target, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

export const JuniorMovementSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bebas text-primary mb-4">
              LE MOUVEMENT JUNIOR ENTREPRISE
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Le mouvement des Junior-Entreprises est un réseau international d'associations étudiantes qui offrent des services de consulting aux entreprises. Créé en France dans les années 1960, ce concept s'est répandu dans le monde entier, permettant aux étudiants de mettre en pratique leurs connaissances académiques dans des projets réels.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Une Junior-Entreprise fonctionne comme une vraie entreprise : elle a des clients, réalise des missions payantes et est gérée entièrement par des étudiants. C'est un tremplin unique pour développer des compétences professionnelles, entrepreneuriales et managériales avant même l'obtention du diplôme.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6">
                <Card className="p-4 text-center hover:shadow-lg transition-all">
                  <Users className="mx-auto text-secondary mb-2" size={32} />
                  <p className="font-bold text-2xl text-primary">170+</p>
                  <p className="text-sm text-gray-600">JE en France</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-all">
                  <Target className="mx-auto text-accent mb-2" size={32} />
                  <p className="font-bold text-2xl text-primary">400+</p>
                  <p className="text-sm text-gray-600">JE en Europe</p>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-all">
                  <Rocket className="mx-auto text-secondary mb-2" size={32} />
                  <p className="font-bold text-2xl text-primary">1967</p>
                  <p className="text-sm text-gray-600">Année de création</p>
                </Card>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="/images/je.webp" 
                alt="Junior Entreprise Movement" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};