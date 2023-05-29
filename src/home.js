const createHome = () => {
  const main = document.querySelector('.main');
  const home = document.createElement('div');
  home.classList.add('home');
  main.appendChild(home);
};

export default createHome;
