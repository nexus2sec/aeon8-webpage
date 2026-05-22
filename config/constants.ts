// config/constants.ts
// Application-wide constants

export const SITE_NAME = 'Aeon8 Systems';
export const SITE_DESCRIPTION =
  'Sovereign Cybersecurity & Kernel Engineering — India's first eBPF/XDP-native autonomous network enforcement platform.';

export const SOCIAL_LINKS = {
  github: 'https://github.com/try2hk/Aeon8_Sentinel',
  email: 'contact@aeon8systems.in',
  pilotEmail: 'pilot@aeon8systems.in',
  academyEmail: 'academy@aeon8systems.in',
};

export const NAVIGATION = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Our Field', href: '#field' },
  { label: 'How We Build', href: '#how' },
  { label: 'Contact', href: '#contact' },
];

export const COLORS = {
  midnight: '#050D1A',
  navy: '#0A192F',
  panel: '#0F2236',
  border: '#1B3A5C',
  orange: '#F97316',
  odim: '#C05A10',
  teal: '#00D4AA',
  text: '#C9D1D9',
  dim: '#7A8A9A',
  white: '#EEF2F7',
} as const;

export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
