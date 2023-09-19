import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';

import { GradientHeading } from '../gradient-headings';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b border-border pb-6">
        <div className="mb-6">
          <GradientHeading level="h4" as="h1">
            {product.title}
          </GradientHeading>
        </div>
        <div className="mr-auto w-auto rounded-xl bg-muted-foreground p-2 text-sm font-medium text-primary-foreground md:px-4 md:py-2">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose className="mb-6" html={product.descriptionHtml} />
      ) : null}

      <AddToCart
        variants={product.variants}
        availableForSale={product.availableForSale}
      />
    </>
  );
}
