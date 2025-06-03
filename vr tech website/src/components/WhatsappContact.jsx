import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+919790811296"; // Replace with actual WhatsApp phone number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-72 animate-fadeIn border border-gray-200 dark:border-gray-700 transform transition-all">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white">WhatsApp Contact</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={16} />
            </button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Chat with us directly on WhatsApp for quick support and inquiries.
          </p>
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-4 rounded-lg text-center transition-colors"
          >
            Start Chat
          </a>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105 focus:outline-none"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};

export default WhatsAppContact;