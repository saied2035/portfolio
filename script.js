/* mobile menu */

const mobileNav = () => {
  const headerElementsToHide = document.querySelectorAll('.welcome,#drop-btn');
  const nav = document.querySelector('#mobile-nav');
  const mobileArr = ['Portoflio', 'About', 'Contact'];
  const sectionIds = ['works-section', 'About-section', 'footer'];
  document.querySelector('header').classList.add('h-100');
  document.querySelector('body').classList.add('no-scroll-bg');
  nav.className = 'mobile-menu';
  const ul = document.createElement('ul');
  ul.className = 'mobile-ul';
  const xIcon = document.createElement('img');
  xIcon.src = './images/x-icon.png';
  xIcon.alt = 'x icon';
  xIcon.className = 'x-icon';
  headerElementsToHide.forEach((elem) => {
    elem.classList.add('d-none');
  });
  for (let i = 0; i < mobileArr.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'mobile-nav-item';
    const a = document.createElement('a');
    a.href = `#${sectionIds[i].toLowerCase()}`;
    a.innerText = mobileArr[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(xIcon);
  nav.appendChild(ul);
};
const mobileNavIcon = document.querySelector('#drop-btn');
mobileNavIcon.addEventListener('click', mobileNav);

const resetToDefault = (event) => {
  if (
    (event.target && event.target.className === 'x-icon')
    || (event.target && event.target.parentNode.className === 'mobile-nav-item')
  ) {
    document.querySelector('header').classList.remove('h-100');
    document.querySelector('body').classList.remove('no-scroll-bg');
    document.querySelector('#mobile-nav').classList.remove('mobile-menu');
    const headerElementsToHide = document.querySelectorAll('.welcome,#drop-btn');
    headerElementsToHide.forEach((elem) => {
      elem.classList.remove('d-none');
    });
    document.querySelector('.x-icon').remove();
    document.querySelector('.mobile-ul').remove();
  }
};
document.addEventListener('click', resetToDefault);

/* works section */

const getProjects = () => {
  const projects = Array.from(document.querySelectorAll('.project-container'));
  const projectsArr = projects.map((project) => {
    const p = document.createElement('p');
    p.innerText = 'Keeping track of hundreds of components';
    p.className = 'project-name';
    const div = document.createElement('div');
    div.className = 'popup-img';
    const popupXicon = document.createElement('img');
    if (window.innerWidth >= 992) {
      popupXicon.src = './images/popup-xIcon-desktop.png';
      popupXicon.className = 'popup-xicon-desktop';
    } else {
      popupXicon.src = './images/popup-XIcon.png';
      popupXicon.className = 'popup-x-icon';
    }
    popupXicon.alt = 'popup x icon';
    div.appendChild(popupXicon);
    const cln = project.cloneNode(true);
    cln.children[1].classList.remove('description');
    cln.children[1].classList.add('popup-description');
    cln.children[1].innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea';
    cln.children[2].classList.add('popup-techs');
    return {
      name: p,
      description: cln.children[1],
      image: div,
      technologies: cln.children[2],
    };
  });
  return projectsArr;
};

const popUpWindow = (event) => {
  const projectsArr = getProjects();
  const projectsPops = document.querySelectorAll('.popup');
  const projectBtns = document.querySelectorAll('.project-button');
  const popupIndex = Array.from(projectBtns).indexOf(event.target);
  if (window.innerWidth < 992) {
    projectsPops[popupIndex].children[0].prepend(
      projectsArr[popupIndex].description,
    );
    projectsPops[popupIndex].children[0].prepend(
      projectsArr[popupIndex].technologies,
    );
    projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].name);
    projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].image);
  } else {
    projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].name);
    projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].image);
    projectsPops[popupIndex].children[0].appendChild(
      projectsArr[popupIndex].technologies,
    );
    projectsPops[popupIndex].children[0].appendChild(
      projectsArr[popupIndex].description,
    );
  }

  projectsPops[popupIndex].classList.toggle('d-none');
  document.querySelector('body').classList.add('no-scroll-bg');
  document.querySelector('#About-img2').classList.add('d-none');
};

const projectBtns = document.querySelectorAll('.project-button');
projectBtns[0].addEventListener('click', popUpWindow);
projectBtns[1].addEventListener('click', popUpWindow);
projectBtns[2].addEventListener('click', popUpWindow);
projectBtns[3].addEventListener('click', popUpWindow);
projectBtns[4].addEventListener('click', popUpWindow);
projectBtns[5].addEventListener('click', popUpWindow);

const closePopup = (event) => {
  if (event.target && event.target.className.includes('popup-x')) {
    if (document.querySelector('.popup-xicon-desktop')) {
      document.querySelector('.popup-xicon-desktop').parentNode.parentNode.parentNode.classList.toggle('d-none');
    } else {
      document.querySelector('.popup-x-icon').parentNode.parentNode.parentNode.classList.toggle('d-none');
    }
    document.querySelector('body').classList.remove('no-scroll-bg');
    document.querySelector('#About-img2').classList.remove('d-none');
    document.querySelector('.project-name').remove();
    document.querySelector('.popup-img').remove();
    document.querySelector('.popup-description').remove();
    document.querySelector('.popup-techs').remove();
  }
};
document.addEventListener('click', closePopup);
