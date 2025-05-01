import equalWeb from "../../assets/img/equalWeb.png";
import johnBryce from "../../assets/img/johnBryce.jpeg";
import BGU from "../../assets/img/bgu.png";
import scrimba from "../../assets/img/scrimba.jpeg";
import BA from "../../assets/img/B.A.jpeg";
import { ITimeLineElements } from "../../utils/interfaces";

const timelineElements: Array<ITimeLineElements> = [
  {
    id: 0,
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
    title: "Full-Stack Web Development bootcamp",
    location: "John Bryce, Tel Aviv",
    description:
      "During my full-stack web development bootcamp, I learned how to build secure, interactive, and user-friendly web applications from end to end. I gained hands-on experience setting up a complete backend environment from scratch, connecting it to a database, and handling smooth data flow between the server and the user. My final project was a fully functional vacations site. It featured secure authentication using JWT, allowing users to register, log in, and access protected endpoints. Admin users had full control over vacation data, with the ability to create, update, or delete vacations in real time. I learned a variety of programming languages including React, TypeScript, Redux, Docker, Node.js, Express.js, and MySQL.",
    buttonText: "Course Certificate",
    date: "November 2021 - September 2022",
    icon: "school",
    image: johnBryce,
    alt: "John Bryce logo image",
    href: "https://www.linkedin.com/in/aviv-glaser-226656202/overlay/1734883343928/single-media-viewer/?profileId=ACoAADO1pr4Bbcy48f40WijHAWsNVbKCfphKkW8",
    hiddenText: " External link to linkedin.com ",
  },
  {
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
