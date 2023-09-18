import clsx from 'clsx';
import Link from 'next/link';

type ButtonProps = {
  invert?: boolean;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
);

export function Button({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-lg px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-gray-950 hover:bg-neugray0'
      : 'bg-brand text-gray-50 hover:opacity-70',
  );

  const inner = <span className="relative top-px">{children}</span>;

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  );
}
