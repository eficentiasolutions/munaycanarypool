import { useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";
import logoImage from "@/assets/munay-canary-pool-logo.png";

const ThankYou = () => {
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const random = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval = window.setInterval(() => {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 },
                });
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 },
                });
            }, 250);

            const timer = setTimeout(() => {
                window.location.href = "/";
            }, 5000);

            return () => {
                clearInterval(interval);
                clearTimeout(timer);
            };
        }
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 relative overflow-hidden">

            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0">
                <img
                    src={logoImage}
                    alt="Munay Canary Pool Brand"
                    loading="lazy"
                    className="w-[600px] h-[600px] object-contain opacity-50 grayscale"
                />
            </div>

            <div className="mx-auto max-w-md text-center relative z-10">
                <div className="mb-8 flex justify-center flex-col items-center gap-6">
                    <img
                        src={logoImage}
                        alt="Munay Canary Pool"
                        loading="lazy"
                        className="h-16 w-auto object-contain drop-shadow-md"
                    />
                    <div className="rounded-full bg-green-100 p-4 drop-shadow-lg animate-bounce">
                        <CheckCircle className="h-16 w-16 text-green-600" />
                    </div>
                </div>

                <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    ¡Solicitud Recibida!
                </h1>

                <p className="mb-8 text-lg text-muted-foreground">
                    Gracias por confiar en <strong>Munay Canary Pool</strong>. Hemos recibido tus datos y uno de nuestros expertos se pondrá en contacto contigo en menos de 24 horas.
                </p>

                <p className="mb-8 text-sm text-gray-400">
                    Serás redirigido al inicio automáticamente en unos segundos...
                </p>

                <a
                    href="/"
                    className="inline-flex items-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                    Volver al Inicio
                </a>
            </div>
        </div>
    );
};

export default ThankYou;
