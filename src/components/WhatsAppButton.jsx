import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917660952680"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed border-4 bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
      style={{
        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)'
      }}
    >
      <FaWhatsapp size={20} />
    </a>
  );
};

export default WhatsAppButton;
