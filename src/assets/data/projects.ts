export interface IProjects {
  title: string;
  desc: string;
  images: string[];
  techStacks: { title: string; img: string }[];
  btns: { githubUrl: string; liveUrl: string };
}

import {
  nextjs,
  redux,
  css,
  tailwind,
  nodejs,
  express,
  postgresql,
  html,
  js,
} from "@/components/skillsImports";

export const projects: IProjects[] = [
  {
    title: "Card Insider Lounges",
    desc: "Clone of a well-known website that let users to create, send andanalyze sophisticated survey template.",
    images: [
      "https://github.com/ShrikantJawla/portfolio_images/blob/main/projects/lounges/lounges.png?raw=true",
    ],
    techStacks: [
      {
        title: "NextJS",
        img: nextjs,
      },
      {
        title: "Redux",
        img: redux,
      },
      {
        title: "CSS",
        img: css,
      },
      {
        title: "Tailwindcss",
        img: tailwind,
      },
      {
        title: "Nodejs",
        img: nodejs,
      },
      {
        title: "Expressjs",
        img: express,
      },
      {
        title: "PostgreSQL",
        img: postgresql,
      },
    ],
    btns: {
      githubUrl: "",
      liveUrl: "https://lounges.cardinsider.com/",
    },
  },

  {
    title: "Fin Paisa",
    desc: "Financial Influencers' Network to make money with the financial offers that boost your earnings.",
    images: [
      "https://github.com/ShrikantJawla/portfolio_images/blob/main/projects/finpaisa/Add%20a%20little%20bit%20of%20body%20text.png?raw=true",
    ],
    techStacks: [
      {
        title: "Html",
        img: html,
      },
      {
        title: "Javascript",
        img: js,
      },
      {
        title: "Css",
        img: css,
      },
      {
        title: "Tailwindcss",
        img: tailwind,
      },
      {
        title: "Nodejs",
        img: nodejs,
      },
      {
        title: "Expressjs",
        img: express,
      },
      {
        title: "PostgreSQL",
        img: postgresql,
      },
    ],
    btns: {
      githubUrl: "",
      liveUrl: "https://finpaisa.in",
    },
  },
];
