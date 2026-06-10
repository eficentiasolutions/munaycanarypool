import { Helmet } from "react-helmet";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import AgitationBanner from "@/components/landing/AgitationBanner";
import SolutionSection from "@/components/landing/SolutionSection";
import DataVizSection from "@/components/landing/DataVizSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";


const Index = () => {
  return (
    <>
      <Helmet>
        <title>Munay Canary Pool | Mantenimiento Profesional de Piscinas | Inspección Gratis</title>
        <meta
          name="description"
          content="Servicio profesional de mantenimiento de piscinas. Recupera tu tiempo libre con Munay Canary Pool. Primera inspección de balance químico GRATIS. +500 familias satisfechas."
        />
        <meta
          name="keywords"
          content="mantenimiento piscinas Canarias, limpieza piscinas Gran Canaria, balance químico piscina, servicio piscinas Islas Canarias, mantenimiento piscinas"
        />
        <meta property="og:title" content="Munay Canary Pool | Mantenimiento Profesional de Piscinas" />
        <meta
          property="og:description"
          content="¿Tu piscina es un placer o una carga? Recupera 80h/año con nuestro servicio profesional. Inspección GRATIS."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://munaycanarypool.es" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <WhatsAppButton />

        <main>
          <HeroSection />
          <PainSection />
          <AgitationBanner />
          <section id="servicios">
            <SolutionSection />
          </section>
          <section id="resultados">
            <DataVizSection />
          </section>
          <TestimonialsSection />
          <PricingSection />
          <section id="faq">
            <FAQSection />
          </section>
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
