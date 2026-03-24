import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', paddingTop: '80px', paddingBottom: '30px' }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: '60px' }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', letterSpacing: '2px', marginBottom: '20px' }}>DIZ EDEN</h3>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px', maxWidth: '250px' }}>
              Diz Eden Luxury Apartments<br/>
              Accra, Greater Accra Region<br/>
              Ghana
            </p>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>
              T: +233 XX XXX XXXX<br/>
              E: hello@dizeden.com
            </p>
          </div>
          
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Accommodations</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/rooms" style={{ color: '#888', fontSize: '0.9rem' }}>Luxury Suites</Link></li>
              <li><Link to="/rooms" style={{ color: '#888', fontSize: '0.9rem' }}>Executive Suites</Link></li>
              <li><Link to="/rooms" style={{ color: '#888', fontSize: '0.9rem' }}>Bridal Suites</Link></li>
              <li><Link to="/rooms" style={{ color: '#888', fontSize: '0.9rem' }}>Room Offers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Experiences</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/events" style={{ color: '#888', fontSize: '0.9rem' }}>Birthday Packages</Link></li>
              <li><Link to="/events" style={{ color: '#888', fontSize: '0.9rem' }}>Bridal Party Experiences</Link></li>
              <li><Link to="/gallery" style={{ color: '#888', fontSize: '0.9rem' }}>Photo Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>About Diz Eden</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/about" style={{ color: '#888', fontSize: '0.9rem' }}>Our Story</Link></li>
              <li><Link to="/contact" style={{ color: '#888', fontSize: '0.9rem' }}>Contact Us</Link></li>
              <li><a href="#" style={{ color: '#888', fontSize: '0.9rem' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: '#888', fontSize: '0.9rem' }}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #333', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: '#666', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} Diz Eden Luxury Apartments. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Social Icons Placeholder */}
            <a href="#" style={{ color: '#888', fontSize: '0.9rem' }}>Instagram</a>
            <a href="#" style={{ color: '#888', fontSize: '0.9rem' }}>Facebook</a>
            <a href="#" style={{ color: '#888', fontSize: '0.9rem' }}>Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
