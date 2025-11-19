import { BrowserRouter } from "react-router";
import i18n from "../shared/config/i18n/i18n";

import Layouts from "./../layouts";

import "./../styles/global.css"

const App = () => {

  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
};

export default App;
