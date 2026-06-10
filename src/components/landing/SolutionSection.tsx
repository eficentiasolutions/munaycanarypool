import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, FlaskConical, Wrench, Clock, Shield, Leaf } from "lucide-react";
import logoImage from "@/assets/munay-canary-pool-logo.png?url";

const services = [
  {
    icon: Sparkles,
    title: "Limpieza Profesional",
    subtitle: "Adiós al agua verde",
    description:
      "Método de limpieza integral que devuelve el brillo cristalino a tu piscina durante todo el año.",
    benefit: "Piscina lista para disfrutar",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FlaskConical,
    title: "Balance Químico Inteligente",
    subtitle: "Sin más adivinanzas",
    description:
      "Análisis profesional y dosificación exacta para eliminar patógenos como virus y bacterias sin poner en riesgo la salud.",
    benefit: "Sin riesgos para tu familia",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    subtitle: "Protege tu inversión",
    description:
      "Detectamos y solucionamos problemas antes de que se conviertan en costosas reparaciones.",
    benefit: "Evita reparaciones de +2.000€",
    color: "from-indigo-500 to-purple-500",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Recupera 90h/año",
    description: "Tiempo que ahora dedicas al mantenimiento",
  },
  {
    icon: Shield,
    title: "Garantía Total",
    description: "Si no estás satisfecho, te devolvemos el dinero",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Productos respetuosos con el medio ambiente",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-[0.04] pointer-events-none select-none z-0">
        <img
          src={logoImage}
          alt="Munay Canary Pool Brand"
          loading="lazy"
          className="w-[800px] h-[800px] object-contain -rotate-12"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            ✨ La Solución
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Transforma tu Piscina en un{" "}
            <span className="gradient-text">Oasis Sin Esfuerzo</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Nuestro equipo de expertos se encarga de todo para que tú solo
            tengas que disfrutar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              <span className="text-secondary text-xs md:text-sm font-medium">
                {service.subtitle}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              <div className="pt-3 md:pt-4 border-t border-border">
                <span className="text-xs md:text-sm font-semibold text-secondary flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  {service.benefit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 bg-muted rounded-2xl md:rounded-3xl p-4 md:p-8"
        >
          {benefits.map((benefit, index) => {
            const isEco = benefit.title === "Eco-Friendly";
            return (
              <div key={index} className="flex items-start gap-3 md:gap-4">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 ${isEco ? "bg-green-500/10" : "bg-secondary/10"}`}>
                  <benefit.icon className={`w-5 h-5 md:w-6 md:h-6 ${isEco ? "text-green-600" : "text-secondary"}`} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm md:text-base">{benefit.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
