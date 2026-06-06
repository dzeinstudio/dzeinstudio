const items = [
  'Brand Identity', 'Web Design', 'Social Media', 'AI Prototypes',
  'SEO & LLM', 'Cloud Hosting', 'Graphic Design', 'Newsletter Marketing',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item} <span>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
