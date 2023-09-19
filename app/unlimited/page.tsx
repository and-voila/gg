import { Metadata } from 'next';

import Unlimited from '@/components/unlimited/unlimited';
import { SITE_URL } from '@/lib/utils';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
  const title = 'Unlimited Design Build';
  const description =
    'What would you do with a world-class, award-winning, full-stack marketing team on your side? Get started to find out with an unlimited package from And Voila.';

  const url = `${SITE_URL}/unlimited`;

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'A GIF with a flickering hot flame and the RoastMy.xyz logomark.',
        },
      ],
      url,
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'A GIF with a flickering hot flame and the RoastMy.xyz logomark.',
        },
      ],
    },
  };

  return metadata;
}

export default async function UnlimitedPage() {
  return (
    <div className="overflow-hidden">
      <Unlimited />
    </div>
  );
}
