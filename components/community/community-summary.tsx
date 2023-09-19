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
    name: 'Blazing-fast networking',
    description:
      "Stuck in the digital marketing maze? Get immediate access to pros who’ve solved the puzzles you're wrestling with.",
  },
  {
    name: 'A melting pot of expertise',
    description:
      'Join a selective community that cuts through the noise. We’re all about quality insights, not quantity of posts.',
  },
  {
    name: 'Metrics that matter',
    description:
      'Quit the guesswork. We provide you with actionable metrics and KPIs that align with your marketing objectives, boosting your ROI and productivity.',
  },
  {
    name: 'AI Unveiled',
    description:
      'Demystify AI’s role in digital marketing. We turn the jargon into actionable advice that you can implement right away.',
  },
  {
    name: 'Blow-by-blow updates',
    description:
      'Stay ahead with real-time digests that distill the latest tools, techniques, and shifts in the digital marketing world.',
  },
  {
    name: 'Love from the community',
    description:
      'Your marketing challenges won’t fester here. Post your issues and get diverse solutions that can make your strategies sizzle.',
  },
];

const CommunitySummary: FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <SectionIntro
        eyebrow="Your Network on Fire"
        heading="Blazing connections, right here"
        level="h3"
        as="h2"
        description="Sizzle Squad isn't just a Discord server—it's a community designed to set your digital marketing game on fire. Benefit from direct access to experts, network with kindred spirits, and keep your strategies red-hot—all year round. Join us and elevate your marketing from a flicker to a flame."
      />

      <FadeIn className="relative overflow-hidden pt-16">
        <Image
          src="/community.jpg"
          alt="A screenshot of the Sizzle Squad community Discord welcome screen, established by Rebekah Radice."
          className="mb-[-12%] rounded-xl shadow-2xl md:grayscale md:hover:grayscale-0"
          width={2432}
          height={1442}
        />
        <div className="relative" aria-hidden="true">
          <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background pt-[7%]" />
        </div>
      </FadeIn>
      <div className="mt-16 sm:mt-20 md:mt-24">
        <FadeInStagger className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
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
