import Link from 'next/link';
import { FC, ReactElement } from 'react';

import { cn } from '@/lib/utils';

import { FadeIn, FadeInStagger } from '../fade-in';
import PageIntro from '../page-intro';
import { buttonVariants } from '../ui/button';
import AffiliatesHeroBackground from './affiliates-hero-background';

const AffiliatesHero: FC = (): ReactElement => {
  return (
    <section>
      <AffiliatesHeroBackground />
      <div className="px-6 lg:px-8">
        <FadeInStagger className="mx-auto max-w-6xl pt-24 text-center sm:pt-40">
          <PageIntro
            eyebrow="Earn up to 50% commission"
            heading="We love affiliates"
            level="h1"
            description="Turn your referrals into fast, fun, and sizzling profits with the RoastMy.xyz Affiliate Program."
          />
          <FadeIn className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="https://affiliates.roastmy.xyz/register"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'custom', size: 'lg' }))}
              aria-label="Get started as an affiliate of RoastMy.xyz."
            >
              Start earning{' '}
              <span role="img" aria-label="Fire emoji" aria-hidden="true">
                🔥
              </span>
            </Link>
          </FadeIn>
        </FadeInStagger>
      </div>
    </section>
  );
};

export default AffiliatesHero;
