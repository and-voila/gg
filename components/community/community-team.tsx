import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { FC } from 'react';

import { FadeIn, FadeInStagger } from '../fade-in';
import { GradientHeading } from '../gradient-headings';

interface Person {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

const people: Person[] = [
  {
    name: 'Ambreen Dar',
    role: 'Co-Founder / Design',
    imageUrl: '/images/team/ambreen-dar.png',
    bio: 'From academia to industry, my passion for design has guided me through the intricacies of digital marketing. As a co-founder of BRIL.LA, I focus on harmonizing creative design with strategic goals. Also, a dedicated dog mom.',
    twitterUrl: 'https://twitter.com/breenzy',
    linkedinUrl: 'https://www.linkedin.com/in/ambreen-dar-b3bb006/',
  },
  {
    name: 'Rebekah Radice',
    role: 'Co-Founder / Sales & Marketing',
    imageUrl: '/images/team/rebekah-radice-hair.png',
    bio: "With two decades in global branding, I've honed a knack for turning insights into action. At BRIL.LA, I leverage this experience to provide you with strategies that matter. Off the clock, I enjoy honing my culinary skills with Italian cuisine.",
    twitterUrl: 'https://twitter.com/RebekahRadice',
    linkedinUrl: 'https://www.linkedin.com/in/rebekahradice/',
  },
  {
    name: 'Sam Rizvi',
    role: 'Consulting Technologist',
    imageUrl: '/images/team/sam-rizvi.png',
    bio: 'After 25 years in consulting and tech, I opted for retirement. Then my wife Ambreen and our bestie Rebekah roped me back in. I specialize in bringing your imagination to life. Big on beer, basketball, tacos, and my dogs.',
    twitterUrl: 'https://twitter.com/izvirs',
    linkedinUrl: 'https://www.linkedin.com/in/rizvio/',
  },
];

const CommunityTeam: FC = () => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-20 px-6 py-24 md:py-32 lg:px-8 xl:grid-cols-5">
      <FadeIn className="max-w-2xl xl:col-span-2">
        <GradientHeading level="h3" as="h2">
          The Alchemists
        </GradientHeading>
        <p className="mt-6 text-base text-muted-foreground lg:max-w-sm lg:text-lg">
          We&apos;re more than just a team, we&apos;re your catalysts in the
          complex world of digital marketing. Leveraging years of hands-on
          experience, we provide actionable insights to empower your strategies.
          Ready for a transformative marketing journey?
        </p>
      </FadeIn>
      <FadeInStagger className="-mt-6 space-y-12 divide-y divide-brand/70 xl:col-span-3">
        {people.map((person) => (
          <FadeIn
            key={person.name}
            className="flex flex-col gap-10 pt-12 sm:flex-row"
          >
            <Image
              className="aspect-[4/5] w-52 flex-none rounded-2xl border bg-primary-foreground object-contain md:grayscale md:hover:grayscale-0"
              src={person.imageUrl}
              alt=""
              width={208}
              height={260}
            />
            <div className="max-w-xl flex-auto">
              <GradientHeading level="h5" as="h3">
                {person.name}
              </GradientHeading>
              <p className="text-base text-muted-foreground">{person.role}</p>
              <p className="mt-6 text-base text-muted-foreground">
                {person.bio}
              </p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-muted-foreground transition duration-200 hover:text-foreground"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-muted-foreground transition duration-200 hover:text-foreground"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <LinkedInLogoIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </div>
  );
};

export default CommunityTeam;
