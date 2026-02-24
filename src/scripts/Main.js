import Icons from './utils/Icons.js';
import Chef from './Chef.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      new Chef();
    }
  }
}

new Main();
