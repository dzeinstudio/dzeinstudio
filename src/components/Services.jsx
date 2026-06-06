const services = [
  {
    num: '01',
    title: 'Social Media Marketing',
    desc: 'Strategy, content creation and community management across all major platforms. We grow your audience and turn followers into loyal customers.',
  },
  {
    num: '02',
    title: 'Website Design & Development',
    desc: 'Fast, responsive, beautifully designed websites built for conversion. From landing pages to full e-commerce platforms — we handle everything.',
  },
  {
    num: '03',
    title: 'Graphic Design',
    desc: 'Visual identities, marketing materials, social assets and beyond. We craft designs that communicate your brand values at a glance.',
  },
  {
    num: '04',
    title: 'Newsletter Marketing',
    desc: 'Beautifully crafted email campaigns that nurture leads, delight subscribers and drive consistent revenue to your business.',
  },
  {
    num: '05',
    title: 'AI Prototype Development',
    desc: 'We build custom AI-powered tools, chatbots and prototypes that automate tasks and give your business a genuine competitive edge.',
  },
  {
    num: '06',
    title: 'SEO & LLM Optimisation',
    desc: 'Be found — on search engines and in AI tools like ChatGPT and Claude. We optimise your content for both traditional SEO and the next generation of search.',
  },
  {
    num: '07',
    title: 'Cloud Hosting, CDN & Security',
    desc: 'Reliable, fast and secure hosting infrastructure. We manage your cloud environment so your website is always online, protected and blazing fast.',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-header">
        <div>
          <p className="section-label">What we do</p>
          <h2 className="section-title">Services built for<br />growing businesses</h2>
        </div>
        <p>Every service we offer is designed to deliver measurable results for small businesses and startups ready to grow their digital presence.</p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.num} className="service-card">
            <div className="service-num">{s.num}</div>
            <div className="service-title">{s.title}</div>
            <p className="service-desc">{s.desc}</p>
            <a href="#contact" className="service-link">Get started</a>
          </div>
        ))}
      </div>
    </section>
  );
}
