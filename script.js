const projects = [
  {
    name: 'To-do list',
    description: 'the to-do list is a project that you can save your to-do tasks. You can remove, add, and update your tasks. it got built with Webpack&ES6.',
    image: './images/toDoListPopup.jpg',
  },
  {
    name: 'Smart brain',
    description: 'the smart brain project is a web app that detects faces and guesses their names, ages, and mood. it got built with React&Redux front-end side and Nodejs&Postgresql back-end side.',
    image: './images/smartBrainPopup.jpg',
  },
  {
    name: 'Robofriends',
    description: 'simple website displaying robots. you can search for a robot by name. this website is a good demonstration to practice React&Redux.',
    image: './images/roboFriendsPopup.jpg',
  },
  {
    name: 'Nvidia GTC event',
    description: "Creating a webpage for GTC Nvidia's next event in March 2022. a simple website to show some details about the event. there is a description, speakers section, sponsors, the programs section, and contact info.",
    image: './images/nvidiaEventGTCPopup.jpg',
  },
  {
    name: 'Awesome books',
    description: 'a list of the awesome books you prefer. you can store, delete a list of the books you read. displaying the book with its title and author. it got built with modules&ES6.',
    image: './images/awesomeBooksPopup.jpg',
  },
  {
    name: 'To-do list',
    description: 'the to-do list is a project that you can save your to-do tasks. You can remove, add, and update your tasks. it got built with Webpack&ES6.',
    image: './images/toDoListPopup.jpg',
  },
];

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
  const projectsArr = projects.map((project, i) => {
    const projectName = document.createElement('p');
    projectName.innerText = project.name;
    projectName.className = 'project-name';

    const description = document.createElement('p');
    description.innerText = project.description;
    description.className = 'popup-description';

    const projectsFromHTML = document.querySelectorAll('.project-container');
    const cln = projectsFromHTML[i].cloneNode(true);
    const technologies = cln.children[2];
    technologies.classList.remove('techs');
    technologies.classList.add('popup-techs');
    const img = document.createElement('img');
    img.className = 'popup-img';
    img.src = project.image;
    const popupXicon = document.createElement('img');
    if (window.innerWidth >= 992) {
      popupXicon.src = './images/popup-xIcon-desktop.png';
      popupXicon.className = 'popup-xicon-desktop';
    } else {
      popupXicon.src = './images/popup-XIcon.png';
      popupXicon.className = 'popup-x-icon';
    }
    popupXicon.alt = 'popup x icon';
    return {
      name: projectName,
      description,
      image: img,
      technologies,
      close: popupXicon,
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
    projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].close);
  } else {
    projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].name);
    projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].image);
    projectsPops[popupIndex].children[0].prepend(projectsArr[popupIndex].close);
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
      document.querySelector('.popup-xicon-desktop').parentNode.parentNode.classList.toggle('d-none');
      document.querySelector('.popup-xicon-desktop').remove();
    } else {
      document.querySelector('.popup-x-icon').parentNode.parentNode.classList.toggle('d-none');
      document.querySelector('.popup-x-icon').remove();
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

const getEmail = () => document.querySelector('#email').value;
const validateEmail = () => {
  const email = getEmail();
  return email === email.toLowerCase();
};
const showErrorMsg = () => {
  const error = document.querySelector('small');
  error.innerText = 'Please,type all the email letters in lower case';
  error.classList.toggle('dn');
  return error;
};
const submitDecision = (event) => {
  event.preventDefault();
  if (!validateEmail()) {
    return showErrorMsg();
  }

  return event.target.submit();
};
const form = document.querySelector('#form');
form.addEventListener('submit', submitDecision);
