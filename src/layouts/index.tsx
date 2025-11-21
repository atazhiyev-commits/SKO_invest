import Header from "./header";
import Hero from "./hero";
import News from "./news";

import Helper from "./helpers";
import FAQ from "../sections/faq";
import Defense from "../sections/defense";
import Footer from "./footer";
import Catalog from "./catalog";

import "./layouts.scss";

const Layouts = () => {
  return (
    <div className="layouts">
      <main className="main">
        <Hero />
        <News />
        <Helper />
        <FAQ />
        <Defense />

        <Catalog />
      </main>
    </div>
  );
};

export default Layouts;
