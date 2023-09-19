import Image from 'next/image';
import { FC } from 'react';

import Illustration from '../public/glow-bottom.svg';

interface GradientCircleBackgroundProps {
  placement?: 'top' | 'bottom';
}

const IllustrationSrc: string = Illustration as string;

const GradientCircleBackground: FC<GradientCircleBackgroundProps> = ({
  placement = 'bottom',
}) => {
  const placementClass = placement === 'top' ? 'scale-y-[-1]' : '';

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-b-[3rem] ${placementClass}`}
      aria-hidden="true"
    >
      <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
        <Image
          src={IllustrationSrc}
          className="max-w-none opacity-10"
          width={2146}
          priority
          alt="A circular gradient with a glow effect."
        />
      </div>
    </div>
  );
};

export default GradientCircleBackground;
