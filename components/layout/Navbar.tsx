'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav>
      <a className="brand" href="#">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M16 2L4 7.5V16C4 22.5 9.3 28.5 16 30C22.7 28.5 28 22.5 28 16V7.5L16 2Z"
            fill="#0A192F"
            stroke="#F97316"
            strokeWidth="1.5"
          />
          <path
            d="M16 7L9 10.25V16C9 19.75 12.15 23.25 16 24.5C19.85 23.25 23 19.75 23 16V10.25L16 7Z"
            fill="#F97316"
            fillOpacity="0.12"
          />
          <path
            d="M13 16L15.5 18.5L20 13.5"
            stroke="#00D4AA"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="brand-name">
          Aeon<span>8</span> Systems
        </span>
      </a>

      <ul className={`nlinks ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#products" onClick={closeMenu}>
            Products
          </a>
        </li>
        <li>
          <a href="#field" onClick={closeMenu}>
            Our Field
          </a>
        </li>
        <li>
          <a href="#how" onClick={closeMenu}>
            How We Build
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>

      <div className="nright">
        <Link href="mailto:contect@aeon8.in" className="btn-o">
          Enquire
        </Link>
        <Link href="mailto:support@aeon8.in" className="btn-f">
          Support
        </Link>
        <button
          className={`hbg ${isMenuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
