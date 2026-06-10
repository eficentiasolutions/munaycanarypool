import { motion } from "framer-motion";
import { Droplets, Shield, Clock, UserCheck } from "lucide-react";
import heroPoolPremium from "@/assets/hero-munay-canary-pool.webp?url";

const badges = [
  { icon: Shield,   text: "Garantía 100%" },
  { icon: Clock,    text: "Respuesta 24h"  },
  { icon: Droplets, text: "Químicos Certif." },
  { icon: UserCheck,text: "Técnicos Cualif." },
];

const HeroSection = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("plan-selected", { detail: "Revisión Gratuita" }));
    const target = document.getElementById("formulario-contacto") ?? document.getElementById("contacto");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-dark">

      {/* ── Background image — recortamos el watermark inferior derecho ampliando el encuadre ── */}
      <img
        src={heroPoolPremium}
        alt="Piscina infinity premium al atardecer en Canarias"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%] scale-[1.12] origin-top"
      />

      {/* ── Overlay sutil: legibilidad + tinte azul marca muy suave ── */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
      {/* Tinte azul petróleo muy sutil — coherente con la marca */}
      <div className="absolute inset-0 bg-brand-primary/20" />

      {/* ── Content ── */}
      <div className="relative container mx-auto px-5 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[100svh] pt-24 pb-10 md:pt-32 md:pb-16">
        <div className="w-full max-w-3xl mx-auto text-center">

          {/* H1 */}
          <h1
            className="text-[2.4rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-5 md:mb-7 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] animate-fade-in-up"
          >
            ¿Tu piscina es un{" "}
            <span
              className="font-extrabold"
              style={{ color: "hsl(210,50%,75%)" }}   /* #A0C0E0 – crystal sky del logo */
            >
              placer
            </span>
            <br className="hidden sm:block" /> o una{" "}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-pain/60 -skew-x-6 rounded" />
              <span className="relative font-bold text-white">carga?</span>
            </span>
          </h1>

          {/* Offer badge */}
          <div
            className="mb-5 md:mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <div className="inline-block bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 md:px-8 md:py-5 shadow-2xl border border-white/40">
              <p className="text-sm sm:text-lg md:text-xl font-bold text-brand-dark leading-snug">
                🎁{" "}
                <span className="opacity-80">OFERTA LIMITADA: </span>
                <span className="text-brand-primary font-extrabold">Revisión GRATIS</span>
              </p>
              <p className="text-brand-primary/70 text-[0.7rem] sm:text-xs mt-1.5 font-semibold tracking-widest uppercase">
                Solo este mes &nbsp;•&nbsp; Cupos limitados
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className="mb-7 md:mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <a
              href="#contacto"
              onClick={scrollToContact}
              className="btn-solid inline-flex items-center gap-2.5 text-base md:text-lg py-4 px-8 shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50 w-full sm:w-auto justify-center"
            >
              <Droplets className="w-5 h-5 flex-shrink-0" />
              Quiero mi Revisión GRATIS
            </a>
          </div>

          {/* Trust badges — grid 2×2 en móvil, fila en desktop */}
          <div
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            {badges.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md text-white px-3 py-2.5 rounded-xl border border-white/25 font-medium text-xs sm:text-sm shadow-md"
              >
                <Icon className="w-4 h-4 flex-shrink-0 text-[hsl(210,50%,80%)]" />
                <span className="whitespace-nowrap">{text}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/70 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
