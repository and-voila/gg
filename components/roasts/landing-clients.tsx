import { FadeIn, FadeInStagger } from '../fade-in';
import SectionIntro from '../section-intro';
import AdobeLogo from './clients/adobe-logo';
import AirbnbLogo from './clients/airbnb-logo';
import AmazonLogo from './clients/amazon-logo';
import AnimotoLogo from './clients/animoto-logo';
import BetterHomesLogo from './clients/better-homes-logo';
import CanvaLogo from './clients/canva-logo';
import FacebookLogo from './clients/facebook-logo';
import HootsuiteLogo from './clients/hootsuite-logo';
import MotorolaLogo from './clients/motorola-logo';
import Highlighter, { HighlighterItem } from './highlighter';

const clientLogos = [
  { Logo: AdobeLogo, ariaLabel: 'Adobe' },
  { Logo: AirbnbLogo, ariaLabel: 'Airbnb' },
  { Logo: AmazonLogo, ariaLabel: 'Amazon' },
  { Logo: AnimotoLogo, ariaLabel: 'Animoto' },
  { Logo: BetterHomesLogo, ariaLabel: 'Better Homes' },
  { Logo: CanvaLogo, ariaLabel: 'Canva' },
  { Logo: FacebookLogo, ariaLabel: 'Facebook' },
  { Logo: HootsuiteLogo, ariaLabel: 'Hootsuite' },
  { Logo: MotorolaLogo, ariaLabel: 'Motorola' },
];

const LandingClients = () => {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <SectionIntro
        centered={true}
        eyebrow="Battle-tested roasts"
        heading="Grilled by the best"
        level="h2"
        description="We've been roasted harder than chestnuts on an open fire by industry heavyweights. Now we're passing our battle-tested
            insights to you. Get marketing advice that can take the heat."
      />
      <Highlighter className="group mt-10 grid grid-cols-1 gap-2 overflow-hidden sm:mx-0 md:grid-cols-3">
        {clientLogos.map(({ Logo, ariaLabel }, index) => (
          <FadeInStagger key={index}>
            <FadeIn>
              <HighlighterItem>
                <div className="relative z-20 overflow-hidden rounded-[inherit] bg-primary-foreground p-8 sm:p-10">
                  <Logo
                    className="mx-auto"
                    aria-label={`A logo for ${ariaLabel}, a former client of Rebekah Radice and or the BRIL.LA team.`}
                  />
                </div>
              </HighlighterItem>
            </FadeIn>
          </FadeInStagger>
        ))}
      </Highlighter>
    </section>
  );
};

export default LandingClients;
