const About = () => {
  return (
    <main className="section container text-center" style={{ paddingTop: '160px' }}>
      <h1 className="mb-4">About Diz Eden</h1>
      <p className="mb-8 text-muted" style={{ maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
        Diz Eden started with a simple mission: to redefine luxury short-lets in East Legon, Accra. We realized that many travelers desired the high-end touches of a 5-star hotel, but truly craved the space, privacy, and utility (like cooking your own meals) of a fully furnished private residence. We exist to provide exactly that: an uncompromising, premium home away from home.
      </p>

      <h2 className="mb-4" style={{ fontSize: '2rem' }}>Meet Your Hosts</h2>
      <div className="grid grid-2 mb-8 text-center" style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
        <div>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#f6f6f6', margin: '0 auto 20px' }}></div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Derrick</h3>
          <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Founder & Host</p>
        </div>
        <div>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#f6f6f6', margin: '0 auto 20px' }}></div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Ghansah</h3>
          <p style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Operations Manager</p>
        </div>
      </div>

      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Our Core Pillars</h2>
      <div className="grid grid-3 text-center" style={{ gap: '30px' }}>
        <div style={{ padding: '30px', backgroundColor: 'var(--bg-secondary)' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Impeccable Privacy</h4>
          <p className="text-muted">Enjoy your own dedicated space without the constant interruptions characteristic of large hotels.</p>
        </div>
        <div style={{ padding: '30px', backgroundColor: 'var(--bg-secondary)' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Uncompromising Luxury</h4>
          <p className="text-muted">From the thread-count in our sheets to the modern appliances, no detail is spared.</p>
        </div>
        <div style={{ padding: '30px', backgroundColor: 'var(--bg-secondary)' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Responsive Support</h4>
          <p className="text-muted">Our hosts are always a WhatsApp message away to ensure your stay exceeds expectations.</p>
        </div>
      </div>
    </main>
  );
};

export default About;
