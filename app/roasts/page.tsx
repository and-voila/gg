import { Container } from '@/components/container';
import LandingCarousel from '@/components/roasts/landing-carousel';
import LandingClients from '@/components/roasts/landing-clients';
import Collections from '@/components/roasts/landing-collections';
import LandingCommunity from '@/components/roasts/landing-community';
import LandingCta from '@/components/roasts/landing-cta';
import LandingHero from '@/components/roasts/landing-hero';
import LandingHowItWorks from '@/components/roasts/landing-how-it-works';
import LandingIdentity from '@/components/roasts/landing-identity';
import LandingProgress from '@/components/roasts/landing-progress';
import LandingRelief from '@/components/roasts/landing-relief';
import LandingSummary from '@/components/roasts/landing-summary';

export const metadata = {
  description:
    'We help marketers add some heat to their digital marketing. Get a quick, fun, and scorchingly good roast to light up your funnel. No fluff, just heat. 🔥 🙌🏽.',
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
