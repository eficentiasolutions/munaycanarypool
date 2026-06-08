import { Helmet } from "react-helmet";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const CookiesPolicy = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Helmet>
                <title>Política de Cookies | Munay Canary Pool</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-24 md:py-32 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Cookies</h1>

                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                    <h3>1. ¿QUÉ SON LAS COOKIES?</h3>
                    <p>
                        Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                    </p>

                    <h3>2. TIPOS DE COOKIES QUE UTILIZA ESTA WEB</h3>
                    <ul className="list-disc pl-5 my-4 space-y-2">
                        <li>
                            <strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.
                        </li>
                        <li>
                            <strong>Cookies de análisis:</strong> Son aquellas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.
                        </li>
                    </ul>

                    <h3>3. DESACTIVACIÓN DE COOKIES</h3>
                    <p>
                        Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
                    </p>
                    <p>
                        A continuación puede acceder a la configuración de los navegadores webs más frecuentes para aceptar, instalar o desactivar las cookies:
                    </p>
                    <ul className="list-disc pl-5 my-4 space-y-2">
                        <li>Google Chrome</li>
                        <li>Mozilla Firefox</li>
                        <li>Safari</li>
                        <li>Microsoft Edge</li>
                    </ul>

                    <h3>4. ACTUALIZACIÓN Y CAMBIOS</h3>
                    <p>
                        Munay Canary Pool puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos, por ello se aconseja a los Usuarios que la visiten periódicamente.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CookiesPolicy;
