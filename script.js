/*mobile menu */
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
  headerElementsToHide.forEach((elem) => {
    elem.classList.add("d-none");
  });
  for (let i = 0; i < mobileArr.length; i += 1) {
    const li = document.createElement("li");
    li.className = "mobile-nav-item";
    const a = document.createElement("a");
    a.href = `#${sectionIds[i].toLowerCase()}`;
    a.innerText = mobileArr[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(xIcon);
  nav.appendChild(ul);
};
mobileNavIcon.addEventListener("click", mobileNav);

const resetToDefault = (event) => {
  if (
    (event.target && event.target.className === "x-icon") ||
    (event.target && event.target.parentNode.className === "mobile-nav-item")
  ) {
    document.querySelector("header").classList.remove("h-100");
    document.querySelector("body").classList.remove("no-scroll-bg");
    nav.classList.remove("mobile-menu");
    headerElementsToHide.forEach((elem) => {
      elem.classList.remove("d-none");
    });
    document.querySelector(".x-icon").remove();
    document.querySelector(".mobile-ul").remove();
  }
};
document.addEventListener("click", resetToDefault);

/*works section*/
const projects = Array.from(document.querySelectorAll(".project-container"));
const projectsArr = projects.map((project) => {
  const p = document.createElement("p");
  p.innerText = "Keeping track of hundreds of components";
  p.className = "project-name";
  const div = document.createElement("div");
  div.className = "popup-img";
  const popupXicon = document.createElement("img");
  popupXicon.src = "./images/popup-XIcon.png";
  popupXicon.alt = "popup x icon";
  popupXicon.className = "popup-x-icon";
  div.appendChild(popupXicon);
  const cln = project.cloneNode(true);
  cln.children[1].classList.remove("description");
  cln.children[1].classList.add("popup-description");
  cln.children[1].innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";
  cln.children[2].classList.add("popup-techs");
  // cln.children[0].src = "./images/popup-img.png";
  return {
    name: p,
    description: cln.children[1],
    image: div,
    technologies: cln.children[2],
  };
});
const projectBtns = document.querySelectorAll(".project-button");
const popUpWindow = (event) => {
  const projectsPops = document.querySelectorAll(".popup");
  const popupIndex = Array.from(projectBtns).indexOf(event.target);
  projectsPops[popupIndex].children[0].prepend(
    projectsArr[popupIndex].description
  );
  projectsPops[popupIndex].children[0].prepend(
    projectsArr[popupIndex].technologies
  );
  projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].name);
  projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].image);
  projectsPops[popupIndex].classList.toggle("d-none");
  document.querySelector("body").classList.add("no-scroll-bg");
  document.querySelector("#About-img2").classList.add("d-none");
};

projectBtns[0].addEventListener("click", popUpWindow);
projectBtns[1].addEventListener("click", popUpWindow);
projectBtns[2].addEventListener("click", popUpWindow);
projectBtns[3].addEventListener("click", popUpWindow);
projectBtns[4].addEventListener("click", popUpWindow);
projectBtns[5].addEventListener("click", popUpWindow);

const closePopup = (event) => {
  if (event.target && event.target.className === "popup-x-icon") {
    document
      .querySelector(".popup-x-icon")
      .parentNode.parentNode.parentNode.classList.toggle("d-none");
    document.querySelector("body").classList.remove("no-scroll-bg");
    document.querySelector("#About-img2").classList.remove("d-none");
    document.querySelector(".project-name").remove();
    document.querySelector(".popup-img").remove();
    document.querySelector(".popup-description").remove();
  }
};
document.addEventListener("click", closePopup);
