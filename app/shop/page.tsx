import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import { Metadata } from 'next';
import { Suspense } from 'react';

import { SITE_URL } from '@/lib/utils';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
  const title = 'Roast Shop';
  const description =
    'Our roasts will give you some much needed firepower to supercharge your digital marketing. Fun, fast, and friggin fabulous! No gimmicks or upsells, just heat.';

  const url = `${SITE_URL}/shop`;

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

export default async function ShopPage() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
      </Suspense>
    </>
  );
}
