import clsx from 'clsx';

function Office({
  name,
  children,
  invert = false,
}: {
  name: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-gray-200' : 'text-muted-foreground',
      )}
    >
      <strong className={invert ? 'text-gray-50' : 'text-foreground'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Los Angeles" invert={invert}>
          And Voila AI, Inc.
          <br />
          1370 N. St. Andrews Place
          <br />
          Los Angeles, CA 90028
        </Office>
      </li>
      <li>
        <Office name="London" invert={invert}>
          And Voila CIC
          <br />
          Incorporating Soon
        </Office>
      </li>
    </ul>
  );
}
