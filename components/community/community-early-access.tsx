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
    name: 'Limited club membership',
    description:
      "Be among the first 500 members with Early Access. More than just a number, you're a pioneer in a community that caters to your specific marketing challenges.",
  },
  {
    name: 'Price lock guarantee',
    description:
      'Lock in your membership at an unbeatable $7.99/month. In an industry where prices can skyrocket overnight, think of this as your forever rate.',
  },
  {
    name: 'Discord VIP status',
    description:
      "Gain instant recognition with exclusive badges, emojis, and roles on our Discord server. It's the digital red carpet, and you're on it.",
  },
  {
    name: 'Squad development insider',
    description:
      "Witness and influence the evolution of Sizzle Squad. You're not just a member; you're a co-creator.",
  },
  {
    name: 'Early access to knowledge',
    description:
      "Get invites to launch-only events, webinars, and masterclasses. When we know, you'll know—first.",
  },
  {
    name: 'Behind-the-scenes & bloopers',
    description:
      "We'll pull back the curtain on our journey, including the comedic missteps along the way. We laugh, you learn.",
  },
  {
    name: 'Direct impact on features',
    description:
      'Your voice is amplified. Your feedback will shape the future of our community and its offerings.',
  },
  {
    name: 'Beta tester privileges',
    description:
      'Before any tool or feature goes public, you’ll be our trusted tester. It’s VIP access to what’s next in digital marketing.',
  },
  {
    name: 'Exclusive access to resources',
    description:
      "Start strong with our premium marketing templates and swipe files. It's like a head start, but better.",
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
          description="You'll get a full buffet of exclusive perks, from first dibs on new features to member-only masterclasses and a dash of behind-the-scenes hilarity."
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
