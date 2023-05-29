const createHome = () => {
  const main = document.querySelector('.main');
  const home = document.createElement('div');
  home.classList.add('home');
  home.textContent = 'Home';
  main.appendChild(home);
};

export default createHome;
