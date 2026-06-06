export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-deco" />
      <p className="hero-eyebrow">Design Studio — Johannesburg, ZA</p>
      <h1 className="hero-headline">
        We design brands<br />
        that <em>move</em> people<br />
        &amp; businesses.
      </h1>
      <p className="hero-sub">
        Dzein Studio partners with small businesses and startups to build compelling
        digital presences — from strategy and identity to websites, marketing and
        AI-powered experiences.
      </p>
      <div className="hero-actions">
        <a href="#services" className="btn-primary">Explore Services</a>
        <a href="#contact" className="btn-ghost">Let's Talk</a>
      </div>
      <div className="hero-scroll">
        <span className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
