import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-light.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/enstab", label: "ENSTAB" },
    { href: "/etc", label: "ETC JE" },
    { href: "/editions", label: "Éditions Passées" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="ETC Junior Entreprise" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-montserrat font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-secondary"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/inscription">
              <Button variant="default" className="bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold">
                S'inscrire
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block font-montserrat font-medium py-2 ${
                  isActive(link.href)
                    ? "text-secondary"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/inscription" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-montserrat font-semibold">
                S'inscrire
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};