import { Metadata } from 'next';

import Community from '@/components/community/community';
import CommunityEarlyAccess from '@/components/community/community-early-access';
import { communityFaqs } from '@/components/community/community-faq-data';
import CommunityHero from '@/components/community/community-hero';
import CommunityIntro from '@/components/community/community-intro';
import CommunityLargeCta from '@/components/community/community-large-cta';
import CommunityProblems from '@/components/community/community-problems';
import CommunitySummary from '@/components/community/community-summary';
import CommunityTeam from '@/components/community/community-team';
import { Container } from '@/components/container';
import FaqComponent from '@/components/faq';
import { SITE_URL } from '@/lib/utils';

export function generateMetadata(): Metadata {
  const title = 'Sizzle Squad Discord';
  const description =
    'Join the best digital marketing Discord server for professionals. The Sizzle Squad was created by Rebekah Radice to fire up your marketing performance. 🔥';

  const url = `${SITE_URL}/community`;

  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: '/open-graph.jpg',
          width: 1200,
          height: 630,
          alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
        },
      ],
      url,
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: '/open-graph.jpg',
          width: 1200,
          height: 630,
          alt: 'An open graph image that appears to look like a Loading screen with the And Voila logo.',
        },
      ],
    },
  };

  return metadata;
}

export default async function CommunityPage() {
  return (
    <div>
      <CommunityHero />
      <Container>
        <CommunityIntro />
        <CommunityTeam />
        <CommunityProblems />
        <CommunityLargeCta />
        <CommunitySummary />
        <CommunityEarlyAccess />
        <Community />
        <FaqComponent faqs={communityFaqs} />
      </Container>
    </div>
  );
}
