export default function Nav() {
  return (
    <nav>
      <a href="#" className="logo-wordmark">Dzein<span>.</span>Studio</a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="nav-social">
          <a href="https://www.facebook.com/DzeinStudio" target="_blank" rel="noreferrer">Facebook</a>
          <div className="nav-divider" />
          <a href="https://www.instagram.com/dzein.studio/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <a href="#contact" className="nav-cta">Get a Quote</a>
      </div>
    </nav>
  );
}
