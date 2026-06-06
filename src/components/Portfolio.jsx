const clients = [
  { num: '01', name: 'Outpost Botswana', domain: 'outpostbotswana.africa', url: 'https://outpostbotswana.africa/' },
  { num: '02', name: 'Okavango Expeditions', domain: 'okavangoexpeditions.com', url: 'https://okavangoexpeditions.com/' },
  { num: '03', name: 'Aerial Shots', domain: 'aerialshots.co.za', url: 'https://aerialshots.co.za/' },
  { num: '04', name: 'Nicolson Russell', domain: 'nicolsonrussell.com', url: 'https://nicolsonrussell.com/' },
  { num: '05', name: 'Culture Connect SA', domain: 'cultureconnectsa.com', url: 'https://cultureconnectsa.com/' },
  { num: '06', name: 'Pearl Point', domain: 'pearlpoint.co.za', url: 'https://pearlpoint.co.za/' },
  { num: '07', name: 'BLV Law', domain: 'blvlaw.co.za', url: 'https://www.blvlaw.co.za/' },
  { num: '08', name: 'Triple-i Consulting', domain: 'iii-consulting.com', url: 'https://iii-consulting.com/' },
  { num: '09', name: 'Zeit Für Kunst', domain: 'zeitfuerkunst.com', url: 'https://zeitfuerkunst.com/' },
  { num: '10', name: 'Models n Maps', domain: 'modelsnmaps.co.za', url: 'https://modelsnmaps.co.za/' },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-header">
        <div>
          <p className="section-label">Our work</p>
          <h2 className="section-title">Websites we've built<br />for real businesses</h2>
        </div>
        <p>Eleven live websites designed and developed by Dzein Studio, each one crafted to perform, convert and impress.</p>
      </div>
      <div className="portfolio-grid">
        {clients.map((c) => (
          <div
            key={c.num}
            className="portfolio-card"
            onClick={() => window.open(c.url, '_blank')}
          >
            <div className="portfolio-card-num">{c.num}</div>
            <div className="portfolio-card-name">{c.name}</div>
            <div className="portfolio-card-domain">{c.domain}</div>
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="portfolio-card-link"
              onClick={(e) => e.stopPropagation()}
            >
              Visit website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
