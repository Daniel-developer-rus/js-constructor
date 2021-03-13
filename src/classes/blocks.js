import { col, css, row } from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw new Error('this method should be created');
  }
}

export class Header extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles } = this.options ?? 'h1';
    return row(col(`<h1>${this.value}</h1>`), css(styles));
  }
}

export class Image extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles, imageStyle: is } = this.options;
    return row(`<img src="${this.value}" style="${css(is)}"/>`, css(styles));
  }
}

export class Columns extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    return row(this.value.map(col).join(''), css(this.options.styles));
  }
}
