import { Container } from '@/components/container';
import LandingCarousel from '@/components/roasts/roasts-carousel';
import LandingClients from '@/components/roasts/roasts-clients';
import Collections from '@/components/roasts/roasts-collections';
import LandingCommunity from '@/components/roasts/roasts-community';
import LandingCta from '@/components/roasts/roasts-cta';
import LandingHero from '@/components/roasts/roasts-hero';
import LandingHowItWorks from '@/components/roasts/roasts-how-it-works';
import LandingIdentity from '@/components/roasts/roasts-identity';
import LandingProgress from '@/components/roasts/roasts-progress';
import LandingRelief from '@/components/roasts/roasts-relief';
import LandingSummary from '@/components/roasts/roasts-summary';

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
