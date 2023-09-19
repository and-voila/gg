import { Metadata } from 'next';

import AffiliatesHero from '@/components/affiliates/affilates-hero';
import AffiliatesBenefits from '@/components/affiliates/affiliates-benefits';
import AffiliatesContent from '@/components/affiliates/affiliates-content';
import AffiliatesFeatures from '@/components/affiliates/affiliates-features';
import { Container } from '@/components/container';
import { SITE_URL } from '@/lib/utils';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
  const title = 'RoastMy.xyz Affiliate Program';
  const description =
    'Earn up to 50% commission on your first referral and up to 40% for lifetime. RoastMy.xyz is the hottest affiliate program on the web with 120 day cookies.';

  const url = `${SITE_URL}/affiliates`;

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

export default async function AffiliatesPage() {
  return (
    <Container>
      <AffiliatesHero />
      <AffiliatesContent />
      <AffiliatesBenefits />
      <AffiliatesFeatures />
    </Container>
  );
}
