import { type FC } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const RegionInfo: FC<Props> = ({ children, className }) => {
  return (
    <>
      <h2>RegionInfo</h2>
      {children}
    </>
  );
};

export default RegionInfo;
