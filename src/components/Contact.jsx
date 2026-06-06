import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const INITIAL = { name: '', email: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        service: form.service,
        message: form.message,
      }, PUBLIC_KEY);
      setSent(true);
      setForm(INITIAL);
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('Something went wrong. Please email us directly at info@dzeinstudio.co.za');
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="contact-wrap">
      <div className="contact-inner">
        <div>
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">
            Ready to build<br />something <em>great?</em>
          </h2>
          <div className="contact-info">
            <div className="contact-info-item">
              <span>Studio</span>
              <strong>Fourways, Johannesburg, South Africa</strong>
            </div>
            <div className="contact-info-item">
              <span>Email</span>
              <a href="mailto:info@dzeinstudio.co.za">info@dzeinstudio.co.za</a>
            </div>
            <div className="contact-info-item">
              <span>Phone</span>
              <a href="tel:+27768476002">+27 (0) 76 847 6002</a>
            </div>
          </div>
          <div className="contact-social">
            <a href="https://www.facebook.com/DzeinStudio" target="_blank" rel="noreferrer" className="social-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
            <a href="https://www.instagram.com/dzein.studio/" target="_blank" rel="noreferrer" className="social-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
        <div>
          {sent ? (
            <div className="form-success">
              Thanks! We'll be in touch within one business day.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your name</label>
                <input
                  type="text" name="name" className="form-input"
                  placeholder="Jane Mokoena" value={form.name}
                  onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <input
                  type="email" name="email" className="form-input"
                  placeholder="jane@yourbusiness.co.za" value={form.email}
                  onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Service you're interested in</label>
                <input
                  type="text" name="service" className="form-input"
                  placeholder="e.g. Website Design, Social Media..." value={form.service}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tell us about your project</label>
                <textarea
                  name="message" className="form-textarea"
                  placeholder="Give us a brief overview of what you need..." value={form.message}
                  onChange={handleChange} required
                />
              </div>
              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem' }} disabled={sending}>
                {sending ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
