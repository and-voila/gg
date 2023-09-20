import { HeartIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { FC } from 'react';

import { FadeIn, FadeInStagger } from '../fade-in';
import SectionIntro from '../section-intro';

type Feature = {
  name: string;
  description: string;
};

const features: Feature[] = [
  {
    name: 'Immediate insights',
    description:
      "Lost in the labyrinth of digital marketing? Gain immediate access to mavens who’ve deciphered the enigmas you're facing.",
  },
  {
    name: 'Curated expertise',
    description:
      'Be part of an exclusive circle that values wisdom over chatter. We prioritize quality insights, not post counts.',
  },
  {
    name: 'Metrics that matter',
    description:
      'Quit navigating by the stars. We provide actionable metrics and KPIs that align with your marketing goals, enhancing your ROI and efficiency.',
  },
  {
    name: 'AI deconstructed',
    description:
      'Understand the role of AI in your digital marketing journey. We translate the arcane into advice you can act upon immediately.',
  },
  {
    name: 'Real-time revelations',
    description:
      'Stay ahead with timely digests that distill the latest magical tools, techniques, and paradigm shifts in the digital marketing universe.',
  },
  {
    name: 'Community compassion',
    description:
      'Your marketing challenges find solace here. Post your dilemmas and receive a variety of solutions that can turn your strategies enchanting.',
  },
];

const CommunitySummary: FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <SectionIntro
        eyebrow="Your Network, Amplified"
        heading="Enchanting connections await"
        level="h3"
        as="h2"
        description="And Voila isn't your ordinary Discord server; it's a crucible for digital marketing wizardry. Discover secrets from industry experts, build meaningful connections, and elevate your campaigns to the extraordinary. Join us and transform your marketing into a realm of wonder."
      />
      <FadeIn className="relative overflow-hidden pt-16">
        <Image
          src="/summary.jpg"
          alt="A screenshot of the And Voila community Discord welcome screen, established by Rebekah Radice."
          className="mb-[-12%] rounded-xl shadow-2xl md:grayscale md:hover:grayscale-0"
          width={2432}
          height={1442}
        />
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background pt-[7%]" />
        </div>
      </FadeIn>
      <div className="mt-16 sm:mt-20 md:mt-24">
        <FadeInStagger className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-foreground sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <FadeIn key={feature.name} className="relative pl-9">
              <div className="inline font-display text-base text-foreground lg:text-lg">
                <HeartIcon
                  className="absolute left-1 top-1 h-5 w-5 text-brand"
                  aria-hidden="true"
                />
                {feature.name}
              </div>{' '}
              <div className="inline text-base text-muted-foreground lg:text-lg">
                {feature.description}
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};

export default CommunitySummary;
