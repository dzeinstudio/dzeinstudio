import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 100, suffix: '+', label: 'Projects delivered' },
  { value: 20,  suffix: '+', label: 'Years in business' },
  { value: 10,  suffix: '+', label: 'Industries served' },
  { value: 50,  suffix: '+', label: 'Brands created' },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count}{suffix}</>;
}

export default function About() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-wrap">
      <div className="about-inner">
        <div className="about-stats-grid" ref={ref}>
          {stats.map((s) => (
            <div key={s.label} className="about-stat-card">
              <div className="about-stat-num">
                <CountUp target={s.value} suffix={s.suffix} active={active} />
              </div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
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
