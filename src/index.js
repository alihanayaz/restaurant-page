import './style.scss';
import createHome from './home';
import createMenu from './menu';

const content = document.querySelector('#content');

const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);

const logo = document.createElement('h1');
logo.textContent = 'TexMex';
logo.classList.add('logo');
header.appendChild(logo);

const nav = document.createElement('div');
nav.classList.add('nav');
header.appendChild(nav);

const ul = document.createElement('ul');
nav.appendChild(ul);

const li1 = document.createElement('li');
li1.textContent = 'Home';
li1.addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  menu.remove();
  createHome();
});
const li2 = document.createElement('li');
li2.textContent = 'Menu';
li2.addEventListener('click', () => {
  const home = document.querySelector('.home');
  home.remove();
  createMenu();
});
ul.appendChild(li1);
ul.appendChild(li2);

const main = document.createElement('div');
main.classList.add('main');
content.appendChild(main);
createHome();

const footer = document.createElement('div');
footer.classList.add('footer');
content.appendChild(footer);

const p = document.createElement('p');
p.textContent = 'Created by alihanayaz';
footer.appendChild(p);
