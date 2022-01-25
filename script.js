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
