# 🚀 PLAN DE MIGRACIÓN A NEXT.JS - DR POOLS

**Fecha:** 20 de Marzo de 2026
**De:** Vite + React + react-router-dom
**A:** Next.js 15 con App Router + TypeScript

---

## 📋 RESUMEN EJECUTIVO

Esta guía paso a paso detalla cómo migrar DR Pools de una SPA (Single Page Application) con Vite+React a Next.js con App Router para maximizar el SEO.

### Por qué Next.js para SEO

| Característica | Vite+React (Actual) | Next.js (Nueva) |
|----------------|---------------------|-----------------|
| Renderizado | Client-Side (CSR) | Server-Side (SSR) |
| SEO en página | ❌ JavaScript requerido | ✅ HTML pre-renderizado |
| Metadata por ruta | ⚠️ react-helmet | ✅ Metadata API nativa |
| Sitemap dinámico | ❌ Manual | ✅ Generación automática |
| Image optimization | ⚠️ Manual | ✅ next/image automática |
| Font optimization | ⚠️ Manual | ✅ next/font automática |

---

## 🎯 OBJETIVOS DE LA MIGRACIÓN

1. ✅ Todas las páginas con HTML pre-renderizado
2. ✅ Metadata única por ruta
3. ✅ Sitemap dinámico completo
4. ✅ Schema Markup por página
5. ✅ Optimización de imágenes automática
6. ✅ Puntuación PageSpeed >95

---

## 📁 PASO 1: CREAR PROYECTO NEXT.JS

```bash
# Desde el directorio actual
npx create-next-app@latest drpools-nextjs --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# Opción interactiva:
cd ..
npx create-next-app@latest
# Nombre: drpools-nextjs
# TypeScript: Yes
# ESLint: Yes
# Tailwind CSS: Yes
# src/ directory: No (usar app/)
# App Router: Yes
# Import alias: @/*
```

---

## 📁 PASO 2: ESTRUCTURA DE CARPETAS

```
drpools-nextjs/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage (/)
│   ├── servicios/
│   │   └── page.tsx            # /servicios
│   ├── precios/
│   │   └── page.tsx            # /precios
│   ├── limpieza-piscinas-tenerife/
│   │   └── page.tsx            # Landing SEO
│   ├── reparacion-piscinas-tenerife/
│   │   └── page.tsx            # Landing SEO
│   ├── mantenimiento-piscinas-santa-cruz/
│   │   └── page.tsx            # Landing SEO local
│   ├── aviso-legal/
│   │   └── page.tsx            # /aviso-legal
│   ├── privacidad/
│   │   └── page.tsx            # /privacidad
│   ├── cookies/
│   │   └── page.tsx            # /cookies
│   ├── gracias/
│   │   └── page.tsx            # /gracias
│   ├── sitemap.ts              # Sitemap dinámico
│   ├── robots.ts               # Robots.txt dinámico
│   └── manifest.ts             # PWA manifest
├── components/
│   ├── landing/                # Copiar desde proyecto actual
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PainSection.tsx
│   │   ├── AgitationBanner.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── DataVizSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   └── ui/                     # Migrar shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       # ... resto de componentes UI
├── lib/
│   └── utils.ts                # Copiar desde actual
├── public/
│   ├── favicon.svg
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg
│   ├── hero-pool-maintenance-v2.png
│   ├── drpools-logo.png
│   # ... imágenes de testimonials
│   └── fonts/                  # Si hay fuentes personalizadas
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔄 PASO 3: MIGRAR COMPONENTES

### 3.1. Actualizar imports de imágenes

**Antes (Vite):**
```tsx
import heroPoolPremium from "@/assets/hero-pool-maintenance-v2.png";

<img src={heroPoolPremium} alt="..." />
```

**Después (Next.js):**
```tsx
import Image from "next/image";
import heroPoolPremium from "@/assets/hero-pool-maintenance-v2.png";

<Image
  src={heroPoolPremium}
  alt="Piscina cristalina mantenida profesionalmente"
  priority          // Para imágenes above-the-fold
  fill               // O usar width/height
  className="object-cover"
/>
```

### 3.2. Actualizar componentes de UI (shadcn/ui)

Reinstalar shadcn/ui para Next.js:

```bash
npx shadcn@latest init
# TypeScript: Yes
# Style: Default
# Base color: Slate
# CSS variables: Yes
```

Luego copiar los componentes personalizados manualmente.

### 3.3. Migrar componentes de landing

La mayoría de componentes se pueden copiar tal cual, solo cambiar:

```tsx
// Cambiar:
import { motion } from "framer-motion";

// A:
"use client";  // Añadir al inicio de componentes con motion
import { motion } from "framer-motion";
```

---

## 📝 PASO 4: CONFIGURAR METADATA

### 4.1. Root Layout (`app/layout.tsx`)

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drpools.es"),
  title: {
    default: "DR Pools | Mantenimiento Profesional de Piscinas",
    template: "%s | DR Pools",
  },
  description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Recupera tu tiempo libre con DR Pools. Primera inspección GRATIS.",
  keywords: ["mantenimiento piscinas", "limpieza piscinas", "servicio piscinas Tenerife"],
  authors: [{ name: "DR Pools" }],
  creator: "DR Pools",
  publisher: "DR Pools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://drpools.es",
    title: "DR Pools | Mantenimiento Profesional de Piscinas",
    description: "¿Tu piscina es un placer o una carga? Recupera 80h/año con nuestro servicio profesional. Inspección GRATIS.",
    siteName: "DR Pools",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DR Pools - Mantenimiento Profesional de Piscinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DR Pools | Mantenimiento de Piscinas",
    description: "Servicio profesional de mantenimiento de piscinas. Primera inspección GRATIS.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "tu-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

### 4.2. Homepage Metadata (`app/page.tsx`)

```tsx
import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
// ... resto de imports

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas Tenerife | Inspección GRATIS",
  description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Recupera 80h/año de tiempo libre. Primera inspección de balance químico GRATIS. +500 familias satisfechas en Tenerife.",
  keywords: [
    "mantenimiento piscinas Tenerife",
    "limpieza piscinas Tenerife",
    "servicio mantenimiento piscina",
    "balance químico piscina",
    "mantenimiento piscina precio",
  ],
  alternates: {
    canonical: "https://drpools.es",
  },
  openGraph: {
    title: "DR Pools | Mantenimiento de Piscinas Tenerife",
    description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Primera inspección GRATIS.",
    url: "https://drpools.es",
  },
};

export default function HomePage() {
  return (
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
  );
}
```

### 4.3. Metadata para páginas SEO

```tsx
// app/limpieza-piscinas-tenerife/page.tsx
export const metadata: Metadata = {
  title: "Limpieza de Piscinas Tenerife | Servicio Profesional",
  description: "Servicio profesional de limpieza de piscinas en Tenerife. Limpieza completa, filtros, paredes y fondo. Presupuesto sin compromiso. Llámanos ahora.",
  keywords: [
    "limpieza piscinas Tenerife",
    "limpieza piscina precio",
    "servicio limpieza piscina",
    "mantenimiento piscina Tenerife",
  ],
  alternates: {
    canonical: "https://drpools.es/limpieza-piscinas-tenerife",
  },
};
```

---

## 🗺️ PASO 5: SITEMAP DINÁMICO

```tsx
// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drpools.es";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/precios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/limpieza-piscinas-tenerife`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reparacion-piscinas-tenerife`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mantenimiento-piscinas-santa-cruz`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
```

---

## 🤖 PASO 6: SCHEMA MARKUP

### 6.1. Schema Markup en páginas

```tsx
// app/page.tsx - Añadir al final
const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DR Pools",
  image: "https://drpools.es/og-image.jpg",
  "@id": "https://drpools.es",
  url: "https://drpools.es",
  telephone: "+34624187418",
  email: "info@drpools.es",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tenerife",
    addressCountry: "ES",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "16:00",
      closes: "19:00",
    },
  ],
  priceRange: "€€",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 28.2916,
      longitude: -16.6291,
    },
    geoRadius: "50000",
  },
};

// En el JSX
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* resto del componente */}
    </>
  );
}
```

### 6.2. FAQPage Schema

```tsx
// components/landing/FAQSection.tsx - Añadir schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Con qué frecuencia se debe hacer mantenimiento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos mantenimiento semanal para garantizar agua cristalina y segura.",
      },
    },
    // ... más FAQs
  ],
};
```

---

## ⚙️ PASO 7: CONFIGURACIÓN NEXT.JS

```tsx
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  httpAgentOptions: {
    keepAlive: true,
  },
};

export default nextConfig;
```

---

## 🏃 PASO 8: SCRIPTS DE MIGRACIÓN

```bash
#!/bin/bash
# migrate.sh

echo "🚀 Iniciando migración a Next.js..."

# 1. Crear proyecto Next.js
npx create-next-app@latest drpools-nextjs --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# 2. Copiar assets
cp -r public drpools-nextjs/

# 3. Instalar dependencias adicionales
cd drpools-nextjs
npm install framer-motion react-hook-form @hookform/resolvers zod recharts lucide-react
npm install -D @types/node

# 4. Copiar componentes de landing
mkdir -p components/landing
cp -r ../src/components/landing/* components/landing/

# 5. Copiar lib
cp -r ../src/lib lib/

echo "✅ Migración base completada!"
echo "📝 Siguientes pasos:"
echo "  1. Reinstalar shadcn/ui"
echo "  2. Migrar componentes a 'use client' donde sea necesario"
echo "  3. Configurar metadata en app/layout.tsx"
echo "  4. Crear todas las páginas en app/"
echo "  5. Configurar sitemap.ts"
echo "  6. Probar con: npm run dev"
```

---

## 📊 PASO 9: VERIFICACIÓN POST-MIGRACIÓN

### Checklist de verificación

- [ ] Todas las páginas renderizan HTML (ver "View Source")
- [ ] Metadata correcta en cada página
- [ ] Sitemap incluye todas las URLs
- [ ] Schema markup presente
- [ ] Imágenes optimizadas con next/image
- [ ] Fuentes optimizadas con next/font
- [ ] Score PageSpeed >95
- [ ] No errores en consola
- [ ] Redes sociales muestran preview correcto

### Comandos de verificación

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Start producción
npm start

# Analizar bundle
npm run build -- --analyze

# Linting
npm run lint
```

---

## 🚀 PASO 10: DEPLOY

### Opciones recomendadas:

1. **Vercel** (recomendado para Next.js)
```bash
npm install -g vercel
vercel
```

2. **Netlify**
```bash
netlify deploy --prod
```

3. **Hostinger** (actual hosting)
- Subir carpeta `.next/`
- Configurar Node.js en servidor

---

## 📈 RESULTADOS ESPERADOS

| Métrica | Antes | Después |
|---------|-------|---------|
| HTML pre-renderizado | ❌ | ✅ |
| Metadata por ruta | ⚠️ | ✅ |
| Páginas indexadas | ~1 | 10+ |
| PageScore | 70-80 | 95+ |
| LCP | ~3s | <1.5s |

---

## 🎓 RECURSOS

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [shadcn/ui for Next.js](https://ui.shadcn.com/)
