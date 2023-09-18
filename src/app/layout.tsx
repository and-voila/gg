import '@/styles/tailwind.css';

import { type Metadata } from 'next';

import { RootLayout } from '@/components/RootLayout';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full text-base antialiased">
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <RootLayout>
            <main>{children}</main>
          </RootLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
