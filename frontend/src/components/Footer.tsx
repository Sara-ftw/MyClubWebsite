import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-light.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <img src={logo} alt="ETC Junior Entreprise" className="h-16 w-auto" />
            <p className="text-sm text-gray-300">
              Leaders Juniors - Votre partenaire pour l'innovation et l'excellence
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-lg text-secondary">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:commercial.etc.je@gmail.com" className="hover:text-accent transition-colors">
                  commercial.etc.je@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <span>+216 23 302 381</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-accent" />
                <span>ENSTAB, Borj Cedria, Tunis</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-lg text-secondary">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ETCJuniorEntreprise"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secondary transition-colors p-3 rounded-full"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/etcjuniorentreprise/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secondary transition-colors p-3 rounded-full"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 ETC Junior Entreprise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};