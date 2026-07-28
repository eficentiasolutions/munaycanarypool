import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Munay+Canary+Pool+Mantenimiento+de+Piscinas+Gran+Canaria/@27.9919428,-15.5207894,17z/data=!4m18!1m9!3m8!1s0x13fea7b6c27f1b1:0xedcbd038fd1a4cd9!2sMunay+Canary+Pool+Mantenimiento+de+Piscinas+Gran+Canaria!8m2!3d27.9919428!4d-15.5207894!9m1!1b1!16s%2Fg%2F11zh16q7my!3m7!1s0x13fea7b6c27f1b1:0xedcbd038fd1a4cd9!8m2!3d27.9919428!4d-15.5207894!9m1!1b1!16s%2Fg%2F11zh16q7my?hl=es&entry=ttu";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const testimonials = [
  {
    name: "Celia Pueyo",
    initials: "CP",
    color: "bg-blue-600",
    location: "Reseña verificada en Google",
    quote:
      "Ha sido una experiencia fantástica, desde que mantienen mi piscina no he vuelto a preocuparme, el agua siempre está cristalina. Y en referencia al trato que te dispensan inmejorable. Gracias Munay Canary Pool.",
    rating: 5,
  },
  {
    name: "Elias Godoy",
    initials: "EG",
    color: "bg-cyan-600",
    location: "Reseña verificada en Google",
    quote:
      "Servicio excelente, trabajo bien hecho y eficiente, Kike siempre atento a todo.",
    rating: 5,
  },
  {
    name: "Enrique Domingo",
    initials: "ED",
    color: "bg-indigo-600",
    location: "Reseña verificada en Google",
    quote:
      "Una empresa joven con profesionalidad. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Guillermo Méndez Acosta",
    initials: "GM",
    color: "bg-teal-600",
    location: "Reseña verificada en Google",
    quote:
      "¡Genios absolutos! Dejan todo impecable.",
    rating: 5,
  },
  {
    name: "Tomás Díaz",
    initials: "TD",
    color: "bg-sky-700",
    location: "Reseña verificada en Google",
    quote:
      "Asesoramiento personalizado y profesional.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const visible = 3;
  const totalPages = Math.ceil(testimonials.length / visible);
  const maxIndex = totalPages - 1;

  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);
  const prev = useCallback(() => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)), [maxIndex]);

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isInView, next]);

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
              {testimonials.slice(current * visible, current * visible + visible).map((t, index) => (
                <motion.div
                  key={`${current}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="testimonial-card flex flex-col gap-4"
                >
                  {/* Author + Google icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-bold text-sm">{t.initials}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{t.name}</div>
                        <div className="flex gap-0.5 mt-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <GoogleIcon />
                  </div>

                  {/* Quote icon + text */}
                  <Quote className="w-7 h-7 text-secondary/20" />
                  <p className="text-foreground leading-relaxed text-sm md:text-base flex-grow">
                    {t.quote}
                  </p>

                  {/* Verified label */}
                  <p className="text-xs text-muted-foreground pt-3 border-t border-border">
                    Cliente verificado en Google
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-10 mb-8 md:mb-10">
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
          {/* Ver todas en Google */}
          <div className="flex justify-center">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground text-sm font-medium hover:border-secondary hover:text-secondary transition-all shadow-sm"
            >
              <GoogleIcon />
              Ver todas las reviews en Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
