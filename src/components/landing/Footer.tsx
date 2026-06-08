import { Facebook, Instagram } from "lucide-react";
import logoImage from "@/assets/munay-canary-pool-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div>
                <img
                  src={logoImage}
                  alt="Munay Canary Pool"
                  loading="lazy"
                  width="96"
                  height="96"
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-white/70 mb-4 md:mb-6 max-w-md text-sm md:text-base">
              En Munay Canary Pool redefinimos la experiencia de tener piscina en las Islas Canarias. Nuestro enfoque técnico y proactivo garantiza un agua saludable y cristalina todo el año, para que tú solo te ocupes de lo importante: disfrutarla.
            </p>
            <div className="flex gap-3 md:gap-4">
              {[
                { Icon: Facebook, href: "", label: "Facebook" },
                { Icon: Instagram, href: "", label: "Instagram" }
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Servicios</h4>
            <ul className="space-y-2 md:space-y-3 text-white/70 text-xs md:text-sm">
              <li>
                <a href="#servicios" className="hover:text-secondary transition-colors">
                  Limpieza Profesional
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-secondary transition-colors">
                  Balance Químico
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-secondary transition-colors">
                  Mantenimiento
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-secondary transition-colors">
                  Reparaciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-2 md:space-y-3 text-white/70 text-xs md:text-sm">
              <li>
                <a href="/aviso-legal" className="hover:text-secondary transition-colors">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="/privacidad" className="hover:text-secondary transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-secondary transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
          <p className="text-white/50 text-xs md:text-sm">
            © {new Date().getFullYear()} Munay Canary Pool. Todos los derechos reservados.
          </p>
          <p className="text-white/50 text-xs md:text-sm">
            Hecho por <a href="https://eficentiasolutions.com" target="_blank" rel="noopener noreferrer">Eficentia Solutions</a> para Munay Canary Pool.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
