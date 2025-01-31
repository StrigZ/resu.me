import { CV, Theme } from "~/types";

export const defaultCvData: CV = {
  fullName: "Josephine Meyers",
  email: "josephine.meyers@mail.co.uk",
  location: "London, UK",
  phone: "+44 3245 5521 5521",
  qualifications: [
    {
      id: crypto.randomUUID(),
      type: "education",
      name: "London City University",
      degreeOrRole: "Bachelors in Economics",
      location: "New York City, US",
      startDate: new Date("12/12/2022"),
      endDate: new Date("12/12/2023"),
    },
    {
      id: crypto.randomUUID(),
      type: "education",
      name: "London City University",
      degreeOrRole: "Bachelors in Economics",
      location: "New York City, US",
      startDate: new Date("12/12/2022"),
      endDate: new Date("12/12/2023"),
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    {
      id: crypto.randomUUID(),
      type: "experience",
      name: "Black Mesa Labs",
      degreeOrRole: "UX Research Assistant",
      location: "Berlin, Germany",
      startDate: new Date("12/12/2022"),
      endDate: new Date("12/12/2023"),
      description:
        "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
    },
    {
      id: crypto.randomUUID(),
      type: "experience",
      name: "Black Mesa Labs",
      degreeOrRole: "UX Research Assistant",
      location: "Berlin, Germany",
      startDate: new Date("12/12/2022"),
      endDate: new Date("12/12/2023"),
      description:
        "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
    },
  ],
};

export const defaultTheme: Theme = {
  layout: "top",
  colors: {
    "header-bg": "#EB5E55",
    "header-text": "#fff",
    "body-bg": "#fff",
    "body-text": "#000",
    "separators-bg": "#f3f4f6",
  },
  fonts: {
    headings: "sans-serif",
    text: "sans-serif",
  },
};
