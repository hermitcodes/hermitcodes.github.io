/**
 * Theme Switcher
 */
(() => {
  const btn = document.querySelector('[data-theme-toggler]');
  btn.addEventListener('click', (e) => {
    const targetClass = e.target.classList;
    document.body.classList.toggle('switch-theme');

    if (targetClass.contains('bx-sun')) {
      targetClass.add('bx-moon');
      targetClass.remove('bx-sun');
    } else {
      targetClass.add('bx-sun');
      targetClass.remove('bx-moon');
    }
  });
})();

/**
 * Language Switcher
 */
(() => {
  const btn = document.querySelector('[data-lang-toggler]');
  const menu = document.querySelector('.navbar__lang');
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });


})();

/**
 * Tab Switcher
 */
(() => {
  const tabBtns = document.querySelectorAll('.content__btn');
  const tabContents = document.querySelectorAll('.content__tab');
  const closeBtns = document.querySelectorAll('.content__tab--close');

  tabBtns.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const target = e.target.dataset.tab;

      handleRemove();

      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  closeBtns.forEach((cls) => {
    cls.addEventListener('click', handleRemove);
  });

  function handleRemove() {
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
  }
})();