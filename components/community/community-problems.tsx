import { LightningBoltIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

import { FadeIn, FadeInStagger } from '../fade-in';
import SectionIntro from '../section-intro';

interface Problem {
  title: string;
  description: string;
}

const problems: Problem[] = [
  {
    title: 'AI, unveiled',
    description:
      'Confused about how AI can fuel your marketing strategy? We break it down into scorching, actionable advice.',
  },
  {
    title: 'Sift through the smoke',
    description:
      'Overwhelmed by digital marketing trends? We filter through the smoke and haze, delivering blazing insights directly to you.',
  },
  {
    title: 'Evergreen learning',
    description:
      'Feel like your courses are going up in smoke? Our community offers continuous learning, adapting as the industry evolves.',
  },
  {
    title: 'Community ignition',
    description:
      'Need more than a blog post to fan your marketing flames? Get smoldering solutions from industry experts and peers.',
  },
  {
    title: 'Real-time embers',
    description:
      "Don't get left in the ashes. Stay ahead with real-time updates on tools, techniques, and industry shifts that matter.",
  },
  {
    title: 'Ignite productivity',
    description:
      'Caught in the marketing underbrush? We offer focused strategies to streamline your workflow and maximize your impact.',
  },
  {
    title: 'ROI, on fire',
    description:
      'Struggling to prove your marketing heat? We help you align your activities with business objectives for measurable ROI.',
  },
  {
    title: 'Unshakable confidence',
    description:
      'Feeling like a flickering candle? We arm you with the skills and support to execute with the confidence of a roaring blaze.',
  },
  {
    title: 'Career combustion',
    description:
      'Hit a career plateau? We provide the heat and connections to elevate your professional status.',
  },
];

const CommunityProblems: FC = () => {
  return (
    <div className="mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <SectionIntro
        eyebrow="Ready for a Reset?"
        heading="Ignite your marketing game"
        description="Feeling scorched by outdated tactics and lukewarm results? Let's fan the flames. We're the catalyst you've been seeking in a sea of digital marketing noise."
      />

      <FadeInStagger className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {problems.map((problem) => (
            <FadeIn
              key={problem.title}
              className="flex flex-col rounded-lg bg-primary-foreground p-6"
            >
              <div className="font-display text-base text-foreground lg:text-lg">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded bg-background">
                  <LightningBoltIcon
                    className="h-6 w-6 text-brand"
                    aria-hidden="true"
                  />
                </div>
                {problem.title}
              </div>
              <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">{problem.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </div>
  );
};

export default CommunityProblems;
