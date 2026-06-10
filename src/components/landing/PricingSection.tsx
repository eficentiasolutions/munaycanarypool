
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Star, Zap, Droplets, Sparkles, Crown, AlertCircle, Info } from "lucide-react";
import logoImage from "@/assets/munay-canary-pool-logo.png?url";

const plans = [
  {
    name: "Plan Básico",
    icon: Droplets,
    price: "60",
    period: " / visita",
    description: "Lo esencial para asegurar el funcionamiento. Ideal para revisiones puntuales.",
    features: [
      { text: "Revisión técnica de equipos", included: true },
      { text: "Limpieza de filtros y bomba", included: true },
      { text: "Limpieza de fondo y paredes", included: false },
      { text: "Analítica y ajuste químico", included: false },
      { text: "Productos químicos incluidos", included: false },
      { text: "Garantía repuestos incluida", included: false },
    ],
    cta: "Solicitar Básico",
    featured: false,
    note: "No incluye limpieza profunda ni control del estado del agua.",
    noteType: "warning", // warning, info, success
  },
  {
    name: "Plan Completo",
    icon: Sparkles,
    price: "120",
    period: " / visita",
    description: "Puesta a punto integral. Tu piscina limpia y equilibrada en una visita.",
    features: [
      { text: "Revisión técnica de equipos", included: true },
      { text: "Limpieza de filtros y bomba", included: true },
      { text: "Limpieza de fondo y paredes", included: true },
      { text: "Analítica y ajuste químico", included: true },
      { text: "Productos químicos incluidos", included: false },
      { text: "Garantía repuestos incluida", included: false },
    ],
    cta: "Solicitar Completo",
    featured: true,
    badge: "MÁS ELEGIDO",
    note: "Productos químicos no incluidos.",
    noteType: "info",
  },
  {
    name: "Plan Premium",
    icon: Crown,
    price: "149",
    period: " / mes",
    description: "Tranquilidad absoluta todo el año. Nosotros nos ocupamos de todo.",
    features: [
      { text: "Revisión técnica de equipos", included: true },
      { text: "Limpieza de filtros y bomba", included: true },
      { text: "Limpieza de fondo y paredes", included: true },
      { text: "Analítica y ajuste químico", included: true },
      { text: "Productos químicos incluidos", included: true },
      { text: "Garantía repuestos incluida", included: true },
    ],
    cta: "Quiero el Premium",
    featured: false,
    note: "Agua siempre segura  • Sin imprevistos • Tranquilidad total",
    noteType: "success",
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-muted" id="precios">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            💰 Planes Transparentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Invierte en{" "}
            <span className="gradient-text">Tranquilidad</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Elige cómo quieres cuidar tu piscina. Sin sorpresas.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`pricing-card relative flex flex-col transition-all duration-300 ${plan.featured
                  ? "md:scale-105 z-10 shadow-2xl border-2 border-secondary/20 ring-4 ring-secondary/5"
                  : "border border-border/50 shadow-md hover:shadow-lg"
                }`}
            >
              {/* Scale effect on desktop */}

              {/* Badge for Featured */}
              {plan.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-extrabold shadow-lg whitespace-nowrap tracking-wide">
                    {plan.featured && <Star className="w-4 h-4 fill-white text-white" />}
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 md:mb-8 pt-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <plan.icon className={`w-6 h-6 ${index === 0 ? "text-cyan-500" : index === 2 ? "text-yellow-500" : "text-secondary"}`} />
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm mb-4 px-2 min-h-[40px] flex items-center justify-center">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl md:text-5xl font-black tracking-tight ${plan.featured ? "text-secondary" : "text-foreground"}`}>
                    {plan.price}€
                  </span>
                  <span className="text-muted-foreground ml-1 text-sm font-medium">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-grow">
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-3 ${feature.included ? "" : "opacity-50"}`}>
                      {feature.included ? (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured ? "bg-secondary text-white" : "bg-green-100 text-green-600"}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-100 text-slate-400">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <span className={`text-sm leading-tight text-left ${feature.included ? "text-foreground font-medium" : "text-muted-foreground strike-through"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note / Warning */}
              {plan.note && (
                <div className={`text-xs text-center mb-6 px-3 py-3 rounded-lg border flex items-start justify-center gap-2 ${plan.noteType === 'warning' ? "bg-amber-50 border-amber-200 text-amber-800" :
                  plan.noteType === 'info' ? "bg-blue-50 border-blue-200 text-blue-800" :
                    "bg-green-50 border-green-200 text-green-800 font-medium"
                  }`}>
                  {plan.noteType === 'warning' && <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  {plan.noteType === 'info' && <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  {plan.noteType === 'success' && <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  <span className="text-left">{plan.note}</span>
                </div>
              )}

              {/* CTA */}
              <div className="mt-auto">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    // Dispatch custom event for ContactSection
                    const event = new CustomEvent('plan-selected', { detail: plan.name });
                    window.dispatchEvent(event);

                    // Smooth scroll directly to form
                    const targetElement = document.getElementById('formulario-contacto') || document.getElementById('contacto');
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full block text-center cursor-pointer transition-all duration-300 py-3.5 rounded-xl font-bold ${plan.featured
                    ? "bg-secondary text-white shadow-lg shadow-secondary/30 hover:scale-[1.02] hover:shadow-xl"
                    : "bg-white text-secondary border-2 border-secondary hover:bg-secondary/5"
                    }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 bg-card px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
            <span className="text-foreground font-medium text-xs md:text-base">
              Garantía de devolución 30 días • Sin compromiso
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
