import {
  ArrowRightIcon,
  DiscordLogoIcon,
  RocketIcon,
  StarIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import React, { FC } from 'react';

import { FadeIn } from '../fade-in';
import Highlighter, { HighlighterItem } from '../landing/highlighter';
import SectionIntro from '../section-intro';

interface Reason {
  name: string;
  description: string;
  href: string;
  icon: JSX.Element;
  cta: string;
}

const reasons: Reason[] = [
  {
    name: 'Access to top experts',
    description:
      'Unlock personalized Q/A sessions, weekly masterclasses, and 1:1 consultations with industry titans like Rebekah Radice.',
    href: '/',
    icon: <StarIcon className="h-8 w-8" />,
    cta: 'Unlock now',
  },
  {
    name: 'Rocket fuel for results',
    description:
      'Supercharge your SEO, social media, and overall marketing campaigns with our exclusive arsenal of tools and insights.',
    href: '/',
    icon: <RocketIcon className="h-8 w-8" />,
    cta: 'Get results',
  },
  {
    name: 'Join a hot community',
    description:
      'Get feedback, share wins, or even find your next gig. Collaborate, network, and grow with marketers as fired-up as you.',
    href: '/',
    icon: <DiscordLogoIcon className="h-8 w-8" />,
    cta: 'Join now',
  },
];

const CommunityIntro: FC = () => {
  return (
    <section className="py-24 sm:py-32">
      <FadeIn>
        <Highlighter>
          <div className="group">
            <HighlighterItem>
              <FadeIn className="relative z-20 mx-auto overflow-hidden rounded-[inherit] bg-primary-foreground p-6 lg:p-12">
                <SectionIntro
                  eyebrow="Premier Marketing Community"
                  heading="Your pathway to excellence"
                  description="Ignite your marketing potential with the Sizzle Squad, the hottest digital marketing Discord server out there. Created by Rebekah Radice, we offer instant access to premium marketing resources. We're here to turn your marketing strategies into blazing successes. 🔥"
                />
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {reasons.map((reason) => (
                      <div key={reason.name} className="flex flex-col">
                        <dt className="font-display text-xl text-foreground">
                          <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-background p-2 text-brand">
                            {React.cloneElement(reason.icon, {
                              'aria-hidden': 'true',
                            })}
                          </div>
                          {reason.name}
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground lg:text-lg">
                          <p className="flex-auto">{reason.description}</p>
                          <div className="mt-6 flex items-center justify-end">
                            <Link
                              href={reason.href}
                              aria-label={`Click to ${reason.cta}`}
                              className="group mt-4 flex items-center text-base font-medium text-foreground transition duration-150 ease-in-out hover:text-muted-foreground"
                            >
                              {reason.cta}{' '}
                              <p className="ml-2 text-brand transition-transform duration-150 ease-in-out group-hover:translate-x-0.5 dark:text-brand">
                                <ArrowRightIcon aria-hidden="true" />
                              </p>
                            </Link>
                          </div>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </FadeIn>
            </HighlighterItem>
          </div>
        </Highlighter>
      </FadeIn>
    </section>
  );
};

export default CommunityIntro;
