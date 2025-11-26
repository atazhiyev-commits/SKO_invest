import type { FC } from "react";
import clsx from "clsx";
import Container from "@/components/container/Container";
import { CircleOff } from "lucide-react";

import "./errorPage.scss";

interface Props {
  className?: string;
}

const ErrorPage: FC<Props> = ({ className }) => {
  return (
    <section className={clsx("errorPage", className)}>
      <Container>
        <h2 className="title-section">
          4<CircleOff />4
        </h2>
        <p className="desc">Ничего не найдено</p>
      </Container>
    </section>
  );
};

export default ErrorPage;
