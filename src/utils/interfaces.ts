import { JSX } from "react";

export interface ILogo {
  img: string;
  title: string;
  alt: string;
  className?: string;
}

export interface IAccessibilityMenu {
  isVisible: boolean;
  setIsVisible: Function;
}

export interface IAccessibilityButtons {
  label: string;
  type: string;
  class: string;
  ariaLabel: string;
}

export interface ILinks {
  href: string;
  icon: JSX.Element;
  alt: string;
  className?: string;
  hiddenText?: string
}

export interface IRecommendation {
  name: string;
  role: string;
  text: string;
  img: string;
  letter: string;
  hiddenText?: string;
}

export interface IActivities {
  title: string;
  description: string;
  icon: any;
  link?: string;
  hiddenText?: string;
  short?: string;
}

export interface IProjectsData {
  title: string;
  description: string;
  link?: string;
  imgUrl: string;
  alt: string;
  section: "GitHub" | "Deployed" | "Future";
}

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
  href?: string;
  hiddenText?: string;
}
