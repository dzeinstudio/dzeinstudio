import { useState, useEffect } from 'react';

const links = [
  { href: '#top',       label: 'Home' },
  { href: '#services',  label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about',     label: 'About' },
  { href: '#process',   label: 'Process' },
  { href: '#contact',   label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav>
        <a href="#top" className="logo-wordmark" onClick={close}>Dzein<span>.</span>Studio</a>

        <ul className="nav-links">
          {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="nav-social">
            <a href="https://www.facebook.com/DzeinStudio" target="_blank" rel="noreferrer">Facebook</a>
            <div className="nav-divider" />
            <a href="https://www.instagram.com/dzein.studio/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <a href="#contact" className="nav-cta">Get a Quote</a>
        </div>

        {/* Burger — mobile only */}
        <button
          className={`burger ${open ? 'burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <a href="https://www.facebook.com/DzeinStudio" target="_blank" rel="noreferrer" onClick={close}>Facebook</a>
          <a href="https://www.instagram.com/dzein.studio/" target="_blank" rel="noreferrer" onClick={close}>Instagram</a>
          <a href="#contact" className="btn-primary" onClick={close}>Get a Quote</a>
        </div>
      </div>

      {/* Backdrop */}
      {open && <div className="mobile-backdrop" onClick={close} />}
    </>
  );
}
