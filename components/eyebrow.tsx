import { FC } from 'react';

type EyebrowProps = {
  text: string;
};

const Eyebrow: FC<EyebrowProps> = ({ text }) => {
  return (
    <div>
      <p className="font-display text-sm uppercase tracking-widest  text-brand">
        {text}
      </p>
    </div>
  );
};

export default Eyebrow;
