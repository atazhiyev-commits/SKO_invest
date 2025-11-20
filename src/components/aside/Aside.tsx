import type { FC } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Aside: FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx('aside', className)}>
      {children}
    </section>
  );
};

export default Aside;