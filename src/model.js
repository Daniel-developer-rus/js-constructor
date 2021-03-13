import image from './assets/image.png';
import { Columns, Header, Image } from './classes/blocks';

export const model = [
  new Header('Конструктор сайтов на чистом JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
    },
  }),
  new Image(image, {
    styles: {
      display: 'flex',
      padding: '2rem 0',
      'justify-content': 'center',
      'align-items': 'center',
    },
    imageStyle: {
      width: '500px',
      height: 'auto',
    },
  }),
  new Columns(
    [
      'Приложение на чистом JS, без использования библиотек',
      'С ипользованием принципы SOLID и ООП',
      'javaScript -  это просто, интересно для создания любых UI своими руками',
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),
];
