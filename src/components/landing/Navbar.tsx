import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import logoImage from "@/assets/munay-canary-pool-logo.png";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Resultados", href: "#resultados" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to get the correct Href based on current route
  const getHref = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      const event = new CustomEvent('plan-selected', { detail: 'Revisión Gratuita' });
      window.dispatchEvent(event);
      const targetElement = document.getElementById('formulario-contacto') || document.getElementById('contacto');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    } else {
      e.preventDefault();
      window.location.href = "/?plan=Revisión%20Gratuita#formulario-contacto";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-white/95 backdrop-blur-md shadow-sm"
        : "bg-gradient-to-b from-white/90 to-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2" aria-label="Inicio">
            <div className="transition-transform hover:scale-105 relative">
              <img
                src={logoImage}
                alt="Munay Canary Pool"
                width="96"
                height="96"
                className="h-16 md:h-20 w-auto object-contain max-w-[200px] md:max-w-none"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={getHref(link.href)}
                className={`font-medium transition-colors hover:text-brand-primary ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-brand-dark/90"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={getHref("#contacto")}
              onClick={handleCtaClick}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${isScrolled || isMobileMenuOpen
                ? "bg-secondary text-white hover:bg-secondary/90"
                : "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/20"
                }`}
            >
              Revisión Gratuita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className={`md:hidden p-2 rounded-lg ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-brand-dark"
              }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white rounded-2xl shadow-lg p-6 mb-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={getHref(link.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getHref("#contacto")}
                onClick={handleCtaClick}
                className="btn-glow text-center mt-2"
              >
                Revisión Gratuita
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
