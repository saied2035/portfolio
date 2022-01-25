/*mobile menu */
const headerElementsToHide = document.querySelectorAll('.welcome,#drop-btn');
const mobileNavIcon = document.querySelector('#drop-btn');
const nav = document.querySelector('#mobile-nav');
const mobileArr = ['Portoflio', 'About', 'Contact'];
const sectionIds = ['works-section', 'About-section', 'footer'];

const mobileNav = () => {
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
mobileNavIcon.addEventListener('click', mobileNav);

const resetToDefault = (event) => {
  if (
    (event.target && event.target.className === 'x-icon')
     || (event.target && event.target.parentNode.className === 'mobile-nav-item')
  ) {
    document.querySelector('header').classList.remove('h-100');
    document.querySelector('body').classList.remove('no-scroll-bg');
    nav.classList.remove('mobile-menu');
    headerElementsToHide.forEach((elem) => {
      elem.classList.remove('d-none');
    });
    document.querySelector('.x-icon').remove();
    document.querySelector('.mobile-ul').remove();
  }
};
document.addEventListener('click', resetToDefault);

/*works section*/
const projects = Array.from(document.querySelectorAll('.project-container'))
const projectsArr = projects.map((project) => {
      const p = document.createElement('p');
      p.innerText = 'Project Name';
      p.className = 'project-name';
      const cln = project.cloneNode(true)
     return {
               name: p,
               description: cln.children[1],
               image: cln.children[0],
               technologies: cln.children[2]
            };
})
const projectBtns = document.querySelectorAll('.project-button')
const popUpWindow = (event) => {
  const projectsPops = document.querySelectorAll('.popup')
    switch (event.target.parentNode.id){
       case 'grid-item1':
          projectsPops[0].prepend(projectsArr[0].description)
          projectsPops[0].prepend(projectsArr[0].technologies)
          projectsPops[0].prepend(projectsArr[0].name)
          projectsPops[0].prepend(projectsArr[0].image)
          projectsPops[0].classList.remove('d-none')

       break;
       case 'grid-item2':
          projectsPops[1].prepend(projectsArr[1].description)
          projectsPops[1].prepend(projectsArr[1].technologies)
          projectsPops[1].prepend(projectsArr[1].name)
          projectsPops[1].prepend(projectsArr[1].image)
          projectsPops[1].classList.remove('d-none')
       break;
       case 'grid-item3':
          projectsPops[2].prepend(projectsArr[2].description)
          projectsPops[2].prepend(projectsArr[2].technologies)
          projectsPops[2].prepend(projectsArr[2].name)
          projectsPops[2].prepend(projectsArr[2].image)
          projectsPops[2].classList.remove('d-none')
       break;
       case 'grid-item4':
          projectsPops[3].prepend(projectsArr[3].description)
          projectsPops[3].prepend(projectsArr[3].technologies)
          projectsPops[3].prepend(projectsArr[3].name)
          projectsPops[3].prepend(projectsArr[3].image)
          projectsPops[3].classList.remove('d-none')
       break;
       case 'grid-item5':
          projectsPops[4].prepend(projectsArr[4].description)
          projectsPops[4].prepend(projectsArr[4].technologies)
          projectsPops[4].prepend(projectsArr[4].name)
          projectsPops[4].prepend(projectsArr[4].image)
          projectsPops[4].classList.remove('d-none')
       break;
       case 'grid-item6':
          projectsPops[5].prepend(projectsArr[5].description)
          projectsPops[5].prepend(projectsArr[5].technologies)
          projectsPops[5].prepend(projectsArr[5].name)
          projectsPops[5].prepend(projectsArr[5].image)
          projectsPops[5].classList.remove('d-none')
        break;
       default :
         break; 
    }
    
}


projectBtns[0].addEventListener('click',popUpWindow)
projectBtns[1].addEventListener('click',popUpWindow)
projectBtns[2].addEventListener('click',popUpWindow)
projectBtns[3].addEventListener('click',popUpWindow)
projectBtns[4].addEventListener('click',popUpWindow)
projectBtns[5].addEventListener('click',popUpWindow)
