import { IAccessibilityButtons } from "./interfaces";

const positiveTabIndexValue: number = 20;
const negeativeTabIndexValue: number = -1;

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
    class: "black-button",
    ariaLabel: "Toggle screen reader mode",
  },
  {
    label: "Large Font",
    type: "large",
    class: "white-button",
    ariaLabel: "Toggle large font mode",
  },
];

const focusableElements: string = `h1, h2, h3, h4, h5, h6, a:not([disabled]), button:not([disabled]), button:not([aria-disabeld=true]), input:not([disabled]), textarea:not([disabled]), select:not([disabled])`;

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

function stopSlider() {
  const carouselWrapper = document.querySelector(".react-multi-carousel-list");
  const carouselUl = document.querySelector(".react-multi-carousel-track");
  carouselWrapper?.removeAttribute('autoPlay infinite')
  debugger;
}

function handleLinks(ele: Element) {
  // if link doesn't have text || or it is less than 2, set his class as text
  if (!ele.textContent || ele.textContent.length < 2) {
    var text = ele.getAttribute("class");
  } else {
    text = ele.textContent;
  }
  // create a hidden span with text
  var hiddenText = Object.assign(document.createElement("span"), {
    role: "presentation",
    "aria-hidden": "true",
    className: "screen-reader-element hidden-text",
    innerHTML: text,
  });
  ele.appendChild(hiddenText);
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

function focusOnActiveTab() {
  setTimeout(() => {
    debugger;
    var activeTab: any = document.querySelector(
      ".project-tab-panel-links.active"
    );
    if (!activeTab) return;
    activeTab.setAttribute("tabindex", `${positiveTabIndexValue}`);
    activeTab.focus();
  }, 150);
}

export function screenReader() {
  const elements = document.querySelectorAll(`${focusableElements}`);
  elements.forEach((ele) => {
    if (!ele || ele.checkVisibility() === false) return;
    if (ele.nodeName === "A") {
      handleLinks(ele);
    }
    ele.setAttribute("tabindex", `${positiveTabIndexValue}`);
  });
  handleTabPanel();
  stopSlider();
}

export function handleFocusInDialog() {
  var notInDialogEl = document.querySelectorAll(`${focusableElements}`);
  notInDialogEl.forEach((ele, i) => {
    if (notInDialogEl[i].classList.contains("dialog-button")) return;
    else {
      ele.setAttribute("tabindex", `${negeativeTabIndexValue}`);
    }
  });
}
