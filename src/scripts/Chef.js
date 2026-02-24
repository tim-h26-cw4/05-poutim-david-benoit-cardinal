import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-chef__order');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const buttons = this.element.querySelectorAll('.button-secondary');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    this.container.innerHTML = '';

    const nombrePoutine = 0;
    if (this.element.classList.contains('is-active')) {
      nombrePoutine + 1;
    }

    const totalPoutine = document.createElement('p');
    totalPoutine.innerText = `Nombre total de poutine(s): ${nombrePoutine}`;
    this.container.appendChild(totalPoutine);
  }
}
