import { BrowserRouter } from "react-router";

import "./../styles/global.css"
import Header from "../layouts/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;
