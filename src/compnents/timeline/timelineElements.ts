import equalWeb from "../../assets/img/equalWeb.png";
import johnBryce from "../../assets/img/johnBryce.jpeg";
import BGU from "../../assets/img/bgu.png";

import technion from "../../assets/img/technion.webp";

import scrimba from "../../assets/img/scrimba.jpeg";

import BA from "../../assets/img/B.A.jpeg";
import { ITimeLineElements } from "../../utils/interfaces";

const timelineElements: Array<ITimeLineElements> = [
  {
    id: 0,

    title: "Project Management in the AI era and Preparation for PMP® Certification",
    location: "Technion Contiuing Studies",
    description:
"In this course, I will learn advanced project management concepts, hybrid Agile/Waterfall methodologies, and AI-driven tools for planning, forecasting, and decision-making. I will develop leadership, communication, and team management skills to drive project success and improve organizational outcomes. I will gain hands-on experience with real-world case studies. I will also prepare to earn the globally recognized PMP® certification.",
    buttonText: " Take a peek ",
    date: "March 2026",
    icon: "school",
    image: technion,
    alt: "Scrimba web logo image",
    href: "https://cont-edu.technion.ac.il/programs/%D7%A0%D7%99%D7%94%D7%95%D7%9C-%D7%99%D7%96%D7%9E%D7%95%D7%AA-%D7%95%D7%A9%D7%99%D7%95%D7%95%D7%A7/%D7%9E%D7%AA%D7%95%D7%93%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%95%D7%AA-%D7%9E%D7%AA%D7%A7%D7%93%D7%9E%D7%95%D7%AA-%D7%91%D7%A0%D7%99%D7%94%D7%95%D7%9C-%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%D7%99%D7%9D/",
    hiddenText: " External link to technion.com ",
  },
  {
    id: 1,
    title: "Project Manager",
    location: "EqualWeb",
    description:
      "Drive end-to-end delivery of complex, cross-team projects while ensuring quality, lead customer onboarding and implementation to build lasting relationships and support evolving needs, monitor progress and prioritize tasks for the R&D team while documenting improvements and bugs, and coordinate across Finance, R&D, Sales, and PM teams to resolve dependencies and meet milestones",
    buttonText: "Recommendation Letters",
    date: "January 2026 - present",

    title: "Node.js Course",
    location: "scrimba.com",
    description:
      "Start the new upcoming 'Learn Node.js' course by my favorite online learning platform, Scrimba.com",
    buttonText: " Take a peek ",
    date: "April 14th",
    icon: "school",
    image: scrimba,
    alt: "Scrimba web logo image",
    href: "https://scrimba.com/learn-nodejs-c00ho9qqh6",
    hiddenText: " External link to scrimba.com ",
  },
  {
    id: 1,
    title: "JavaScript Developer",
    location: "EqualWeb",
    description:
      "I began as a programmer ensuring accessibility on small sites, eventually leading large-scale, high-stakes projects worth hundreds of thousands. My day-to-day invloves writing clean, reusable code with clear structure and purpose. I built CSS and JavaScript templates to boost efficiency, mastered debugging with DevTools, and deeply explored core JavaScript and HTML—always balancing accessibility, performance, and delivery speed under tight deadlines.",
    buttonText: "Recommendation Letters",
    date: "January 2023 - Present",

    icon: "work",
    image: equalWeb,
    alt: "Equal web logo image",
    href: "#recommendations",
  },
  {
    id: 2,

    title: "JavaScript Developer",
    location: "EqualWeb",
    description:
      "I began as a programmer ensuring accessibility on small sites, eventually leading large-scale high-stakes projects. I wrote clean, reusable code with clear structure and purpose. I built CSS and JavaScript templates to boost efficiency, mastered debugging with DevTools, and deeply explored core JavaScript and HTML—always balancing accessibility, performance, and delivery speed under tight deadlines.",
    buttonText: "Recommendation Letters",
    date: "January 2023 - January 2026",
    icon: "work",
    image: equalWeb,
    alt: "Equal web logo image",
    href: "#recommendations",
  },
  {
    id: 3,


    title: "Full-Stack Web Development bootcamp",
    location: "John Bryce, Tel Aviv",
    description:
      "During my full-stack web development bootcamp, I learned how to build secure, interactive, and user-friendly web applications from end to end. I gained hands-on experience setting up a complete backend environment from scratch, connecting it to a database, and handling smooth data flow between the server and the user. My final project was a fully functional vacations site. It featured secure authentication using JWT, allowing users to register, log in, and access protected endpoints. Admin users had full control over vacation data, with the ability to create, update, or delete vacations in real time. I learned a variety of technologies and tools, including React, TypeScript, Redux, Docker, Node.js, Express.js, and MySQL.",
    buttonText: "Course Certificate",
    date: "November 2021 - September 2022",
    icon: "school",
    image: johnBryce,
    alt: "John Bryce logo image",
    href: "https://www.linkedin.com/in/aviv-glaser-226656202/overlay/1734883343928/single-media-viewer/?profileId=ACoAADO1pr4Bbcy48f40WijHAWsNVbKCfphKkW8",
    hiddenText: " External link to linkedin.com ",
  },
  {

    id: 4,

    id: 3,

    title: "B.A - Education & Communication",
    location: "Ben Gurion University",
    description:
      "I completed a B.A. in Education and Communication from Ben Gurion University, where I improved my English proficiency, strengthened my communication skills, and developed a creative approach to problem-solving. For over 8 years, I worked with children across the country, designing and leading educational programs that encouraged curiosity, collaboration, and hands-on learning.",
    buttonText: "B.A Degree",
    date: "2017 - 2020",
    icon: "school",
    image: BGU,
    alt: "Ben Gurion University logo image",
    href: BA,
    hiddenText: " Open degree image on a new tab ",
  },
];

export default timelineElements;
