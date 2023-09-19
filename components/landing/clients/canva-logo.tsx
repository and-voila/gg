import clsx from 'clsx';

const CanvaLogo = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Canva logo"
      viewBox="0 0 228.93 96"
      {...props}
      className={clsx('h-16 w-40 fill-muted-foreground', props.className)}
    >
      <path d="M144 36.5c-.2 0-.5.2-.6.5-1.4 4.1-3.4 6.5-4.9 6.5-.9 0-1.3-1-1.3-2.6 0-4 2.4-12.4 3.6-16.3.1-.5.2-.9.2-1.2 0-1.1-.6-1.7-2.1-1.7-1.6 0-3.4.6-5.1 3.6-.6-2.6-2.4-3.8-4.9-3.8-2.9 0-5.7 1.9-8 4.9s-5 4-7 3.5c1.5-3.6 2-6.2 2-8.2 0-3.1-1.5-5-4-5-3.8 0-6 3.6-6 7.4 0 2.9 1.3 5.9 4.3 7.4-2.4 5.5-6 10.5-7.4 10.5-1.8 0-2.3-8.6-2.2-14.7.1-3.5.4-3.7.4-4.8 0-.6-.4-1-2-1-3.7 0-4.9 3.1-5 6.8-.1 1.4-.3 2.7-.6 4.1-1.6 5.5-4.8 9.7-6.8 9.7-1 0-1.2-1-1.2-2.2 0-4 2.2-9 2.2-13.2 0-3.1-1.4-5.1-4-5.1-3 0-7.1 3.6-10.9 10.4 1.3-5.2 1.8-10.2-1.9-10.2-.8 0-1.6.2-2.3.6-.5.2-.8.7-.8 1.3.4 5.5-4.5 19.7-9 19.7-.8 0-1.2-.9-1.2-2.3 0-4 2.4-12.4 3.6-16.3.2-.5.2-.9.2-1.3 0-1.1-.7-1.6-2.1-1.6-1.6 0-3.4.6-5.1 3.6-.6-2.6-2.4-3.8-4.9-3.8-4.1 0-8.7 4.3-10.7 10-2.7 7.5-8.1 14.8-15.4 14.8C16.5 46.5 13 41 13 32.3c0-12.6 9.2-22.9 16.1-22.9 3.3 0 4.8 2.1 4.8 5.3 0 3.9-2.2 5.7-2.2 7.2 0 .5.4.9 1.1.9 3 0 6.5-3.5 6.5-8.3S35.4 6 28.6 6C17.3 6 5.9 17.4 5.9 32c0 11.6 5.7 18.6 15.6 18.6 6.8 0 12.7-5.3 15.9-11.4.4 5.1 2.7 7.7 6.2 7.7 3.1 0 5.7-1.9 7.6-5.1.7 3.4 2.7 5.1 5.3 5.1 2.9 0 5.4-1.9 7.7-5.3 0 2.7.6 5.3 2.9 5.3 1.1 0 2.4-.3 2.7-1.2C72.3 35.4 78.4 27 80.3 27c.6 0 .7.5.7 1.2 0 2.8-2 8.5-2 12.2 0 3.9 1.7 6.6 5.1 6.6 3.8 0 7.7-4.7 10.3-11.6.8 6.4 2.6 11.6 5.3 11.6 3.4 0 9.4-7.1 13-14.6 1.4.2 3.6.1 5.6-1.3-.9 2.2-1.4 4.6-1.4 7.1 0 7 3.3 9 6.2 9 3.1 0 5.7-1.9 7.6-5.1.6 3 2.3 5.1 5.3 5.1 4.7 0 8.8-4.8 8.8-8.8.2-1.3-.3-1.9-.8-1.9zm-97.6 6.6c-1.9 0-2.6-1.9-2.6-4.8 0-5 3.4-13.2 7-13.2 1.6 0 2.2 1.8 2.2 4.1-.1 5-3.3 13.9-6.6 13.9zm65.1-14.8c-1.1-1.3-1.5-3.2-1.5-4.8 0-2 .7-3.7 1.6-3.7s1.2.9 1.2 2.1c-.1 2-.8 4.9-1.3 6.4zm14.7 14.8c-1.9 0-2.6-2.2-2.6-4.8 0-4.8 3.4-13.2 7-13.2 1.6 0 2.1 1.8 2.1 4.1 0 5-3.2 13.9-6.5 13.9z" />
    </svg>
  );
};

export default CanvaLogo;