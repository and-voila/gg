import { PlusIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

import { FadeIn, FadeInStagger } from '../fade-in';
import SectionIntro from '../section-intro';

interface Feature {
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    name: 'Founding membership',
    description:
      'Secure your place among the first 500 to enter this exclusive community. Be a pathfinder in a world tailored to solve your marketing enigmas.',
  },
  {
    name: 'Fixed membership rate',
    description:
      'Take advantage of our early bird rate at $7.99/month, shielded from future price hikes. It’s your lifetime ticket to value.',
  },
  {
    name: 'Unique Discord perks',
    description:
      'Stand out with special badges and roles in our Discord server. Think of it as your VIP pass to digital recognition.',
  },
  {
    name: 'Insider influence',
    description:
      'Participate in the growth of AndVoila.gg. Your ideas and feedback will help shape the community’s destiny.',
  },
  {
    name: 'First-to-know privileges',
    description:
      'Receive exclusive invites to launch events and masterclasses. Be in the know before the crowd.',
  },
  {
    name: 'Behind-the-scenes glimpses',
    description:
      'Get an unfiltered view of our journey, including the inevitable hiccups. We make the mistakes so you don’t have to.',
  },
  {
    name: 'Active role in community growth',
    description:
      'Your insights will contribute directly to our evolving feature set and community offerings.',
  },
  {
    name: 'Beta access',
    description:
      'Test new tools and features before they hit the mainstream. Your feedback will refine our innovations.',
  },
  {
    name: 'Resource advantage',
    description:
      'Begin your journey with a curated selection of premium marketing resources. A leg up, the magical way.',
  },
];

const CommunityEarlyAccess: FC = () => {
  return (
    <div className="mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <SectionIntro
          eyebrow="Exclusive Benefits"
          heading="Get early access"
          level="h4"
          as="h2"
          description="You'll get a full range of exclusive perks. From first dibs on new features to member-only masterclasses and a dash of behind-the-scenes hilarity."
        />
        <FadeInStagger className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base text-muted-foreground sm:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-9">
              <div className="font-display text-lg text-foreground">
                <PlusIcon
                  className="absolute left-0 top-1 h-5 w-5 text-brand/70"
                  aria-hidden="true"
                />
                {feature.name}
              </div>
              <div className="mt-2">{feature.description}</div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
};

export default CommunityEarlyAccess;
