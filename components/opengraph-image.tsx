import { ImageResponse } from 'next/server';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(
  props?: Props,
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex items-center justify-center bg-black">
        <p tw="text-6xl font-medium text-gray-50">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
