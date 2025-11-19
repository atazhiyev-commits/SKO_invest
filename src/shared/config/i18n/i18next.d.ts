import "i18next";
import type { Resources } from "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
