import { Award, TrendingUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";
import LazyRender from "./LazyRenderer";

const data = [
  { name: "TIC et informatique", value: 42.7, color: "#1EAEDB" },
  { name: "Énergétique", value: 21.9, color: "#F97316" },
  { name: "Génie industriel", value: 12.5, color: "#8B5CF6" },
  { name: "Électronique", value: 9.4, color: "#10B981" },
  { name: "Autres", value: 13.5, color: "#6B7280" },
];

export const AccreditationsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Award size={40} className="text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bebas text-primary">
                  ACCRÉDITATIONS
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  L'année dernière, nous avons célébré une <span className="font-bold text-primary">étape majeure</span> dans l'évolution de notre institution.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                  <p className="text-lg">
                    Récemment <span className="font-bold text-accent">accréditée par la CTI</span> avec le label <span className="font-bold text-accent">EUR-ACE</span> et <span className="font-bold text-accent">certifiée ISO 21001</span>, notre école démontre son engagement envers l'excellence académique et la qualité de la formation.
                  </p>
                </div>

                <p className="text-lg">
                  Cet événement est une occasion unique de renforcer nos liens avec les entreprises, de valoriser les compétences de nos étudiants et d'attirer des collaborations internationales, tout en mettant en lumière les atouts de nos nouvelles accréditations.
                </p>
              </div>

              {/* ISO Badge */}
              <div className="flex items-center space-x-4 bg-primary/5 p-4 rounded-lg">
                <img
                  src="/images/iso.png"
                  alt="ISO 21001"
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <p className="font-bold text-primary text-lg">Certifiée ISO 21001</p>
                  <p className="text-sm text-gray-600">Management de la qualité en éducation</p>
                </div>
              </div>
            </div>

            {/* Right: Chart */}
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-center space-x-3 justify-center">
                <TrendingUp size={32} className="text-secondary" />
                <h3 className="text-2xl font-bebas text-primary">
                  DOMAINES D'ACTIVITÉ DES DIPLÔMÉS
                </h3>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <LazyRender>

                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${value}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1000}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => `${value}%`}
                        contentStyle={{
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        wrapperStyle={{ fontSize: '14px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </LazyRender>
                <p className="text-center text-sm text-gray-600 mt-4 italic">
                  Enquête de satisfaction auprès des anciens diplômés de l'ENSTAB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
