import Banks from "./banks";
import BusinessRegistration from "./business-registration";
import Hotels from "./hotels";

import AboutTheRegion from "./About the region";
import InvestorGuide from "./Investor guide";
import InvestmentOpportunities from "./Investment opportunities";
import RegulatoryLegalActs from "./Regulatory legal acts";

export const CatalogContent = [
  { link: "banks", element: Banks },
  {
    link: "hotels",
    element: Hotels,
  },
  {
    link: "business-registration",
    element: BusinessRegistration,
  },
  {
    link: "about-region",
    element: AboutTheRegion,
  },
  {
    link: "investor-guide",
    element: InvestorGuide,
  },
  {
    link: "investment-opportunities",
    element: InvestmentOpportunities,
  },
  {
    link: "regulatory-acts",
    element: RegulatoryLegalActs,
  },
];
