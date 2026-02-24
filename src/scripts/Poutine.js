export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-button');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const button = this.types[i];
      button.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const button = this.types[i];
      button.classList.remove('is-active');
      event.currentTarget.classList.add('is-active');
      this.selectedType = event.currentTarget.innerText;
      this.updatePhoto();
    }
  }

  updatePhoto() {
    const image = this.element.querySelector('.js-image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
