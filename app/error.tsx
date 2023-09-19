'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border p-8 md:p-12">
      <h2 className="text-xl font-bold">Whoops, we smoked it!</h2>
      <p className="my-2">
        Looks like we overcooked something in our digital kitchen. No worries,
        these things happen when you&apos;re playing with fire. Give it another
        go, will you?
      </p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-xl bg-muted-foreground p-4 tracking-wide text-foreground hover:opacity-90"
        onClick={() => reset()}
      >
        Try again?
      </button>
    </div>
  );
}
