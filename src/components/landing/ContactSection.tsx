import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send, Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import logoImage from "@/assets/munay-canary-pool-logo.png?url";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    // Function to handle URL params (for external links)
    const handleUrlParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const planParam = searchParams.get('plan');
      if (planParam) {
        setSelectedPlan(decodeURIComponent(planParam));

        // Scroll logic for URL params is handled natively by hash or here if needed
        const targetId = planParam ? 'formulario-contacto' : 'contacto';
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // small timeout to ensure layout is stable
          setTimeout(() => targetElement.scrollIntoView({ behavior: 'smooth' }), 100);
        }

        const newUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, '', newUrl);
      }
    };

    // Function to handle internal event (smooth transition)
    const handlePlanSelected = (e: CustomEvent) => {
      setSelectedPlan(e.detail);
      // Scroll is handled by the triggering element for better UX, 
      // but we update state here immediately.
    };

    // Initialize
    handleUrlParams();
    window.addEventListener('plan-selected', handlePlanSelected as EventListener);

    return () => {
      window.removeEventListener('plan-selected', handlePlanSelected as EventListener);
    };
  }, []);

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-28 bg-muted overflow-hidden relative" id="contacto">
      <div className="absolute top-1/2 right-1/2 md:right-0 md:top-20 translate-x-1/2 md:translate-x-1/4 -translate-y-1/2 opacity-[0.07] pointer-events-none select-none z-0">
        <img
          src={logoImage}
          alt="Munay Canary Pool Brand"
          loading="lazy"
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] object-contain rotate-[-15deg] grayscale"
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
          <span className="inline-flex items-center gap-2 text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4">
            📞 Contacto
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Solicita Tu{" "}
            <span className="gradient-text">Revisión Gratuita</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
            Déjanos tus datos y un experto te contactará en menos de 24 horas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Urgency Banner */}
            <div className="bg-destructive/10 border-2 border-destructive/20 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base md:text-lg mb-1">
                    ¡Plazas Limitadas!
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Solo aceptamos <span className="text-destructive font-bold">10 nuevos clientes Premium</span> este mes.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
              Información de Contacto
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Teléfono</h4>
                  <p className="text-muted-foreground text-xs md:text-base">
                    <a href="tel:+34600000000" className="hover:text-secondary transition-colors">+34 600 000 000</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Email</h4>
                  <p className="text-muted-foreground text-xs md:text-base">
                    <a href="mailto:info@munaycanarypool.es" className="hover:text-secondary transition-colors">info@munaycanarypool.es</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Zonas</h4>
                  <p className="text-muted-foreground text-xs md:text-base">Las Palmas de Gran Canaria</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Horario</h4>
                  <p className="text-muted-foreground text-xs md:text-base">Lun - Vie: 8:00 - 13:30, 16:00 - 19:00</p>
                </div>
              </div>

              {/* Idiomas */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 text-xl leading-none">
                  🌍
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Hablamos tu idioma</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm">
                      <span className="text-base leading-none">🇪🇸</span> Español
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm">
                      <span className="text-base leading-none">🇬🇧</span> English
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm">
                      <span className="text-base leading-none">🇩🇪</span> Deutsch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="formulario-contacto"
            className="scroll-mt-32"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              action="https://formsubmit.co/info@munaycanarypool.es"
              method="POST"
              className="bg-card rounded-2xl md:rounded-3xl shadow-sm p-5 md:p-8"
            >
              <input type="hidden" name="_next" value={`${typeof window !== "undefined" ? window.location.origin : ""}/gracias`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value={`Nuevo contacto desde Munay Canary Pool ${selectedPlan ? `- Interesado en ${selectedPlan}` : ''}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="Plan_Seleccionado" value={selectedPlan || "Revisión Gratuita (General)"} />

              {selectedPlan && (
                <div className="mb-4 md:mb-6 bg-secondary/10 border border-secondary/20 rounded-lg p-3">
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1">
                    Plan seleccionado:
                  </label>
                  <div className="font-bold text-secondary text-sm md:text-base flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {selectedPlan}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm md:text-base"
                  placeholder="tu@email.com"
                />
              </div>



              <div className="mb-4 md:mb-6">
                <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                  ¿Cuál es tu mayor problema con la piscina?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg md:rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none text-sm md:text-base"
                  placeholder="Cuéntanos brevemente..."
                />
              </div>

              <div className="mb-4 md:mb-6 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy_policy"
                  name="privacy_policy"
                  required
                  className="mt-1 h-4 w-4 rounded border-border text-secondary focus:ring-secondary"
                />
                <label htmlFor="privacy_policy" className="text-xs text-muted-foreground text-left">
                  He leído y acepto la <a href="/privacidad" className="underline hover:text-foreground">política de privacidad</a> y consiento el tratamiento de mis datos para la gestión de la solicitud.
                </label>
              </div>

              <button
                type="submit"
                className="btn-solid w-full flex items-center justify-center gap-2 md:gap-3"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                {selectedPlan ? `Solicitar ${selectedPlan}` : 'Solicitar Revisión GRATIS'}
              </button>

              <p className="text-center text-xs md:text-sm text-muted-foreground mt-3 md:mt-4">
                🔒 Tus datos están protegidos
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
