import equalWeb from "../../assets/img/equalWeb.png";
import johnBryce from "../../assets/img/johnBryce.jpeg";
import BGU from "../../assets/img/BGU.png";

export interface ITimeLineElements {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  date: string;
  icon: "work" | "school";
  location: string;
  image?: string;
  alt?: string;
}

const timelineElements: Array<ITimeLineElements> = [
  {
    id: 1,
    title: "JavaScript Developer",
    location: "EqualWeb",
    description:
      "In my work as a JavaScript developer, I've enhanced my skills in writing efficient, reusable functions that streamline development and improve performance. I’ve gained deep expertise in DOM manipulation, asynchronous programming, loops, and event handling while sharpening my debugging skills. I focus on writing clean, structured code that balances user experience, security, and performance while consistently meeting project deadlines.",
    buttonText: "Recommendation Letters",
    date: "January 2023 - Present",
    icon: "work",
    image: equalWeb,
    alt: "Equal web logo image",
  },
  {
    id: 2,
    title: "Full-Stack Web Development bootcamp",
    location: "John Bryce, Tel Aviv",
    description:
      "After years of mentoring and guiding hundreds of children across Israel, I made a bold decision when COVID-19 hit—to leave it all behind and dive headfirst into one of the most challenging industries: web development. At 29, with no prior coding experience, I enrolled in an intense, year-long full-stack development program at John Bryce High-Tech Academy. Out of 26 students, only 11 made it to the finish line—and I was one of them. Balancing rigorous coursework with part-time work to stay afloat, I pushed through the toughest challenge of my life. A few months after graduating, I landed my first developer role, proving that commitment and resilience can open doors to entirely new opportunities.",
    buttonText: "Course Certificate",
    date: "November 2021 - September 2022",
    icon: "school",
    image: johnBryce,
    alt: "John Bryce logo image",
  },
  {
    id: 3,
    title: "B.A - Education & Communication",
    location: "Ben Gurion University",
    description:
      "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    buttonText: "B.A Degree",
    date: "2017 - 2020",
    icon: "school",
    image: BGU,
    alt: "Ben Gurion University logo image",
  },
];

export default timelineElements;
