import { Card } from "@/components/ui/card";
import { Briefcase, Lightbulb, BarChart, Settings, Zap, TrendingUp } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      category: "ÉTUDES ET CONSEIL",
      icon: Briefcase,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      items: [
        {
          icon: BarChart,
          title: "Études de marché",
          description: "Analyse approfondie de votre marché cible, identification des opportunités et recommandations stratégiques"
        },
        {
          icon: TrendingUp,
          title: "Business plan",
          description: "Élaboration de plans d'affaires complets pour concrétiser vos projets et convaincre vos investisseurs"
        },
        {
          icon: Settings,
          title: "Conseil en stratégie",
          description: "Accompagnement stratégique pour optimiser votre positionnement et votre développement"
        }
      ]
    },
    {
      category: "SOLUTIONS TECHNIQUES",
      icon: Zap,
      color: "text-accent",
      bgColor: "bg-accent/10",
      items: [
        {
          icon: Lightbulb,
          title: "Audit énergétique",
          description: "Évaluation de votre consommation énergétique et propositions d'optimisation pour réduire vos coûts"
        },
        {
          icon: Settings,
          title: "Conception de systèmes",
          description: "Design et développement de solutions techniques adaptées à vos besoins industriels"
        },
        {
          icon: Zap,
          title: "Innovation technologique",
          description: "Intégration des dernières technologies avancées dans vos processus de production"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bebas text-primary mb-4">
              NOS PRESTATIONS DE SERVICES
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              ETC Junior Entreprise propose deux catégories principales de prestations pour accompagner votre entreprise dans sa croissance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`${service.bgColor} p-4 rounded-full`}>
                    <service.icon size={32} className={service.color} />
                  </div>
                  <h3 className="text-2xl font-bebas text-primary">
                    {service.category}
                  </h3>
                </div>

                <div className="space-y-6">
                  {service.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <item.icon size={24} className={`${service.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-primary mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
