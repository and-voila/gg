import { BackpackIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground transition-colors">
      <BackpackIcon
        className={clsx(
          'h-4 transition-all ease-in-out hover:scale-110 ',
          className,
        )}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 flex h-4 w-4 items-center justify-center rounded bg-foreground text-center text-[11px] font-bold text-background">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
