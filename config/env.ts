// config/env.ts
// Typed environment variables

export const env = {
  // API
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@aeon8systems.in',
  pilotEmail: process.env.NEXT_PUBLIC_PILOT_EMAIL || 'pilot@aeon8systems.in',
  academyEmail: process.env.NEXT_PUBLIC_ACADEMY_EMAIL || 'academy@aeon8systems.in',

  // GitHub
  githubRepo: process.env.NEXT_PUBLIC_GITHUB_REPO || 'https://github.com/try2hk/Aeon8_Sentinel',
  githubOrg: process.env.NEXT_PUBLIC_GITHUB_ORG || 'try2hk',

  // Site
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Aeon8 Systems',
  siteDescription:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Sovereign Cybersecurity & Kernel Engineering',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',

  // Analytics
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',

  // Feature Flags
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  enableContactsForm: process.env.NEXT_PUBLIC_ENABLE_CONTACTS_FORM !== 'false',
  maintenanceMode: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',

  // Node environment
  nodeEnv: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
} as const;

export type Env = typeof env;
