import { Container } from '@/components/container';
import LandingCarousel from '@/components/landing/landing-carousel';
import LandingClients from '@/components/landing/landing-clients';
import Collections from '@/components/landing/landing-collections';
import LandingCommunity from '@/components/landing/landing-community';
import LandingCta from '@/components/landing/landing-cta';
import LandingHero from '@/components/landing/landing-hero';
import LandingHowItWorks from '@/components/landing/landing-how-it-works';
import LandingIdentity from '@/components/landing/landing-identity';
import LandingProgress from '@/components/landing/landing-progress';
import LandingRelief from '@/components/landing/landing-relief';
import LandingSummary from '@/components/landing/landing-summary';

export const metadata = {
  description:
    'RoastMy.xyz helps marketers add some heat to their digital marketing. Get a quick and fun roast and light up your funnel. 100% delight guaranteed. 🔥 🙌🏽.',
  openGraph: {
    type: 'website',
  },
};

export default async function HomePage() {
  return (
    <Container>
      <LandingHero />
      <LandingHowItWorks />
      <LandingClients />
      <LandingSummary />
      <LandingRelief />
      <LandingCarousel />
      <LandingIdentity />
      <Collections />
      <LandingCommunity />
      <LandingProgress />
      <LandingCta />
    </Container>
  );
}
