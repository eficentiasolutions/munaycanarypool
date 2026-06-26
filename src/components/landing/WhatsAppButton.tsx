import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    // Número de teléfono para WhatsApp - Reemplazar con el número real
    const phoneNumber = "+34692433841";
    const message = encodeURIComponent("¡Hola! Me gustaría más información sobre el mantenimiento de piscinas.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[#25D366]/50 transition-shadow group"
        >
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <MessageCircle className="w-6 h-6 fill-current" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-medium">
                ¡Hablemos por WhatsApp!
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
