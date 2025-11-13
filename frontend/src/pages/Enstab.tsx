import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AccreditationsSection } from "@/components/AccreditationsSection";
import { Card } from "@/components/ui/card";
import { Zap, Cpu, Factory, BarChart } from "lucide-react";
import { useEffect } from "react";

const Enstab = () => {
  useEffect(() => {  window.scrollTo(0, 0); },[]);
  const programs = [
    {
      icon: Cpu,
      title: "Électronique avancée et nanotechnologie",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Systèmes énergétiques et technologies propres",
      color: "text-accent",
    },
    {
      icon: Factory,
      title: "Systèmes industriels et compétitivité",
      color: "text-secondary",
    },
    {
      icon: BarChart,
      title: "Digitalisation et analyse de données",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img src="/images/logoenstab.png" alt="Logo ENSTAB" className="h-24 w-auto" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bebas">
              L'ÉCOLE NATIONALE DES SCIENCES ET TECHNOLOGIES AVANCÉES
            </h1>
            <p className="text-2xl font-montserrat">ENSTAB - Borj Cedria</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl mx-auto space-y-8 animate-fade-in text-center">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    L'École Nationale des Sciences et Technologies Avancées à Borj Cedria (ENSTAB) 
                    a ouvert ses portes lors de l'année académique 2014/2015, dans le but précis 
                    de former des ingénieurs polyvalents. Il s'agit de la première grande école en 
                    Tunisie à se spécialiser dans les technologies avancées.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Son objectif principal est de former des ingénieurs dotés de compétences solides 
                    et pluridisciplinaires dans les domaines de l'ingénierie des systèmes énergétiques, 
                    électroniques et industriels. En effet, le programme de formation s'étend sur une 
                    période de trois ans, comprenant une année et demie de tronc commun, suivie du 
                    choix d'une des quatre options suivantes par l'étudiant :
                  </p>
                </div>
              </div>
              
              <div className="relative max-w-5xl mx-auto animate-slide-up">
                  <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl transform rotate-2"></div>
                    <img 
                      src="/images/enstab.jpeg" 
                      alt="ENSTAB Campus" 
                      className="relative w-full h-[350px] object-cover rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bebas text-primary text-center mb-12">
            NOS PROGRAMMES
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <program.icon size={40} className={program.color} />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary">
                    {program.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AccreditationsSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bebas">
              Prêt à rejoindre l'ENSTAB ?
            </h2>
            <p className="text-lg">
              Découvrez comment notre école forme les ingénieurs de demain avec 
              des technologies de pointe et une approche pluridisciplinaire.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enstab;