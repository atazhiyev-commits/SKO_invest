import clsx from "clsx";
import { type FC } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const BusinessRegistration: FC<Props> = ({ children, className }) => {
  return (
    <>
      <h2 className={clsx("BusinessRegistration", className)}>
        Регистрация и бизнес
      </h2>
    </>
  );
};

export default BusinessRegistration;
