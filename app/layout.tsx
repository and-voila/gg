import '../styles/base.css';

import Navbar from 'components/layout/navbar';
import { ThemeProvider } from 'components/theme-provider';
import { ensureStartsWith } from 'lib/utils';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import Footer from '@/components/layout/footer';

const monaSans = localFont({
  src: './fonts/mona-sans.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const calSans = localFont({
  src: './fonts/cal-sans.woff2',
  display: 'swap',
  variable: '--font-cal-sans',
});

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR
  ? ensureStartsWith(TWITTER_CREATOR, '@')
  : undefined;
const twitterSite = TWITTER_SITE
  ? ensureStartsWith(TWITTER_SITE, 'https://')
  : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Need better digital marketing results? Get an expert roast of your marketing assets or join the Sizzle Squad, the best digital marketing server on Discord. 🔥',
  keywords: [
    'Exclusive Digital Marketing Community',
    'Digital Marketing Community',
    'Discord Server for Digital Marketers',
    'Digital Marketing Optimization',
    'Rebekah Radice',
  ],
  openGraph: {
    type: 'website',
    title: SITE_NAME!,
    description:
      'Need better digital marketing results? Get an expert roast of your marketing assets or join the Sizzle Squad, the best digital marketing server on Discord. 🔥',
    images: [
      {
        url: '/open-graph.gif',
        width: 1200,
        height: 630,
        alt: 'A GIF with a flickering hot flame and the RoastMy.xyz logomark.',
      },
    ],
    siteName: SITE_NAME!,
  },
  category: 'digital marketing community',
  robots: {
    follow: false,
    index: false,
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        title: SITE_NAME!,
        description:
          'Need better digital marketing results? Get an expert roast of your marketing assets or join the Sizzle Squad, the best digital marketing server on Discord. 🔥',
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite,
        images: [
          {
            url: '/open-graph.gif',
            alt: 'A GIF with a flickering hot flame and the RoastMy.xyz logomark.',
          },
        ],
      },
    }),
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'apple',
      url: '/icons/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-194x194.png',
      sizes: '194x194',
    },
    {
      rel: 'icon',
      url: '/icons/android-chrome-192x192.png',
      sizes: '194x194',
    },
    {
      rel: 'mask-icon',
      url: '/icons/safari-pinned-tab.svg',
    },
  ],
  manifest: '/site.webmanifest',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} ${calSans.variable} text-base antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full">
        <Navbar />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}