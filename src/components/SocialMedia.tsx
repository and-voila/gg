import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  NotionLogoIcon,
  PlayIcon,
} from '@radix-ui/react-icons';
import clsx from 'clsx';
import Link from 'next/link';

function TwitterIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg fill="currentColor" height="1em" viewBox="0 0 512 512" {...props}>
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  );
}

export const socialMediaProfiles = [
  { title: 'Discord', href: '#', icon: DiscordLogoIcon },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rebekahradice/',
    icon: LinkedInLogoIcon,
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/rebekahradice',
    icon: TwitterIcon,
  },
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/c/RebekahradiceLLC/videos',
    icon: PlayIcon,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/and-voila',
    icon: GitHubLogoIcon,
  },
  {
    title: 'Notion',
    href: 'https://www.notion.so/Vision-to-Values-a988526a199c4a09a86f0dd36eb7e1a1',
    icon: NotionLogoIcon,
  },
];

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <ul
      role="list"
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              'transition',
              invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
            )}
          >
            <socialMediaProfile.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
