export default function About() {
  return (
    <section id="about" className="about-wrap">
      <div className="about-inner">
        <div className="about-visual">
          <div className="about-block ab1" />
          <div className="about-block ab2">
            <div className="ab2-stat">100+</div>
            <div className="ab2-label">Projects delivered</div>
          </div>
        </div>
        <div className="about-text">
          <p className="section-label">About Dzein Studio</p>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            A studio that truly gets small business
          </h2>
          <p className="big-quote">
            "Great design isn't a luxury - it's the difference between being remembered and being ignored."
          </p>
          <p>
            We are a Johannesburg-based creative and technology studio dedicated to helping small businesses
            and startups compete with bigger players through exceptional design, smart marketing and
            cutting-edge digital solutions.
          </p>
          <p>
            From your first logo to your first AI-powered tool, we're the partner that grows with you.
          </p>
          <a href="#contact" className="btn-primary" style={{ marginTop: '1rem' }}>Work with us</a>
        </div>
      </div>
    </section>
  );
}
