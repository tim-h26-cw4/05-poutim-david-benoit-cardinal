import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-container');
    this.init();
  }

  init() {
    const poutines = this.element.querySelectorAll('.js-poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    const buttons = this.element.querySelectorAll('.js-button-secondary');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', this.sendOrder.bind(this));
    }
  }

  sendOrder() {
    this.container.innerHTML = '';

    let nombre = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];

      if (poutine.selectedType != '') {
        nombre++;
      }
    }

    const totalPoutine = document.createElement('p');
    totalPoutine.innerText = `Nombre total de poutine(s): ${nombre}`;
    this.container.appendChild(totalPoutine);
  }
}
