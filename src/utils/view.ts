import whiteLogo from "../assets/img/aviv-glaser-white-contrast.png";
import blackLogo from "../assets/img/aviv-glaser.png";

export function handleResize() {
  if (window.innerWidth <= 768) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}

export function setLogo(): void {
  setTimeout(() => {
    var whiteContrast: boolean =
      document.body.classList.contains("whiteContrast");
    if (whiteContrast) {
      document
        .querySelector("header .logo-img")
        ?.setAttribute("src", whiteLogo);
      document
        .querySelector("footer .logo-img")
        ?.setAttribute("src", whiteLogo);
      document
        .querySelector("header .logo > .logo-img")
        ?.classList.add("white-logo");
    } else {
      document
        .querySelector("header .logo-img")
        ?.setAttribute("src", blackLogo);
      document
        .querySelector("footer .logo-img")
        ?.setAttribute("src", blackLogo);
      document
        .querySelector("header .logo > .logo-img")
        ?.classList.remove("white-logo");
    }
  }, 400);
}

export function appOrBrowser() {
  const mobile = document.body.classList.contains("mobile");
  if (!mobile) {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=wcwaviv@gmail.com&su=Hey%20Aviv%2C%20I%20have%20an%20open%20role%20that%20might%20fit%20for%20you!&body=Hi%20Aviv%2C%0A%0AI%20came%20across%20your%20profile%20and%20wanted%20to%20reach%20out%20about%20an%20exciting%20opportunity.%20Let%20me%20know%20if%20you%27re%20interested!%0A%0ABest%2C%0A[Your%20Name]",
      "_blank"
    );
  } else {
    window.location.href =
      "mailto:wcwaviv@gmail.com?subject=Hey Aviv, I have an open role that might fit for you!&body=Hi Aviv,%0A%0AI came across your profile and wanted to reach out about an exciting opportunity. Let me know if you're interested!%0A%0ABest,%0A[Your Name]";
  }
}
