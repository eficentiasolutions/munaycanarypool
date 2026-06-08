import { Helmet } from "react-helmet";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const LegalNotice = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Helmet>
                <title>Aviso Legal | Munay Canary Pool</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-24 md:py-32 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Aviso Legal</h1>

                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                    <h3>1. DATOS IDENTIFICATIVOS</h3>
                    <p>
                        En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
                    </p>
                    <p>
                        La empresa titular de dominio web es <strong>Munay Canary Pool</strong> (en adelante Munay Canary Pool), con domicilio a estos efectos en Las Palmas de Gran Canaria, España.
                        Correo electrónico de contacto: <a href="mailto:info@munaycanarypool.es">info@munaycanarypool.es</a>.
                    </p>

                    <h3>2. USUARIOS</h3>
                    <p>
                        El acceso y/o uso de este portal de Munay Canary Pool atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
                    </p>

                    <h3>3. USO DEL PORTAL</h3>
                    <p>
                        Munay Canary Pool proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Munay Canary Pool o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos.
                    </p>

                    <h3>4. PROTECCIÓN DE DATOS</h3>
                    <p>
                        Munay Canary Pool cumple con las directrices del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD), y demás normativa vigente, y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario.
                    </p>

                    <h3>5. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
                    <p>
                        Munay Canary Pool por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Munay Canary Pool o bien de sus licenciantes.
                    </p>
                    <p>
                        Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Munay Canary Pool.
                    </p>

                    <h3>6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h3>
                    <p>
                        Munay Canary Pool no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                    </p>

                    <h3>7. MODIFICACIONES</h3>
                    <p>
                        Munay Canary Pool se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                    </p>

                    <h3>8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
                    <p>
                        La relación entre Munay Canary Pool y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Las Palmas de Gran Canaria.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LegalNotice;
