import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email("Email invalide"),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validated = emailSchema.parse({ email });
      
      // You could add an API endpoint to check if email is registered
      // For now, just show a message
      toast({
        title: "Vérification",
        description: "Fonctionnalité à venir - contactez les organisateurs",
      });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message || "Email invalide",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bebas text-primary mb-4">VÉRIFIER</h1>
              <p className="text-gray-600">Vérifiez votre inscription</p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleCheck} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-montserrat font-bold"
                  disabled={loading}
                >
                  {loading ? "Vérification..." : "Vérifier mon inscription"}
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Pas encore inscrit ?{" "}
                  <Link to="/inscription" className="text-secondary hover:underline font-medium">
                    S'inscrire maintenant
                  </Link>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;