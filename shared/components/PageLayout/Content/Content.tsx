import { PropsWithChildren } from 'react';

export const Content = (props: PropsWithChildren) => {
  const { children } = props;

  return <div>{children}</div>;
};
