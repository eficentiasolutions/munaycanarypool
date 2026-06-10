import { motion } from "framer-motion";
import { Droplets, Shield, Clock, UserCheck } from "lucide-react";
import heroPoolPremium from "@/assets/hero-munay-canary-pool.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* Background Image - Optimized for LCP */}
      <img
        src={heroPoolPremium}
        alt="Piscina premium en las Islas Canarias al atardecer"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-bottom md:object-center transition-transform duration-1000 scale-[1.35] origin-bottom md:scale-105 md:origin-center opacity-100"
      />

      {/* Light/Blue Filter Effect - Fresh & Premium */}
      <div className="absolute inset-0 bg-cyan-50/30 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-white/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

      {/* Water ripple effect - Subtle */}
      <div className="water-ripple opacity-10" />

      {/* Decorative elements - Subtle gradients */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl mix-blend-multiply" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl mix-blend-multiply" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="w-full max-w-4xl mx-auto text-center flex-1 flex flex-col justify-center">
          {/* Main H1 - CSS animation for visual appeal without blocking LCP */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-[1.1] mb-6 md:mb-8 tracking-tight animate-fade-in-up"
          >
            ¿Tu piscina es un{" "}
            <span className="font-extrabold text-secondary" style={{ WebkitTextStroke: '2px white', paintOrder: 'stroke fill' }}>
              placer
            </span>
            <br className="hidden sm:block" /> o una{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-pain/40 -skew-x-6"></span>
              <span className="relative font-bold">carga?</span>
            </span>
          </h1>

          {/* Strong Promise - CSS animation with delay */}
          <div className="mb-8 md:mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <div className="inline-block bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 md:px-8 md:py-6 border border-brand-primary/10 shadow-2xl hover:bg-white transition-colors duration-300">
              <p className="text-base sm:text-lg md:text-2xl font-bold text-brand-dark leading-tight">
                🎁 <span className="opacity-90">OFERTA LIMITADA: </span>
                <span className="text-brand-primary font-extrabold tracking-wide block sm:inline mt-1 sm:mt-0">
                  Revisión GRATIS
                </span>
              </p>
              <p className="text-brand-primary/80 text-xs sm:text-sm mt-2 font-medium tracking-wide uppercase">
                Solo este mes • Cupos limitados
              </p>
            </div>
          </div>

          {/* CTA Button with Shadow Glow - CSS animation with delay */}
          <div className="mb-10 md:mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                const event = new CustomEvent('plan-selected', { detail: 'Revisión Gratuita' });
                window.dispatchEvent(event);
                const targetElement = document.getElementById('formulario-contacto') || document.getElementById('contacto');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-solid inline-flex items-center gap-3 text-base md:text-lg lg:text-xl py-4 px-8 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40"
            >
              <Droplets className="w-5 h-5 md:w-6 md:h-6" />
              Quiero mi Revisión GRATIS
            </a>
          </div>

          {/* Trust indicators - CSS animation with delay */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-8 lg:gap-12 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            {[
              { icon: Shield, text: "Garantía 100%" },
              { icon: Clock, text: "Respuesta 24h" },
              { icon: Droplets, text: "Químicos Certif." },
              { icon: UserCheck, text: "Técnicos Cualif." },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-brand-dark bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 font-medium transition-transform hover:scale-105"
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                <span className="text-xs sm:text-sm whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator - Properly positioned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-brand-dark/20 rounded-full flex justify-center pt-2 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-brand-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
