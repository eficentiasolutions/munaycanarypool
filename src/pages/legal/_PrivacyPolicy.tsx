import { Helmet } from "react-helmet";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Helmet>
                <title>Política de Privacidad | Munay Canary Pool</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-24 md:py-32 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidad</h1>

                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                    <h3>1. INFORMACIÓN AL USUARIO</h3>
                    <p>
                        <strong>Munay Canary Pool</strong>, como Responsable del Tratamiento, le informa que, según lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de protección de datos y garantía de los derechos digitales (LOPDGDD), trataremos su datos tal y como reflejamos en la presente Política de Privacidad.
                    </p>

                    <h3>2. FINALIDAD DEL TRATAMIENTO</h3>
                    <p>
                        Tratamos la información que nos facilita con el fin de prestarle el servicio solicitado y realizar la facturación del mismo.
                    </p>
                    <ul className="list-disc pl-5 my-4 space-y-2">
                        <li><strong>Gestión de solicitudes:</strong> Dar respuesta a las consultas o solicitudes recibidas a través de los formularios de contacto.</li>
                        <li><strong>Prestación de servicios:</strong> Gestionar el mantenimiento y servicios contratados para su piscina.</li>
                        <li><strong>Comunicaciones comerciales:</strong> En caso de que nos haya dado su consentimiento expreso, enviarle información relacionada con nuestros productos y servicios.</li>
                    </ul>

                    <h3>3. CONSERVACIÓN DE LOS DATOS</h3>
                    <p>
                        Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.
                    </p>

                    <h3>4. LEGITIMACIÓN</h3>
                    <p>
                        El tratamiento de sus datos se realiza con las siguientes bases jurídicas:
                    </p>
                    <ul className="list-disc pl-5 my-4 space-y-2">
                        <li>La ejecución de un contrato o precontrato para la prestación de servicios.</li>
                        <li>El consentimiento libre, específico, informado e inequívoco del usuario (por ejemplo, al enviar un formulario de contacto).</li>
                    </ul>

                    <h3>5. DESTINATARIOS</h3>
                    <p>
                        Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. No obstante, para prestar determinados servicios podemos necesitar la intervención de proveedores de servicios (encargados del tratamiento), con quienes hemos firmado los correspondientes contratos de confidencialidad.
                    </p>

                    <h3>6. DERECHOS</h3>
                    <p>
                        Usted tiene derecho a obtener confirmación sobre si en Munay Canary Pool estamos tratando sus datos personales por tanto tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios.
                    </p>
                    <p>
                        Puede ejercer sus derechos dirigiendo una comunicación a la dirección de correo: <a href="mailto:info@munaycanarypool.es">info@munaycanarypool.es</a>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
