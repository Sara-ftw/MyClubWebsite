import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

const Editions = () => {
  useEffect(() => {  window.scrollTo(0, 0); },[]);
  const editions = [
    {
      year: "2018",
      edition: "1ème",
      theme: "FIRST JEDI: L'ingénieur Polyvalent Entrepreneur",
      description: "Développement de l'esprit entrepreneurial chez les ingénieurs",
    },
    {
      year: "2019",
      edition: "2ème",
      theme: "NSTA-TECH: Digitalisation of Trending Fields and Technologies",
      description: "Focus sur la transformation digitale et les technologies émergentes",
    },
    {
      year: "2020",
      edition: "3ème",
      theme: "Industrie 4.0",
      description: "Découverte des technologies de la quatrième révolution industrielle",
    },
    {
      year: "2021",
      edition: "4ème",
      theme: "La responsabilité de l'ingénieur à l'ère de l'anthropocène",
      description: "Réflexion sur le rôle et les responsabilités de l'ingénieur moderne",
    },
    {
      year: "2022",
      edition: "5ème",
      theme: "Nanomédecine durable : un futur high-tech et ecofriendly pour la médecine",
      description: "Exploration des innovations en nanotechnologie médicale et développement durable",
    },
    {
      year: "2023",
      edition: "6ème",
      theme: "Human centric approach for digital technologies",
      description: "Placer l’humain au cœur du numérique",
    },
    {
      year: "2024",
      edition: "7ème",
      theme: "The resilience Code: unlocking the future of entreprises strength",
      description: "Focus sur la résilience et l'adaptabilité des entreprises face aux défis modernes",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/edition.jpg" 
            alt="Editions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in text-white">
            <h1 className="text-5xl md:text-6xl font-bebas">
              ÉDITIONS PASSÉES
            </h1>
            <p className="text-xl">
              7 années d'innovation, d'échanges et de succès
            </p>
          </div>
        </div>
      </section>

      {/* Theme Selection Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bebas text-primary mb-6">
                DES THÈMES ACTUELS ET PERTINENTS
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Le choix du thème de notre forum est toujours actualisé et en parfaite 
                adéquation avec les enjeux du moment. Il est sélectionné avec rigueur, 
                pertinence et une grande attention, afin de répondre aux problématiques 
                actuelles et d'apporter une véritable valeur ajoutée aux participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editions Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {editions.map((edition, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-secondary/10 p-4 rounded-full">
                      <Calendar size={32} className="text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bebas text-primary">
                          {edition.edition} ÉDITION
                        </h3>
                        <p className="text-accent font-montserrat font-semibold">
                          {edition.year}
                        </p>
                      </div>
                    </div>
                    <h4 className="text-xl font-montserrat font-bold text-primary mb-2">
                      {edition.theme}
                    </h4>
                    <p className="text-gray-600">
                      {edition.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Edition Teaser */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bebas">
              8ÈME ÉDITION
            </h2>
            <p className="text-2xl text-secondary font-montserrat font-bold">
              19 NOVEMBRE 2025
            </p>
            <p className="text-xl">
              L'ETC Junior Entreprise sort du lot comme d'habitude en organisant 
              cette année la 8ème édition du forum d'entreprise de l'ENSTAB.
            </p>
            <div className="pt-6">
              <p className="text-lg opacity-90">
                Thème à venir... Restez connectés !
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Editions;