import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import logoImage from "@/assets/munay-canary-pool-logo.png";
import javierImage from "@/assets/javier-mendez.png";
import elenaImage from "@/assets/elena-torres.png";
import robertoImage from "@/assets/roberto-sanchis.png";

const testimonials = [
  {
    name: "Javier Méndez",
    role: "Villa vacacional en las Islas Canarias",
    image: javierImage,
    quote:
      "Vivo en la península y siempre me preocupaba el estado de la piscina al llegar. Con Munay Canary Pool, llego y el agua está perfecta cada vez. El servicio de reportes con fotos tras cada visita me da una tranquilidad total.",
    rating: 5,
  },
  {
    name: "Elena Torres",
    role: "Administradora de Fincas en Canarias",
    image: elenaImage,
    quote:
      "Gestionamos varias comunidades y la exigencia es máxima. Desde que contamos con Munay Canary Pool, las incidencias han bajado a cero. Son proactivos y conocen bien las particularidades del clima canario.",
    rating: 5,
  },
  {
    name: "Roberto Sanchis",
    role: "Chalet en Gran Canaria",
    image: robertoImage,
    quote:
      "Nuestra piscina se puso verde por la calima dos días antes de una fiesta. Vinieron de urgencia, diagnosticaron el problema y en 24 horas el agua estaba cristalina. Literalmente nos salvaron el evento.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 relative">


        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16 relative z-10"
        >
          {/* Brand Logo - Centered and High Quality */}
          <div className="flex justify-center mb-6">
            <img
              src={logoImage}
              alt="Munay Canary Pool"
              width="96"
              height="96"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          <span className="inline-block text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            💬 Testimonios Reales
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Lo que Dicen Nuestros{" "}
            <span className="gradient-text">Clientes Felices</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Historias reales de propietarios que recuperaron su tiempo libre
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-secondary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TestimonialsSection;
