import Link from 'next/link';
import { FC, ReactElement } from 'react';

import AffiliatesHeroBackground from '@/components/affiliates/affiliates-hero-background';
import { FadeIn, FadeInStagger } from '@/components/fade-in';
import PageIntro from '@/components/page-intro';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const AffiliatesHero: FC = (): ReactElement => {
  return (
    <section>
      <AffiliatesHeroBackground />
      <section>
        <FadeInStagger className="mx-auto max-w-7xl pt-24 text-center sm:pt-40">
          <PageIntro
            eyebrow="Earn up to 50% commission"
            heading="We love affiliates"
            level="h1"
            description="Turn your referrals into fast, fun, and sizzling profits with the And Voila Affiliate Program."
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
      </section>
    </section>
  );
};

export default AffiliatesHero;
