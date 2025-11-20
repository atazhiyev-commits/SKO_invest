import type { FC } from "react";
import clsx from "clsx";
import { Container } from "lucide-react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Catalog: FC<Props> = ({ children, className }) => {
  return (
    <section className={clsx("catalog", className)}>
      <Container>
        <h2 className="title-section">Catalog</h2>
        {children}
      </Container>
    </section>
  );
};

export default Catalog;
