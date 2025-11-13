import { Users, Briefcase, Award, Lightbulb } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "+400",
      label: "Participants",
      color: "text-secondary",
    },
    {
      icon: Lightbulb,
      value: "+3",
      label: "Workshops",
      color: "text-accent",
    },
    {
      icon: Briefcase,
      value: "+11",
      label: "Exposants",
      color: "text-secondary",
    },
    {
      icon: Award,
      value: "+5",
      label: "Invités",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <stat.icon size={40} className={stat.color} />
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-bebas text-primary mb-2">{stat.value}</h3>
                <p className="font-montserrat font-medium text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};