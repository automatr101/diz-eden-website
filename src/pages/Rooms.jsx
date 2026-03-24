const Rooms = () => {
  const rooms = [
    { id: 1, name: 'One Bedroom Luxury Apartment', price: 'Contact For Rate', img: '/images/room1.jpg', desc: 'Our signature East Legon apartment featuring a fully equipped modern kitchen, spacious lounge, smart TVs, and premium linen in the master suite. Ideal for extended stays and business travellers.' },
    { id: 2, name: 'Executive One Bedroom', price: 'Contact For Rate', img: '/images/room2.jpg', desc: 'A slightly larger floor plan boasting a private balcony with city views, dedicated workspace, high-speed fiber internet, and sleek contemporary furnishings.' },
    { id: 3, name: 'Premium Studio', price: 'Contact For Rate', img: '/images/room3.jpg', desc: 'A compact yet ultra-luxurious open-plan space. Features an expertly designed kitchenette, cozy living area, and a plush sleeping zone. Perfect for solo travellers or couples.' }
  ];

  const getWhatsAppLink = (roomName) => {
    return "#";
  };

  const handleDemoClick = (e, roomName) => {
    e.preventDefault();
    alert(`Inquiry for ${roomName} simulated for demo.`);
  };

  return (
    <main className="section container" style={{ paddingTop: '160px' }}>
      <h1 className="text-center mb-8">Our Apartments</h1>
      <p className="text-center mb-8" style={{ color: 'var(--text-muted)' }}>Contact us on WhatsApp for real-time availability and best rates.</p>
      
      <div className="grid grid-2" style={{ gap: '40px' }}>
        {rooms.map(room => (
          <div key={room.id} style={{ border: '1px solid #eee', borderRadius: '4px', overflow: 'hidden' }}>
            <img src={room.img} alt={room.name} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            <div style={{ padding: '30px' }}>
              <h2 style={{ fontSize: '1.8rem' }}>{room.name}</h2>
              <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>{room.desc}</p>
              
              <ul style={{ listStyleType: 'none', display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <li>✓ Full Kitchen</li>
                <li>✓ Free WiFi</li>
                <li>✓ Smart TV</li>
                <li>✓ AC</li>
                <li>✓ En-suite</li>
              </ul>
              
              <a 
                href="#" 
                onClick={(e) => handleDemoClick(e, room.name)}
                className="btn btn-primary" 
                style={{ marginTop: '10px' }}
              >
                Check Availability
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Rooms;
