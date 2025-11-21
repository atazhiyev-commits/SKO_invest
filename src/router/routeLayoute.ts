import Layouts from "../layouts";
import Catalog from "../layouts/catalog";

export const routeList = [
  {
    path: "/:lang",
    element: Layouts,
  },
//   {
//     path: "/news",
//   },
//   {
//     path: "/faq",
//   },
  {
    path: "/:lang/catalog",
    element: Catalog,
  },
];
