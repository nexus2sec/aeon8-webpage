import Link from 'next/link';

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="fbrand">
          <a href="#" className="footer-brand-link">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path
                d="M16 2L4 7.5V16C4 22.5 9.3 28.5 16 30C22.7 28.5 28 22.5 28 16V7.5L16 2Z"
                fill="#0A192F"
                stroke="#F97316"
                strokeWidth="1.5"
              />
              <path
                d="M13 16L15.5 18.5L20 13.5"
                stroke="#00D4AA"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="footer-brand-text">
              Aeon<span>8</span> Systems
            </span>
          </a>
          <p>
            Kernel-grade network security + cybersecurity education. Built in India, for sovereign
            infrastructure worldwide.
          </p>
          <div className="fcon">
            <Link href="mailto:info@aeon8.in">info@aeon8.in</Link>
            <Link href="mailto:support@aeon8.in">support@aeon8.in</Link>
            <span>Gurugram, Haryana, India</span>
          </div>
        </div>

        <div className="fcol">
          <h5>Platform</h5>
          <ul>
            <li>
              <a href="#products">Aeon Sentinel</a>
            </li>
            <li>
              <a href="#contact">Request Access</a>
            </li>
            <li>
              <a href="#contact">Pilot Access</a>
            </li>
            <li>
              <a href="#how">Architecture</a>
            </li>
          </ul>
        </div>

        <div className="fcol">
          <h5>Academy</h5>
          <ul>
            <li>
              <a href="#products">All Courses</a>
            </li>
            <li>
              <a href="#contact">Enrollment</a>
            </li>
            <li>
              <a href="#contact">Corporate Training</a>
            </li>
            <li>
              <a href="#contact">Certifications</a>
            </li>
          </ul>
        </div>

        <div className="fcol">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#about">About Aeon8</a>
            </li>
            <li>
              <a href="#field">Our Field</a>
            </li>
            <li>
              <Link href="mailto:contect@aeon8.in">Contact</Link>
            </li>
            <li>
              <Link href="mailto:info@aeon8.in">Careers</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="fbot">
        <p>Copyright 2026 Aeon8 Systems. All Rights Reserved. Secure. Empower. Sovereign.</p>
        <div className="fsoc">
          <Link href="mailto:info@aeon8.in">Info</Link>
          <Link href="mailto:support@aeon8.in">Support</Link>
          <a href="#contact">Enquire</a>
        </div>
      </div>
    </footer>
  );
}
