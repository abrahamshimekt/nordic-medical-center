'use client';

import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '251929105653';
  const message = encodeURIComponent(
    'Hello, I would like to inquire about your medical services at Nordic Medical Centre.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 whatsapp-float">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-nordic-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chat with us
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-nordic-900" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;


