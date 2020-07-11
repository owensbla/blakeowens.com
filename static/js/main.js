class Main {
  constructor() {
    this.bindEvents();
    svg4everybody();
    retinajs();
  }

  bindEvents() {
    const projectLinks = document.querySelectorAll('.js-open-project');
    const closeLinks = document.querySelectorAll('.js-close');
    const overlays = document.querySelectorAll('.overlay');

    projectLinks.forEach((el) => {
      el.addEventListener('click', this.onClickOpenProject, true);
    });

    closeLinks.forEach((el) => {
      el.addEventListener('click', this.onClickClose, true);
    });
  }

  onClickOpenProject(event) {
    event.preventDefault();

    const el = event.currentTarget;
    const projectName = el.getAttribute('href').replace('#', '');
    const overlay = document.querySelector(`[data-project="${projectName}"]`);

    overlay.classList.add('is-shown');
  }

  onClickClose(event) {
    event.preventDefault();

    const el = event.currentTarget;
    const projectName = el.getAttribute('data-target');
    const overlay = document.querySelector(`[data-project="${projectName}"]`);

    overlay.classList.remove('is-shown');
    
    setTimeout(() => { overlay.scrollTop = 0; }, 750);
  }
}

(function() { 
  new Main();
})();
