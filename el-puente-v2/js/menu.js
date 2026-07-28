// Menú hamburguesa
const hamburguesa = document.querySelector('.header__hamburguesa');
const menuMobile  = document.getElementById('menu-mobile');

if (hamburguesa && menuMobile) {
  hamburguesa.addEventListener('click', () => {
    const abierto = hamburguesa.getAttribute('aria-expanded') === 'true';
    hamburguesa.setAttribute('aria-expanded', String(!abierto));
    menuMobile.setAttribute('aria-hidden', String(abierto));
    menuMobile.classList.toggle('menu-mobile--abierto');
  });

  menuMobile.querySelectorAll('.menu-mobile__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburguesa.setAttribute('aria-expanded', 'false');
      menuMobile.setAttribute('aria-hidden', 'true');
      menuMobile.classList.remove('menu-mobile--abierto');
    });
  });
}
