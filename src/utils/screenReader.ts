import { IAccessibilityButtons } from "./interfaces";
import whiteLogo from "../assets/img/aviv-glaser-white-contrast.png";
import blackLogo from "../assets/img/aviv-glaser.png";

const focusableElements: string = `h1, h2, h3, h4, h5, h6, a:not([disabled],.nav-link:not(.active) ), button:not([disabled], .recommendation-letter,[aria-disabeld=true]), input:not([disabled]), textarea:not([disabled]), select:not([disabled])`;
const positiveTabIndexValue: number = 20;
const negeativeTabIndexValue: number = -1;

export function screenReader() {
  const elements = document.querySelectorAll(`${focusableElements}`);
  elements.forEach((ele) => {
    ele.setAttribute("tabindex", `${positiveTabIndexValue}`);
  });
  handleTabPanel();
  fixHeader();
}

export const accessibilityButtons: Array<IAccessibilityButtons> = [
  {
    label: "Black Contrast",
    type: "black",
    class: "black-button",
    ariaLabel: "Toggle black contrast mode",
  },
  {
    label: "White Contrast",
    type: "white",
    class: "white-button",
    ariaLabel: "Toggle white contrast mode",
  },
  {
    label: "Screen Reader",
    type: "reader",
    class: "screen-reader-button",
    ariaLabel: "Toggle screen reader mode",
  },
  {
    label: "Large Font",
    type: "large",
    class: "large-font-button",
    ariaLabel: "Toggle large font mode",
  },
];

export function handleAccessibilityClasses(btnType: string) {
  const bodyClassArray: DOMTokenList = document.body.classList;
  setTimeout(() => {
    if (btnType === "black") {
      bodyClassArray.contains("blackContrast")
        ? bodyClassArray.remove("blackContrast")
        : bodyClassArray.add("blackContrast");
      bodyClassArray.remove("whiteContrast");
    } else if (btnType === "white") {
      bodyClassArray.contains("whiteContrast")
        ? bodyClassArray.remove("whiteContrast")
        : bodyClassArray.add("whiteContrast");
      bodyClassArray.remove("blackContrast");
    } else if (btnType === "reader") {
      if (bodyClassArray.contains("screenReader")) {
        bodyClassArray.remove("screenReader");
      } else {
        bodyClassArray.add("screenReader");
        screenReader();
      }
    } else if (btnType === "large") {
      bodyClassArray.contains("largeFont")
        ? bodyClassArray.remove("largeFont")
        : bodyClassArray.add("largeFont");
    } else {
      bodyClassArray?.remove(
        "blackContrast",
        "whiteContrast",
        "screenReader",
        "largeFont"
      );
    }
  }, 150);
}

export function setLogo(bodyClass: string) {
  if (bodyClass === "white") {
    document.querySelector("header .logo-img")?.setAttribute("src", whiteLogo);
    document.querySelector("footer .logo-img")?.setAttribute("src", whiteLogo);
  } else {
    document.querySelector("header .logo-img")?.setAttribute("src", blackLogo);
    document.querySelector("footer .logo-img")?.setAttribute("src", blackLogo);
  }
}

export function handleActive(e: any): void {
  const blackButton = document.querySelector(".black-button") as HTMLElement;
  const whiteButton = document.querySelector(".white-button") as HTMLElement;
  const classList = e.target.classList as DOMTokenList;
  if (classList.contains("black-button") && !classList.contains("active")) {
    whiteButton.classList.remove("active");
    whiteButton.setAttribute("aria-pressed", "false");
    blackButton.classList.add("active");
    blackButton.setAttribute("aria-pressed", "true");
  } else if (
    classList.contains("black-button") &&
    classList.contains("active")
  ) {
    blackButton.classList.remove("active");
    blackButton.setAttribute("aria-pressed", "false");
  } else if (
    classList.contains("white-button") &&
    classList.contains("active")
  ) {
    whiteButton.classList.remove("active");
    whiteButton.setAttribute("aria-pressed", "false");
  } else if (
    classList.contains("white-button") &&
    !classList.contains("active")
  ) {
    whiteButton.classList.add("active");
    whiteButton.setAttribute("aria-pressed", "true");
    blackButton.classList.remove("active");
    blackButton.setAttribute("aria-pressed", "false");
  } else if (
    (!classList.contains("white-button") ||
      !classList.contains("black-button")) &&
    classList.contains("active")
  ) {
    classList.remove("active");
    e.target.setAttribute("aria-pressed", "false");
  } else if (
    (!classList.contains("white-button") ||
      !classList.contains("black-button")) &&
    !classList.contains("active")
  ) {
    classList.add("active");
    e.target.setAttribute("aria-pressed", "true");
  }
}

function negetiveTabIndexForMenuLinks() {
  document
    .querySelectorAll("#basic-navbar-nav > .navbar-nav > a")
    .forEach((ele: any) => {
      ele.tabIndex = "-1";
    });
}

export function handleMainMenu(e: any): void {
  if (e.key === "ArrowRight" && e.target.nextSibling) {
    negetiveTabIndexForMenuLinks();
    e.target.nextSibling.tabIndex = 20;
    e.target.nextSibling.focus();
  } else if (e.key === "ArrowLeft" && e.target.previousSibling) {
    negetiveTabIndexForMenuLinks();
    e.target.previousSibling.tabIndex = 20;
    e.target.previousSibling.focus();
  } else if (e.key === "ArrowRight" && !e.target.nextSibling) {
    negetiveTabIndexForMenuLinks();
    e.target.parentElement.firstChild.tabIndex = 20;
    e.target.parentElement.firstChild.focus();
  } else if (e.key === "ArrowLeft" && !e.target.previousSibling) {
    negetiveTabIndexForMenuLinks();
    e.target.parentElement.lastChild.tabIndex = 20;
    e.target.parentElement.lastChild.focus();
  }
}

function fixHeader() {
  const header = document.querySelector(".main-header") as HTMLElement;
  if (header) header.innerText = "Hi! I'm Aviv, A Full-Stack Developer";
}

export function handleTabPanel() {
  const tabs = Array.from(
    document.querySelectorAll(".project-tab-panel-links")
  ) as HTMLElement[];
  tabs.forEach(function (tab) {
    tab.addEventListener("keydown", function (e: KeyboardEvent) {
      var ele = e.currentTarget as any;
      if (!ele) return;
      if (e.key === "ArrowLeft") {
        ele?.parentElement?.previousSibling?.firstElementChild?.click();
        focusOnActiveTab();
      }
      if (e.key === "ArrowRight") {
        ele?.parentElement?.nextSibling?.firstElementChild?.click();
        focusOnActiveTab();
      }
    });
  });
}

export function handleMenu() {
  const tabs = Array.from(
    document.querySelectorAll(".project-tab-panel-links")
  ) as HTMLElement[];
  tabs.forEach(function (tab) {
    tab.addEventListener("keydown", function (e: KeyboardEvent) {
      var ele = e.currentTarget as any;
      if (!ele) return;
      if (e.key === "ArrowLeft") {
        ele?.parentElement?.previousSibling?.firstElementChild?.click();
        focusOnActiveTab();
      }
      if (e.key === "ArrowRight") {
        ele?.parentElement?.nextSibling?.firstElementChild?.click();
        focusOnActiveTab();
      }
    });
  });
}

function focusOnActiveTab() {
  setTimeout(() => {
    var activeTab: any = document.querySelector(
      ".project-tab-panel-links.active"
    );
    if (!activeTab) return;
    activeTab.setAttribute("tabindex", `${positiveTabIndexValue}`);
    activeTab.focus();
  }, 150);
}

export function handleFocusInDialog() {
  lockFocusInDialog();
  var notInDialogEl = document.querySelectorAll(`${focusableElements}`);
  notInDialogEl.forEach((ele, i) => {
    if (notInDialogEl[i].classList.contains("dialog-button")) {
      ele.setAttribute("tabindex", "0");
    } else {
      ele.setAttribute("tabindex", `${negeativeTabIndexValue}`);
    }
  });
}

function lockFocusInDialog(): void {
  const cancelButton = document.querySelector(
    ".accessibility-menu-dialog .cancel-button"
  ) as HTMLElement | null;
  const closeButton = document.querySelector(
    ".accessibility-menu-dialog .close"
  ) as HTMLElement | null;

  if (cancelButton && closeButton) {
    cancelButton.addEventListener(
      "keydown",
      function (event: KeyboardEvent): void {
        if (event.key === "Tab" && !event.shiftKey) {
          event.preventDefault();
          closeButton.focus();
        }
      }
    );

    closeButton.addEventListener(
      "keydown",
      function (event: KeyboardEvent): void {
        if (event.key === "Tab" && event.shiftKey) {
          event.preventDefault();
          cancelButton.focus();
        }
      }
    );
  }
}

export function giveFocusToFocusableElements() {
  const bodyClassArray: DOMTokenList = document.body.classList;
  setTimeout(() => {
    if (!bodyClassArray.contains("screenReader")) return;
    const el = document.querySelectorAll(`${focusableElements}`);
    el?.forEach((element: any) => {
      element.setAttribute("tabindex", `${positiveTabIndexValue}`);
    });
    (document.querySelector(".accessibility-button") as HTMLElement)?.focus();
  }, 200);
}
