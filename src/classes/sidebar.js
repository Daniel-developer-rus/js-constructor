import { block } from '../utils';
import { Header } from './blocks';

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return block('title');
  }

  add(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    const newBlock = type === 'title' && new Header(value, { styles });

    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}
