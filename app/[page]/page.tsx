import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SITE_URL } from '@/lib/utils';

export const runtime = 'edge';

export const revalidate = 43200;

export async function generateMetadata({
  params,
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = await getPage(params.page);

  if (!page) return notFound();

  const title = page.seo?.title || page.title;
  const description = page.seo?.description || page.bodySummary;
  const url = `${SITE_URL}/${params.page}`;

  return {
    title: title,
    description: description,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article',
      title: title,
      description: description,
      url,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'A GIF with a flickering hot flame and the RoastMy.xyz logomark.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [
        {
          url: '/open-graph.gif',
          width: 1200,
          height: 630,
          alt: 'A GIF with a flickering hot flame and the RoastMy.xyz logomark.',
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-8" html={page.body as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(
          undefined,
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
        ).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
