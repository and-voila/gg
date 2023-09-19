import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import { Metadata } from 'next';
import { Suspense } from 'react';

import { SITE_URL } from '@/lib/utils';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
  const title = 'RoastMy.xyz Roasts Catalog';
  const description =
    'RoastMy.xyz helps marketers add some heat to their digital marketing. Get a quick and fun roast and light up your funnel. 100% fire guaranteed. 🔥 🙌🏽.';

  const url = `${SITE_URL}/roasts`;

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
