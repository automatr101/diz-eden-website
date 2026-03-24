const Gallery = () => {
  const images = [
    { src: '/images/room1.jpg', category: 'Rooms' },
    { src: '/images/room2.jpg', category: 'Rooms' },
    { src: '/images/room3.jpg', category: 'Rooms' },
    { src: '/images/event1.jpg', category: 'Events' },
    { src: '/images/event2.jpg', category: 'Events' },
    { src: '/images/gallery1.jpg', category: 'Facilities' },
    { src: '/images/gallery2.jpg', category: 'Facilities' },
    { src: '/images/gallery3.jpg', category: 'Facilities' },
    { src: '/images/gallery4.jpg', category: 'Facilities' },
  ];

  return (
    <main className="section container">
      <h1 className="text-center mb-8">Our Gallery</h1>
      <p className="textAlign-center mb-8">Experience the Diz Eden difference.</p>

      <div className="grid grid-3">
        {images.map((img, i) => (
          <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', height: '250px' }}>
            <img src={img.src} alt={img.category} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
