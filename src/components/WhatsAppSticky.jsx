import { MessageCircle } from 'lucide-react';

const WhatsAppSticky = () => {
  const whatsappNumber = "233xxxxxxxxx"; // replace with client number later
  const message = encodeURIComponent("Hi Diz Eden, I'd like to enquire about a booking.");
  const wsLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a href={wsLink} target="_blank" rel="noopener noreferrer" className="whatsapp-sticky" aria-label="Chat on WhatsApp">
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppSticky;
