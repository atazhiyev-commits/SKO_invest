import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router";
import { useA11yStore } from "./a11";
import i18n from "../shared/config/i18n/i18n";

import Layouts from "./../layouts";

import Header from "../layouts/header";
import Footer from "../layouts/footer";

import "./../styles/app.css";
import Catalog from "../layouts/catalog";
import { routeList } from "../router/routeLayoute";

const App = () => {
  const a11yMode = useA11yStore((s: any) => s.a11yMode);
  const initA11y = useA11yStore((s: any) => s.initA11y);

  useEffect(() => {
    initA11y();
  }, []);

  useEffect(() => {
    if (a11yMode) document.body.classList.add("a11y-mode");
    else document.body.classList.remove("a11y-mode");
  }, [a11yMode]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/ru" replace />} />
            {routeList.map((route: any, index: number) => (
              <Route key={index} path={route.path} Component={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
