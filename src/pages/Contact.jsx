import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <main className="section container">
      <h1 className="text-center mb-8">Contact Us</h1>
      
      <div className="grid grid-2">
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h2 className="mb-4">Get in Touch</h2>
          
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <MapPin color="var(--primary-color)" />
            <p>Diz Eden Apartments, Accra, Ghana</p>
          </div>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <Phone color="var(--primary-color)" />
            <p>+233 XX XXX XXXX</p>
          </div>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <Mail color="var(--primary-color)" />
            <p>hello@dizeden.com</p>
          </div>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
            <Clock color="var(--primary-color)" />
            <p>Mon - Sun: 8:00 AM - 8:00 PM</p>
          </div>

          <a href="https://wa.me/233xxxxxxxxx?text=Hi!%20I%20have%20an%20enquiry!" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%' }}>
            Chat with us on WhatsApp
          </a>
        </div>

        <div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '4px' }} required />
            <input type="email" placeholder="Your Email" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '4px' }} required />
            <textarea placeholder="Your Message" rows="5" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '4px' }} required></textarea>
            <button type="submit" className="btn-accent" style={{ padding: '15px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
