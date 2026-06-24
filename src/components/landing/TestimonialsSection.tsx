import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayose M.",
    initials: "AM",
    color: "bg-blue-600",
    location: "Villa vacacional, Melenara",
    quote:
      "Vivo en la península y siempre me preocupaba el estado de la piscina al llegar a Gran Canaria. Con Munay Canary Pool llego y el agua está perfecta cada vez. Los reportes con fotos tras cada visita me dan tranquilidad total.",
    rating: 5,
  },
  {
    name: "Guacimara T.",
    initials: "GT",
    color: "bg-cyan-600",
    location: "Administradora de Fincas, Telde",
    quote:
      "Gestionamos varias comunidades en Telde y la exigencia es máxima. Desde que contamos con ellos las incidencias han bajado a cero. Son proactivos y conocen bien las particularidades del clima de la isla.",
    rating: 5,
  },
  {
    name: "Ancor S.",
    initials: "AS",
    color: "bg-indigo-600",
    location: "Chalet privado, Telde",
    quote:
      "Nuestra piscina se puso verde por la calima dos días antes de una fiesta. Vinieron de urgencia, diagnosticaron el problema y en 24 horas el agua estaba cristalina. Literalmente nos salvaron el evento.",
    rating: 5,
  },
  {
    name: "Yaiza F.",
    initials: "YF",
    color: "bg-teal-600",
    location: "Comunidad de vecinos, Salinetas",
    quote:
      "Llevábamos años con problemas de algas cada verano. Desde que contratamos el plan Premium no hemos tenido ni una sola incidencia. Profesionales de verdad, cumplen siempre lo que prometen.",
    rating: 5,
  },
  {
    name: "Jonay R.",
    initials: "JR",
    color: "bg-sky-700",
    location: "Propietario de chalet, Vega de San Mateo",
    quote:
      "El precio es justo y el servicio impecable. Vinieron a revisar la piscina sin coste y nos explicaron todo con detalle. Ahora tenemos el agua siempre en perfecto estado sin preocuparnos de nada.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const visible = 3;
  const maxIndex = testimonials.length - visible;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            💬 Testimonios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Lo que Dicen Nuestros{" "}
            <span className="gradient-text">Clientes Felices</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Historias reales de propietarios que recuperaron su tranquilidad en Gran Canaria
          </p>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              {testimonials.slice(current, current + visible).map((t, index) => (
                <motion.div
                  key={`${current}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="testimonial-card flex flex-col gap-4"
                >
                  {/* Quote icon + stars */}
                  <div className="flex items-start justify-between">
                    <Quote className="w-8 h-8 text-secondary/30" />
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <p className="text-foreground leading-relaxed text-sm md:text-base flex-grow">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Anterior testimonio"
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-secondary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current === maxIndex}
              aria-label="Siguiente testimonio"
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
