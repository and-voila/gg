import Link from 'next/link';
import React from 'react';

import { FadeIn, FadeInStagger } from './fade-in';
import { GradientHeading } from './gradient-headings';

export interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface FaqComponentProps {
  faqs: Faq[];
}

const FaqComponent: React.FC<FaqComponentProps> = ({ faqs }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <FadeIn>
        <GradientHeading level="h2">Frequently Asked Questions</GradientHeading>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground lg:text-lg">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team by{' '}
          <Link
            href="/contact"
            className="font-medium text-brand hover:underline hover:underline-offset-4"
            aria-label="Contact us"
          >
            sending us an email
          </Link>{' '}
          and we’ll get back to you as soon as we can.
        </p>
      </FadeIn>
      <div className="mt-20">
        <FadeInStagger className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          {faqs.map((faq) => (
            <FadeIn key={faq.id}>
              <div className="font-display text-lg text-foreground">
                {faq.question}
              </div>
              <div className="mt-2 text-base text-muted-foreground">
                {faq.answer}
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
};

export default FaqComponent;
