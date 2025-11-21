import Header from "./header";
import Hero from "./hero";
import News from "./news";

import Helper from "./helpers";
import FAQ from "../sections/faq";
import Defense from "../sections/defense";
import Footer from "./footer";

import "./layouts.scss";
import Catalog from "./catalog";

const Layouts = () => {
  return (
    <div className="layouts">
      <Header />
      <main className="main">
        <Hero />
        <News />
        <Helper />
        <FAQ />
        <Defense />

        {/* <Catalog /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Layouts;
