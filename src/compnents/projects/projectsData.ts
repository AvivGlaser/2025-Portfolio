import eCommerce from "../../assets/img/e-commerece-project.png";
import vacations from "../../assets/img/vacations-project.png";
import basketBallGallery from "../../assets/img/basketball-gallery-project.png";
import oldPortfolio from "../../assets/img/old-protfolio-project.png";
import basketballTicTacToe from "../../assets/img/basketball-tic-tac-toe-project.png";
import nextJS from "../../assets/img/next.js-project.png";
import { IProjectsData } from "../../utils/interfaces";


const projectsData: Array<IProjectsData> = [
  {
    title: "My Previous Portfolio",
    description: "My portfolio before I got hired",
    link: "https://aviv-glaser-portfolio.web.app/",
    imgUrl: oldPortfolio,
    alt: "image of my old portfolio site",
    section: "Deployed",
  },
  {
    title: "E-Commerce site",
    description:
      "This was my first project in the web-development world, An e-commerce site with basic CRUD functionality  ",
    imgUrl: eCommerce,
    alt: "image of my e-commerce website",
    link: "https://e-commerce-project-aviv-glaser.web.app/",
    section: "Deployed",
  },
  {
    title: "Vacations Site",
    description:
      "Full-Stack vacations site with JWT auth, interactive UI, admin management, payments, reports, and unit & integration tests.",
    imgUrl: vacations,
    alt: "image from my vacations website",
    link: "https://github.com/AvivGlaser/Vacations-App-2.0",
    section: "GitHub",
  },
  {
    title: "Basketball Gallery Showcase",
    description:
      "a small project designed to showcase basketball teams using React 19, TypeScript, MongoDB, and Next.js.",
    imgUrl: basketBallGallery,
    alt: "image from my basketball gallery showcase website",
    link: "https://github.com/AvivGlaser/BasketballGallery",
    section: "GitHub",
  },
  {
    title: "Israeli Basketball Tic Tac Toe",
    description:
      "A fun, interactive twist on the classic Tic Tac Toe game where you guess which Israeli basketball players have played for the given teams. Test your knowledge of Israeli basketball while enjoying this challenging and engaging game!",
    imgUrl: basketballTicTacToe,
    alt: "basketball tic tac toe image",
    section: "Future",
  },
  {
    title: "Next.js Backend system",
    description:
      "A future project where I’ll develop a scalable backend system using Next.js, featuring server-side rendering, API routes, and real-time updates with WebSockets.",
    imgUrl: nextJS,
    alt: "NEXT.js framework logo image",
    section: "Future",
  },
];

export default projectsData;
