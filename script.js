const headerElementsToHide = document.querySelectorAll(".welcome,#drop-btn");
const mobileNavIcon = document.querySelector("#drop-btn");
const nav = document.querySelector("#mobile-nav");
const mobileArr = ["Portoflio", "About", "Contact"];
const sectionIds = ["works-section", "About-section", "footer"];

const mobileNav = () => {
  document.querySelector("header").classList.add("h-100");
  document.querySelector("body").classList.add("no-scroll-bg");
  nav.className = "mobile-menu";
  const ul = document.createElement("ul");
  ul.className = "mobile-ul";
  const xIcon = document.createElement("img");
  xIcon.src = "./images/x-icon.png";
  xIcon.alt = "x icon";
  xIcon.className = "x-icon";
  for (let elem of headerElementsToHide) {
    elem.classList.add("d-none");
  }
  for (let i = 0; i < mobileArr.length; i++) {
    let li = document.createElement("li");
    li.className = "mobile-nav-item";
    let a = document.createElement("a");
    a.href = `#${sectionIds[i].toLowerCase()}`;
    a.innerText = mobileArr[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(xIcon);
  nav.appendChild(ul);
};
mobileNavIcon.addEventListener("click", mobileNav);
