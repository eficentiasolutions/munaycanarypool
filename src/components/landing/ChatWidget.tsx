
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: Date;
};

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "¡Hola! Soy el asistente virtual de Munay Canary Pool. 🤖 ¿En qué puedo ayudarte hoy?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setIsMinimized(false);
    };

    const minimizeChat = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMinimized(!isMinimized);
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSendMessage = (e?: React.FormEvent, textOverride?: string) => {
        e?.preventDefault();
        const messageText = textOverride || inputValue;

        if (!messageText.trim()) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: messageText,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            let botResponseText = "Gracias por tu mensaje. Un especialista revisará tu consulta y te contactará pronto.";

            const lowerInput = messageText.toLowerCase();
            if (lowerInput.includes("precio") || lowerInput.includes("costo") || lowerInput.includes("cuanto") || lowerInput.includes("tarifas")) {
                botResponseText = "Nuestros planes comienzan desde precios muy competitivos. Puedes ver los detalles en la sección de Precios o solicitar un presupuesto personalizado.";
            } else if (lowerInput.includes("inspeccion") || lowerInput.includes("gratis") || lowerInput.includes("cita")) {
                botResponseText = "¡Excelente elección! La primera inspección es totalmente GRATUITA. Puedes agendarla dejándonos tus datos en el formulario de contacto.";
            } else if (lowerInput.includes("hola") || lowerInput.includes("buenos")) {
                botResponseText = "¡Hola! ¿Cómo puedo ayudarte con tu piscina hoy?";
            }

            const newBotMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponseText,
                sender: "bot",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, newBotMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        // Optional: auto-send
        // handleSendMessage(); 
        // Or just fill input
    };

    const suggestions = ["Solicitar Inspección Gratis", "Ver Precios", "Problema con mi piscina", "Hablar con un humano"];

    return (
        <>
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-4 z-50 w-[90vw] md:w-[350px] max-w-[350px] shadow-2xl"
                    >
                        <Card className="flex flex-col h-[500px] border-primary/20 overflow-hidden shadow-2xl glass-card">
                            {/* Header */}
                            <div className="bg-primary p-4 flex items-center justify-between text-white shrink-0">
                                <div className="flex items-center gap-2">
                                    <div className="bg-white/20 p-1.5 rounded-full">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm">Asistente Virtual</h3>
                                        <p className="text-xs text-secondary-foreground font-medium flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                            En línea
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" onClick={minimizeChat}>
                                        <Minimize2 className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20" onClick={toggleChat}>
                                        <X className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50" ref={scrollRef}>
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                                ? "bg-primary text-white rounded-tr-none"
                                                : "bg-white border border-gray-100 shadow-sm text-gray-800 rounded-tl-none"
                                                }`}
                                        >
                                            {msg.text}
                                            <span className={`text-[10px] block mt-1 ${msg.sender === "user" ? "text-white/70" : "text-gray-400"}`}>
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                                            <div className="flex gap-1">
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Suggestions (only if few messages) */}
                            {messages.length < 3 && (
                                <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar mask-fade">
                                    {suggestions.map((sugg) => (
                                        <button
                                            key={sugg}
                                            onClick={() => handleSendMessage(undefined, sugg)}
                                            className="whitespace-nowrap text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-50 hover:border-primary/30 transition-colors"
                                        >
                                            {sugg}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Input Area */}
                            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
                                <form
                                    onSubmit={handleSendMessage}
                                    className="flex items-center gap-2"
                                >
                                    <Input
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Escribe tu mensaje..."
                                        className="flex-1 bg-gray-50 border-gray-200 focus-visible:ring-primary"
                                    />
                                    <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90 shrink-0">
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                onClick={toggleChat}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-primary/50 transition-shadow group"
            >
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                {isOpen && !isMinimized ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </motion.button>
        </>
    );
};

export default ChatWidget;
