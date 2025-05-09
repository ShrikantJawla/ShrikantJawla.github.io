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
  razorPay,
} from "@/components/skillsImports";

export const projects: IProjects[] = [
  {
    title: "Card Insider Lounges",
    desc: `It lets users check lounge access benefits based on their credit cards.It shows eligible airport and railway lounges with details like amenities and timings.The platform simplifies travel by offering personalized lounge access info in one place.`,
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

  {
    title: "Bio Data Maker",
    desc: "It is used for creating or displaying biodata or resumes, possibly as part of a development project. However, specific details about its functionality are not publicly available.",
    images: [
      "https://github.com/ShrikantJawla/portfolio_images/blob/main/projects/biodatamaker/biodataMaker.png?raw=true",
    ],
    techStacks: [
      {
        title: "Next.js",
        img: nextjs,
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
        title: "PostgreSQL",
        img: postgresql,
      },
      {
        title: "Razorpay",
        img: razorPay,
      },
    ],
    btns: {
      githubUrl: "",
      liveUrl: "https://biodata-frontend-oqmfm.ondigitalocean.app/",
    },
  },
];
