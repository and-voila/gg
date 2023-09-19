import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 512 512"
      {...props}
      className={clsx('h-4 w-4 fill-brand', props.className)}
    >
      <path d="M128.1 313.8c11.5-4 26.3-6.2 44.3-6.7s33.2 1.4 45.2 5.7l-3.5 67.4c-25.3-2.3-44.7-3.2-58.1-2.8-13.5.4-24.2.9-32 1.4l4.1-65zm151.3-2c11.5-4 26.3-6.2 44.3-6.7 18.1-.5 33.2 1.4 45.2 5.7l-3.5 67.4c-25.3-2.3-44.7-3.2-58.1-2.8-13.5.4-24.2.9-32 1.4l4.1-65zm183.2-46.1-.3 50c-14.4-4.3-46.5-13.9-96.2-28.8s-87.4-26.4-113.3-34.6c-79.7-24.5-148.2-49.4-205.5-74.7l19.2-45.8c30.2 15.8 67.3 31.4 111.4 46.8C222 194 276.4 211 341.2 229.8c64.8 18.9 105.2 30.8 121.4 35.9z" />
      <path d="M66 304.5 39.6 262c14.5-4 46.7-13 96.7-27s88.1-24.3 114.3-31.1c80.5-21.7 151.7-37.1 213.8-46.3l8.1 49c-34 2.7-73.7 9.3-119.2 19.7-45.5 10.5-100.6 25-165.4 43.7C123 288.8 82.4 300.3 66 304.5z" />
    </svg>
  );
}