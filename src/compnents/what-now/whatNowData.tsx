import {
  Book,
  PlayBtn,
  Signpost,
  CalendarCheck,
  People,
  Broadcast,
  Cpu,
} from "react-bootstrap-icons";
import { IActivities } from "../../utils/interfaces";
// @ts-ignore
import scrimbaTownHall from "../../assets/img/scrimba-townhall.jpeg";

export const activities: Array<IActivities> = [
  {
    title: "One Term a Day",
    icon: <Book />,
    hiddenText: "External link to Linkedin post",
    description:
      "I joined 'One Term a Day' WhatsApp group to read a bit during my coffee breaks and learn something new",
    link: "https://www.linkedin.com/posts/noa-aizen_%D7%90%D7%99%D7%9A-%D7%A9%D7%99%D7%97%D7%AA-%D7%9E%D7%A1%D7%93%D7%A8%D7%95%D7%9F-%D7%94%D7%A4%D7%9B%D7%94-%D7%9C%D7%A7%D7%94%D7%99%D7%9C%D7%94-%D7%A9%D7%9C-300-%D7%90%D7%99%D7%A9-activity-7310186524099100672-b7JW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO1pr4Bbcy48f40WijHAWsNVbKCfphKkW8",
  },
  {
    icon: <PlayBtn />,
    title: "Updated Full Stack Web Recordings",
    description:
      "I reached out to my old student coordinator at 'John Bryce' and received access to a latest Full-Stack course recordings",
  },
  {
    icon: <Signpost />,
    title: "Learning on the Go",
    description:
      "Since I work 5 days on-site, I use the extra 35 minutes each direction on public transportation to learn and make progress on my projects",
  },
  {
    icon: <CalendarCheck />,
    title: "Maximizing Weekends for Learning",
    description:
      "Every Thursday, I make sure all my housework is done to have more learning time on the weekends",
  },
  {
    icon: <Cpu />,
    title: "AI and Prompt Engineering",
    description:
      "I'm actively exploring AI and prompt engineering, testing different approaches to get the most accurate and efficient outputs from AI assistants",
  },
  {
    icon: <Broadcast />,
    title: "Scrimba Live TownHall Meetings",
    description:
      "From time to time, I enjoy attending Scrimba’s live TownHall meetings, where industry leaders share insights on the latest tech trends and updates",
    link: scrimbaTownHall,
    hiddenText: "Open scrimba town hall image on a new tab",
  },
  {
    icon: <People />,
    title: "Networking is Key",
    description:
      "Each week, I look for HRs, headhunters, and tech recruiters on LinkedIn and connect with them to expose myself to as many opportunities as possible",
    link: "https://www.linkedin.com/in/aviv-glaser-226656202/",
    short: "linkedIn",
    hiddenText: "External link to LinkedIn",
  },
];
