import DataInfo from "../assets/Data/Home.json"

const WhatsAppButton = ({message = "¡Hola! Me gustaría más información." }) => {
    const whatsappLink = `https://wa.me/${DataInfo.contact_us.phone_spaceless}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 z-49 rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-90"
        >
            <img src={`Icons/whatsapp.svg`} alt="WhatsApp" className="w-8 h-8" />
        </a>
    );
};

export default WhatsAppButton;