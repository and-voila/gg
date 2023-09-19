import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { cn } from '@/lib/utils';

import { FadeIn, FadeInStagger } from '../fade-in';
import { GradientHeading } from '../gradient-headings';
import { buttonVariants } from '../ui/button';

const CommunityLargeCta: FC = () => {
  return (
    <div className="overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <FadeIn className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <GradientHeading level="h3" as="h2">
              Get some heat, now
            </GradientHeading>
            <p className="mt-6 text-lg text-muted-foreground">
              Ever felt like you&apos;re just fanning the flames of mediocrity?
              Feel like your marketing strategies are more smoke than fire? The
              clock&apos;s ticking, and there&apos;s no room for lukewarm
              efforts.
            </p>
            <p className="mt-6 text-base text-muted-foreground">
              We&apos;re the spark your strategies need, with actionable advice
              and a community that&apos;s got your back. No more floundering in
              the dark. Ignite your marketing game today—click below to bring
              your marketing strategies to a boiling point.
            </p>

            <div className="mt-10 flex">
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: 'custom', size: 'lg' }),
                )}
                aria-label="Join the Sizzle Squad premium Discord server for digital marketing professionals"
              >
                Join the squad{' '}
                <span role="img" aria-label="Fire emoji" aria-hidden="true">
                  🔥
                </span>
              </Link>
            </div>
          </FadeIn>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <FadeIn className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                width={1152}
                height={842}
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover md:grayscale md:hover:grayscale-0"
              />
            </FadeIn>
            <FadeInStagger className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <FadeIn className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  width={1152}
                  height={842}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover md:grayscale md:hover:grayscale-0"
                />
              </FadeIn>
              <FadeIn className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                  width={1152}
                  height={842}
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover md:grayscale md:hover:grayscale-0"
                />
              </FadeIn>
              <FadeIn className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  width={1152}
                  height={842}
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover md:grayscale md:hover:grayscale-0"
                />
              </FadeIn>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityLargeCta;
