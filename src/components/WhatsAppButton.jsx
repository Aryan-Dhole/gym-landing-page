const WhatsAppButton = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    const message = "Hi! I'm interested in joining FITCLUB.";

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all duration-300"
        >
            💬 Chat on WhatsApp
        </a>
    );
};

export default WhatsAppButton;
