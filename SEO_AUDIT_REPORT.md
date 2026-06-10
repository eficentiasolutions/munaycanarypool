# SEO Audit Report — drpools.es
**Fecha:** 1 abril 2026
**Objetivo:** Posicionar "Mantenimiento de piscinas en Tenerife" en la primera página de Google
**Analista:** Claude (Eficentia Solutions)

---

## Resumen Ejecutivo

**Salud general del sitio: 72/100**

El sitio drpools.es está bien construido con Next.js, tiene schema markup, sitemap, y metadata adecuada. Sin embargo, hay **9 problemas críticos y de alta prioridad** que impiden un buen posicionamiento. Los más urgentes son: falta de enlaces internos a las páginas de servicio, página /gracias indexable, duplicación www/non-www, y falta de OG images en páginas de servicio.

---

## Hallazgos por Categoría

### 1. CRAWLABILITY & INDEXACIÓN

#### [CRÍTICO] 1.1 — www vs non-www sin redirección
- **Impacto:** Alto — Contenido duplicado en Google
- **Evidencia:** `drpools.es` y `www.drpools.es` devuelven 200 sin redirigir. Canonical apunta a `drpools.es` pero www es accesible.
- **Fix:** Configurar redirección 301 en Vercel/DNS de www → non-www (o viceversa). Elegir UNA versión canónica y redirigir la otra.

#### [CRÍTICO] 1.2 — Página /gracias NO tiene noindex
- **Impacto:** Alto — Página de agradecimiento indexable compite con contenido real
- **Evidencia:** La página usa `"use client"` y hereda `robots: index, follow` del layout. No tiene metadata export propia.
- **Fix:** Crear `app/gracias/layout.tsx` con `export const metadata: Metadata = { robots: { index: false, follow: true } }`.

#### [ALTO] 1.3 — Sitemap y robots.txt redirigen con 308
- **Impacto:** Medio — Google debe seguir redirección para acceder
- **Evidencia:** `drpools.es/sitemap.xml` → 308 → `www.drpools.es/sitemap.xml` (mismo problema www/non-www)
- **Fix:** Se resolverá al fijar 1.1

#### [MEDIO] 1.4 — Sitemap incluye /gracias
- **Impacto:** Medio — Google podría intentar indexarla
- **Fix:** Eliminar `/gracias` del sitemap.ts una vez tenga noindex

---

### 2. METADATA & ON-PAGE SEO

#### [CRÍTICO] 2.1 — Sin enlaces internos a páginas de servicio
- **Impacto:** Alto — Las páginas `/mantenimiento-piscinas-tenerife` y `/limpieza-piscinas-tenerife` son páginas huérfanas (orphan pages). No hay ningún enlace interno desde la home, navbar, footer, ni otras páginas que apunte a ellas.
- **Evidencia:** Grep exhaustivo de `href.*mantenimiento-piscinas|href.*limpieza-piscinas` devuelve 0 resultados.
- **Fix:** Añadir enlaces a estas páginas desde:
  - Navbar (dropdown o enlace directo)
  - Footer (sección "Servicios")
  - Home page (sección de servicios)
  - CTA sections

#### [ALTO] 2.2 — Falta OG image en páginas de servicio
- **Impacto:** Medio — Compartir en redes sociales muestra imagen genérica
- **Evidencia:** `/mantenimiento-piscinas-tenerife` y `/limpieza-piscinas-tenerife` solo definen `openGraph.title`, `description`, `url` pero NO `openGraph.images`.
- **Fix:** Añadir `images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "..." }]` al openGraph de cada página.

#### [MEDIO] 2.3 — Favicon/icon references rotos
- **Impacto:** Medio — Iconos de pestaña y PWA no cargan correctamente
- **Evidencia:** layout.tsx referencia `/icon.png` y `/apple-icon.png` pero en public existen `/favicon.png` y `/apple-touch-icon.png`.
- **Fix:** Renombrar archivos o actualizar referencias en layout.tsx.

#### [BAJO] 2.4 — Página /gracias tiene title heredado del layout
- **Impacto:** Bajo — No es ideal pero no daña SEO directamente
- **Evidencia:** Title: "DR Pools | Mantenimiento Profesional de Piscinas" (heredado)
- **Fix:** Se soluciona con 1.2

---

### 3. SCHEMA MARKUP

#### [OK] 3.1 — LocalBusiness Schema (Home)
- Schema completo con nombre, teléfono, email, horarios, geolocalización.
- **Evaluación:** Buena implementación.

#### [OK] 3.2 — Service Schema (Páginas de servicio)
- Implementado en `/mantenimiento-piscinas-tenerife` y `/limpieza-piscinas-tenerife` con área servida (GeoCircle).
- `/mantenimiento-piscinas-tenerife` incluye OfferCatalog con planes.

#### [OK] 3.3 — FAQPage Schema
- 6 preguntas/respuestas correctamente implementadas.

#### [OK] 3.4 — Review Schema (Testimonios)
- Generado dinámicamente desde google-reviews.ts con AggregateRating y reviews individuales.

#### [MEDIO] 3.5 — Falta Organization schema
- No hay un schema Organization separado que refuerce la marca.
- **Fix:** Añadir Organization schema en layout.tsx con sameAs (redes sociales).

#### [MEDIO] 3.6 — Falta BreadcrumbList schema
- Ninguna página implementa breadcrumbs.
- **Fix:** Añadir breadcrumbs con BreadcrumbList schema, especialmente en páginas de servicio.

---

### 4. CONTENIDO & ESTRUCTURA

#### [ALTO] 4.1 — Footer no enlaza a páginas de servicio
- **Evidencia:** Los enlaces de "Servicios" en el footer apuntan a `#servicios` (hash local), no a las páginas de servicio.
- **Fix:** Cambiar a enlaces directos: `/mantenimiento-piscinas-tenerife`, `/limpieza-piscinas-tenerife`.

#### [MEDIO] 4.2 — Keyword cannibalización potencial
- Home: "Mantenimiento de Piscinas en Tenerife"
- `/mantenimiento-piscinas-tenerife`: "Mantenimiento de Piscinas en Tenerife"
- Ambas compiten por la misma keyword principal.
- **Fix:** Diferenciar: Home → keyword más genérica "DR Pools | Servicio Profesional de Piscinas en Tenerife". Servicio → keyword específica.

#### [BAJO] 4.3 — Falta página de zonas/localidades
- La página de mantenimiento lista 14 municipios como texto pero no hay páginas individuales.
- **Fix:** (Opcional a largo plazo) Crear páginas por zona: `/mantenimiento-piscinas-santa-cruz`, `/mantenimiento-piscinas-arona`, etc.

---

### 5. CORE WEB VITALS & RENDIMIENTO

#### [OK] 5.1 — Build estático correcto
- Todas las páginas se pre-renderizan como estáticas (SSG).
- Build exitoso sin errores.

#### [OK] 5.2 — Optimización de imágenes
- next/image con priority para above-the-fold.
- Formatos WebP/AVIF configurados.
- Device sizes optimizados.

#### [OK] 5.3 — Lazy loading de componentes pesados
- DataVizSection, TestimonialsSection, PricingSection, FAQSection, ContactSection cargan con `dynamic()` + skeleton.

#### [OK] 5.4 — Speed Insights integrado
- Vercel SpeedInsights configurado.

#### [MEDIO] 5.5 — No se pudo verificar PageSpeed (quota agotada)
- Recomendación: Verificar manualmente en https://pagespeed.web.dev/

---

### 6. ASPECTOS TÉCNICOS ADICIONALES

#### [OK] 6.1 — Google Site Verification
- `<meta name="google-site-verification" content="6lgqxFvYDRDgmnuZRyondxWpDQgsKChNejhZTMAUIjs" />` presente.

#### [OK] 6.2 — HTTPS
- Todo el sitio sirve sobre HTTPS.

#### [OK] 6.3 — Preconnect hints
- Google Fonts y gstatic preconectados.

#### [OK] 6.4 — Powered-by header
- Deshabilitado en next.config.ts.

#### [BAJO] 6.5 — site.webmanifest usa archivo incorrecto
- Referencia `/apple-touch-icon.png` que existe, pero el theme_color blanco no coincide con el brand.

---

## PLAN DE ACCIÓN PRIORITARIO

### Inmediato (Esta Semana)

| # | Acción | Archivo | Impacto |
|---|--------|---------|---------|
| 1 | Añadir enlaces internos a páginas de servicio | Navbar, Footer, HeroSection, SolutionSection | CRÍTICO |
| 2 | Crear layout.tsx para /gracias con noindex | `app/gracias/layout.tsx` (nuevo) | CRÍTICO |
| 3 | Añadir OG images a páginas de servicio | `app/mantenimiento-.../page.tsx`, `app/limpieza-.../page.tsx` | ALTO |
| 4 | Corregir referencias de iconos | `app/layout.tsx` o renombrar en `public/` | MEDIO |
| 5 | Eliminar /gracias del sitemap | `app/sitemap.ts` | MEDIO |

### Corto Plazo (Próximas 2 Semanas)

| # | Acción | Impacto |
|---|--------|---------|
| 6 | Configurar redirección www → non-www en Vercel | CRÍTICO |
| 7 | Añadir Organization schema con sameAs | MEDIO |
| 8 | Añadir BreadcrumbList schema | MEDIO |
| 9 | Diferenciar title de home vs servicio para evitar cannibalización | MEDIO |
| 10 | Añadir página 404 personalizada | BAJO |

### Medio Plazo (1-2 Meses)

| # | Acción | Impacto |
|---|--------|---------|
| 11 | Crear páginas de servicio por localidad (programmatic SEO) | ALTO |
| 12 | Añadir blog con contenido sobre mantenimiento de piscinas | ALTO |
| 13 | Optimizar Google Business Profile (fotos, posts, Q&A) | ALTO |
| 14 | Obtener backlinks locales (directorios, asociaciones) | ALTO |

---

## NOTA: Google Icon Badge en Testimonials

**Fix aplicado:** El badge de Google en cada tarjeta de testimonio estaba cortado. Se ha corregido:
- Container con dimensiones fijas (`w-8 h-8 md:w-9 md:h-9`)
- SVG escalado (`w-5 h-5 md:w-5.5 md:h-5.5`)
- Posicionamiento ajustado (`-top-1.5 -right-1.5`)
- `overflow-hidden` añadido para garantizar circularidad
