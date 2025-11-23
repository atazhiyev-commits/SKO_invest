import clsx from 'clsx';
import { type FC } from 'react';

interface Props {
  className?: string;
}

const Banks: FC<Props> = ({ className }) => {
  return (
    <>
    <h2 className={clsx("catalog__banks", className)}>Banks</h2>
    </>
  );
};

export default Banks;