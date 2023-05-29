const menuList = [
  { name: 'Taco', img: '../assets/taco.jpeg' },
  { name: 'Burrito', img: '../assets/burrito.jpeg' },
];

const createMenu = () => {
  const main = document.querySelector('.main');
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const menuHeader = document.createElement('h2');
  menuHeader.textContent = 'Menu';
  menu.appendChild(menuHeader);
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');
  menu.appendChild(menuItems);
  menuList.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItems.appendChild(menuItem);
    const menuImg = document.createElement('img');
    menuImg.setAttribute('src', item.img);
    menuImg.setAttribute('alt', item.name);
    menuItem.appendChild(menuImg);
    const menuName = document.createElement('h3');
    menuName.textContent = item.name;
    menuItem.appendChild(menuName);
  });
  main.appendChild(menu);
};

export default createMenu;
