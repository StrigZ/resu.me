import { CV, Theme } from "~/types";

export const defaultCvData: CV = {
  fullName: "Josephine Meyers",
  email: "josephine.meyers@mail.co.uk",
  location: "London, UK",
  phone: "+44 3245 5521 5521",
  education: [
    {
      id: crypto.randomUUID(),
      name: "London City University",
      degreeOrRole: "Bachelors in Economics",
      location: "New York City, US",
      startDate: new Date("12/12/2022"),
      endDate: new Date("12/12/2023"),
    },
    {
      id: crypto.randomUUID(),
      name: "London City University",
      degreeOrRole: "Bachelors in Economics",
      location: "New York City, US",
      startDate: new Date("12/12/2022"),
      endDate: new Date("12/12/2023"),
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
  ],

  experience: [
    {
      id: crypto.randomUUID(),
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
    "header-bg": "#312e81",
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
