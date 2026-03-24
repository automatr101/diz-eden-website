const Events = () => {
  return (
    <main className="section container">
      <h1 className="text-center mb-8">Events & Packages</h1>
      
      <div className="grid grid-2 mb-8">
        <div>
          <img src="/images/event1.jpg" alt="Birthday Package" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div>
          <h2>Birthday Packages</h2>
          <p className="mb-4">Celebrate your special day with full luxury. Enjoy tailored decor, premium catering options, and a space designated for you and your guests.</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
            <li>Private Event Area</li>
            <li>Customized Decor</li>
            <li>Dedicated Service Staff</li>
          </ul>
          <a href="https://wa.me/233xxxxxxxxx?text=Hi!%20I'm%20interested%20in%20a%20Birthday%20Package." className="btn-primary" target="_blank" rel="noopener noreferrer">Plan Your Event</a>
        </div>
      </div>

      <div className="grid grid-2 mb-8" style={{ marginTop: '80px' }}>
        <div style={{ order: 1 }}>
          <img src="/images/event2.jpg" alt="Bridal Package" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div style={{ order: 0 }}>
          <h2>Bridal Party Package</h2>
          <p className="mb-4">The ultimate pre-wedding getaway for the bride and her girls.</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
            <li>Bridal Suite preparation room</li>
            <li>Champagne on arrival</li>
            <li>Spa-like bathroom amenities</li>
          </ul>
          <a href="https://wa.me/233xxxxxxxxx?text=Hi!%20I'm%20interested%20in%20the%20Bridal%20Party%20Package." className="btn-accent" target="_blank" rel="noopener noreferrer">Contact for Quote</a>
        </div>
      </div>
    </main>
  );
};

export default Events;
