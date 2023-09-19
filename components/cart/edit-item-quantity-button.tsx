import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { removeItem, updateItemQuantity } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import type { CartItem } from 'lib/shopify/types';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function EditItemQuantityButton({
  item,
  type,
}: {
  item: CartItem;
  type: 'plus' | 'minus';
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      aria-label={
        type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'
      }
      onClick={() => {
        startTransition(async () => {
          const error =
            type === 'minus' && item.quantity - 1 === 0
              ? await removeItem(item.id)
              : await updateItemQuantity({
                  lineId: item.id,
                  variantId: item.merchandise.id,
                  quantity:
                    type === 'plus' ? item.quantity + 1 : item.quantity - 1,
                });

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      disabled={isPending}
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-xl px-2 transition-all duration-200 hover:border-border hover:opacity-80',
        {
          'cursor-not-allowed': isPending,
          'ml-auto': type === 'minus',
        },
      )}
    >
      {isPending ? (
        <LoadingDots className="bg-foreground" />
      ) : type === 'plus' ? (
        <PlusIcon className="h-4 w-4 text-muted-foreground" />
      ) : (
        <MinusIcon className="h-4 w-4 text-muted-foreground" />
      )}
    </button>
  );
}
