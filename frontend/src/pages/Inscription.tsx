import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { api, type RegistrationType } from "@/utils/api";
import { Building2, GraduationCap, Rocket } from "lucide-react";
import { z } from "zod";

const registrationSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(8, "Numéro de téléphone invalide").max(20),
  institution: z.string().trim().max(200).optional(),
});

const Inscription = () => {
  const [step, setStep] = useState<"type" | "form">("type");
  const [registrationType, setRegistrationType] = useState<RegistrationType | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleTypeSelection = (type: RegistrationType) => {
    setRegistrationType(type);
    setStep("form");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form data
      const validationData = registrationType === "etudiant" 
        ? formData 
        : { ...formData, institution: undefined };
      
      const validated = registrationSchema.parse(validationData);

      // Create registration via Django API
      await api.createRegistration({
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        registration_type: registrationType!,
        institution: registrationType === "etudiant" ? validated.institution : undefined,
      });

      toast({
        title: "Inscription réussie !",
        description: "Bienvenue au Forum ENSTAB 2025",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
      });
      
      // Optional: Navigate to home or success page
      navigate("/");
    } catch (error: any) {
      console.error("Registration error:", error);
      
      let errorMessage = "Une erreur s'est produite lors de l'inscription";
      
      if (error.errors) {
        // Handle Django validation errors
        const firstError = Object.values(error.errors)[0];
        errorMessage = Array.isArray(firstError) ? firstError[0] : String(firstError);
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        title: "Erreur",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "etudiant":
        return GraduationCap;
      case "partenaire":
        return Building2;
      case "sponsor":
        return Rocket;
      default:
        return Building2;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "etudiant":
        return "Étudiant";
      case "partenaire":
        return "Partenaire";
      case "sponsor":
        return "Sponsor";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bebas text-primary mb-4">INSCRIPTION</h1>
              <p className="text-gray-600">Rejoignez le Forum Annuel ENSTAB 2025</p>
            </div>

            {step === "type" && (
              <div className="grid md:grid-cols-3 gap-6">
                {(["etudiant", "partenaire", "sponsor"] as RegistrationType[]).map((type) => {
                  const Icon = getTypeIcon(type);
                  return (
                    <Card
                      key={type}
                      className="p-8 text-center cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2"
                      onClick={() => handleTypeSelection(type)}
                    >
                      <div className="flex flex-col items-center space-y-4">
                        <div className="bg-secondary/10 p-6 rounded-full">
                          <Icon size={48} className="text-secondary" />
                        </div>
                        <h3 className="text-2xl font-montserrat font-bold text-primary">
                          {getTypeLabel(type)}
                        </h3>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}

            {step === "form" && (
              <Card className="p-8">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setStep("type");
                    setRegistrationType(null);
                  }}
                  className="mb-6"
                >
                  ← Retour
                </Button>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bebas text-primary">
                    Inscription {registrationType && getTypeLabel(registrationType)}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      maxLength={100}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      maxLength={255}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      maxLength={20}
                    />
                  </div>

                  {registrationType === "etudiant" && (
                    <div className="space-y-2">
                      <Label htmlFor="institution">Établissement d'étude</Label>
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        maxLength={200}
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-montserrat font-bold"
                    disabled={loading}
                  >
                    {loading ? "Inscription..." : "S'inscrire"}
                  </Button>

                  <p className="text-center text-sm text-gray-600">
                    Note: Cette inscription enregistre votre participation à l'événement.
                  </p>
                </form>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inscription;