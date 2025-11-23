import { type FC } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string;
}

const RegulatoryLegalActs: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('RegulatoryLegalActs', className)}>
      <h2 className='title-section' >RegulatoryLegalActs</h2>
    </div>
  );
};

export default RegulatoryLegalActs;