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
    title: 'AI unveiled',
    description:
      'Uncertain about using AI in your marketing strategy? We demystify it with clear, actionable guidance.',
  },
  {
    title: 'Real-time updates',
    description:
      'Stay ahead with timely insights on tools, techniques, and pivotal industry shifts.',
  },
  {
    title: 'ROI alignment',
    description:
      'Struggling to quantify your marketing value? We help you align your actions with measurable business goals.',
  },
  {
    title: 'Evergreen learning',
    description:
      'Feel like your skills are stagnating? Our community offers adaptive, continuous learning.',
  },
  {
    title: 'Sifting through noise',
    description:
      'Bombarded by marketing trends? We distill the essence, delivering insights you can act upon.',
  },
  {
    title: 'Community support',
    description:
      'Need more than articles? Get holistic solutions from industry experts and peers.',
  },
  {
    title: 'Streamlined productivity',
    description:
      'Lost in task management? We offer focused strategies to optimize your workflow.',
  },
  {
    title: 'Building confidence',
    description:
      'Second-guessing your decisions? Gain the skills and support to act decisively.',
  },
  {
    title: 'Career advancement',
    description:
      'Stuck in your career? We provide connections and insights to elevate your professional standing.',
  },
];

const CommunityProblems: FC = () => {
  return (
    <div className="mx-auto py-24 sm:py-32">
      <SectionIntro
        eyebrow="Time for Transformation?"
        heading="Elevate Your Marketing Game"
        description="Feeling lost in the maze of outdated tactics and mediocre results? We're the guiding light in the labyrinth of digital marketing."
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
