import type { FC } from 'react';
import clsx from 'clsx';
import FooterUp from './FooterUp';
import FooterBottom from './FooterBottom';

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <section className={clsx('', className)}>
      <FooterUp />
      <FooterBottom />
    </section>
  );
};

export default Footer;