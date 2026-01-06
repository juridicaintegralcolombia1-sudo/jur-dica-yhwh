
import React, { useState, useEffect } from 'react';

const WhatsAppButton: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/573106135299?text=Hola,%20quisiera%20solicitar%20una%20consulta%20legal%20o%20inmobiliaria";

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Bubble Message */}
      {showBubble && (
        <div className="mb-4 bg-white px-5 py-3 rounded-2xl shadow-xl text-primary font-medium text-sm border-b-4 border-secondary relative animate-bounce animate-duration-[2000ms]">
          ¿Necesitas ayuda inmediata?
          <button 
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 bg-gray-200 rounded-full w-5 h-5 text-[10px] flex items-center justify-center hover:bg-gray-300"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
        </div>
      )}

      {/* Main FAB */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 relative"
        aria-label="Contactar por WhatsApp"
      >
        <i className="fab fa-whatsapp text-white text-4xl"></i>
        {/* Pulsing Notification Dot */}
        <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
