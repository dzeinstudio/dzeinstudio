const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn about your business, goals, audience and competitors to build a solid strategic foundation.',
  },
  {
    num: '02',
    title: 'Strategy & Design',
    desc: 'We craft a tailored creative direction and present concepts for your review and feedback.',
  },
  {
    num: '03',
    title: 'Build & Refine',
    desc: 'We develop and iterate with your input until every detail is exactly right.',
  },
  {
    num: '04',
    title: 'Launch & Grow',
    desc: 'We launch your project and provide ongoing support, optimisation and growth strategies.',
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="section-header">
        <div>
          <p className="section-label">How we work</p>
          <h2 className="section-title">A clear process,<br />every time</h2>
        </div>
        <p>We keep things transparent, collaborative and efficient, so you always know where your project stands.</p>
      </div>
      <div className="process-steps">
        {steps.map((s) => (
          <div key={s.num} className="process-step">
            <div className="step-dot">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
