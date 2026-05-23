'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export function Contact() {
  const [message, setMessage] = useState('No spam. We respond within 24h.');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = form.elements.namedItem('website') as HTMLInputElement | null;
    if (honeypot?.value) {
      return;
    }
    setMessage('Received. We will reach out within 24h.');
    form.reset();
  };

  return (
    <section id="contact" className="contact-sec">
      <div className="si">
        <span className="stag">Get In Touch</span>
        <h2 className="stitle">Work With Aeon8</h2>
        <p className="sdesc contact-copy">
          Pilot access for Sentinel, Academy enrollment, enterprise licensing, or partnerships.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="ico">GE</div>
            <h4>General Enquiries</h4>
            <Link href="mailto:info@aeon8.in">info@aeon8.in</Link>
            <p>Product info, partnerships, press, and general questions.</p>
          </div>
          <div className="contact-card">
            <div className="ico">SP</div>
            <h4>Sentinel Pilot Access</h4>
            <Link href="mailto:support@aeon8.in">support@aeon8.in</Link>
            <p>Onboarding 3-5 pilot customers. PSU, defence, and ICS priority.</p>
          </div>
          <div className="contact-card">
            <div className="ico">AE</div>
            <h4>Academy Enrollment</h4>
            <Link href="mailto:trainig@aeon8.in">trainig@aeon8.in</Link>
            <p>Course registration, batch details, and corporate training.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="website" className="hp" tabIndex={-1} autoComplete="off" />
          <input type="email" placeholder="Work email" required autoComplete="email" />
          <input type="text" placeholder="Name and Organisation" />
          <select defaultValue="">
            <option value="">Select Interest</option>
            <option>Aeon Sentinel - Pilot Access</option>
            <option>Aeon8 Academy - Enrollment</option>
            <option>Enterprise Licensing</option>
            <option>Partnership / Integration</option>
            <option>Careers at Aeon8</option>
          </select>
          <button type="submit">Submit</button>
          <p className="form-message">{message}</p>
        </form>
      </div>
    </section>
  );
}
