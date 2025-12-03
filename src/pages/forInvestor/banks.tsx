import clsx from "clsx";
import { type FC } from "react";
import Markdown from "react-markdown";
import textMD from "./../MD.md?raw";
import { Landmark } from "lucide-react";

import "./forinvestor.scss"

interface Props {
  className?: string;
}

const Banks: FC<Props> = ({ className }) => {
  return (
    <div className="bank-page">
      <h2 className={clsx("bank-page__title", className)}>Banks</h2>
      <Landmark size={"256"} style={{ marginBlock: "36px" }} />
      <div className="bank-page__content">
        <Markdown>{textMD}</Markdown>
      </div>
    </div>
  );
};

export default Banks;
