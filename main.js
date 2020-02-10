/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable prefer-const */

const keys = [
  [
    [
      'Backquote',
      'ё',
      'Ё',
      '`',
      '~',
    ],
    [
      'Digit1',
      '1',
      '!',
      '1',
      '!',
    ],
    [
      'Digit2',
      '2',
      // eslint-disable-next-line no-useless-escape
      '\"',
      '2',
      '@',
    ],
    [
      'Digit3',
      '3',
      '№',
      '3',
      '#',
    ],
    [
      'Digit4',
      '4',
      ';',
      '4',
      '$',
    ],
    [
      'Digit5',
      '5',
      '%',
      '5',
      '%',
    ],
    [
      'Digit6',
      '6',
      ':',
      '6',
      '^',
    ],
    [
      'Digit7',
      '7',
      '?',
      '7',
      '&',
    ],
    [
      'Digit8',
      '8',
      '*',
      '8',
      '*',
    ],
    [
      'Digit9',
      '9',
      '(',
      '9',
      '(',
    ],
    [
      'Digit0',
      '0',
      ')',
      '0',
      ')',
    ],
    [
      'Minus',
      '-',
      '_',
      '-',
      '_',
    ],
    [
      'Equal',
      '=',
      '+',
      '=',
      '+',
    ],
    [
      'Backspace',
      'Backspace',
      'Backspace',
      'Backspace',
      'Backspace',
    ],
  ],
  [
    [
      'Tab',
      'Tab',
      'Tab',
      'Tab',
      'Tab',
    ],
    [
      'KeyQ',
      'й',
      'Й',
      'q',
      'Q',
    ],
    [
      'KeyW',
      'ц',
      'Ц',
      'w',
      'W',
    ],
    [
      'KeyE',
      'у',
      'У',
      'e',
      'E',
    ],
    [
      'KeyR',
      'к',
      'К',
      'r',
      'R',
    ],
    [
      'KeyT',
      'е',
      'Е',
      't',
      'T',
    ],
    [
      'KeyY',
      'н',
      'Н',
      'y',
      'Y',
    ],
    [
      'KeyU',
      'г',
      'Г',
      'u',
      'U',
    ],
    [
      'KeyI',
      'ш',
      'Ш',
      'i',
      'I',
    ],
    [
      'KeyO',
      'щ',
      'Щ',
      'o',
      'O',
    ],
    [
      'KeyP',
      'з',
      'З',
      'p',
      'P',
    ],
    [
      'BracketLeft',
      'х',
      'Х',
      '[',
      '{',
    ],
    [
      'BracketRight',
      'ъ',
      'Ъ',
      ']',
      '}',
    ],
    [
      'Backslash',
      '\\',
      '/',
      '\\',
      '|',
    ],
  ],
  [
    [
      'CapsLock',
      'CapsLock',
      'CapsLock',
      'CapsLock',
      'CapsLock',
    ],
    [
      'KeyA',
      'ф',
      'Ф',
      'a',
      'A',
    ],
    [
      'KeyS',
      'ы',
      'Ы',
      's',
      'S',
    ],
    [
      'KeyD',
      'в',
      'В',
      'd',
      'D',
    ],
    [
      'KeyF',
      'а',
      'А',
      'f',
      'F',
    ],
    [
      'KeyG',
      'п',
      'П',
      'g',
      'G',
    ],
    [
      'KeyH',
      'р',
      'Р',
      'h',
      'H',
    ],
    [
      'KeyJ',
      'о',
      'О',
      'j',
      'J',
    ],
    [
      'KeyK',
      'л',
      'Л',
      'k',
      'K',
    ],
    [
      'KeyL',
      'д',
      'Д',
      'l',
      'L',
    ],
    [
      'Semicolon',
      'ж',
      'Ж',
      ';',
      ':',
    ],
    [
      'Quote',
      'э',
      'Э',
      '\'',
      '"',
    ],
    [
      'Enter',
      'Enter',
      'Enter',
      'Enter',
      'Enter',
    ],
  ],
  [
    [
      'ShiftLeft',
      'Shift',
      'Shift',
      'Shift',
      'Shift',
    ],
    [
      'KeyZ',
      'я',
      'Я',
      'z',
      'Z',
    ],
    [
      'KeyX',
      'ч',
      'Ч',
      'x',
      'X',
    ],
    [
      'KeyC',
      'с',
      'С',
      'c',
      'C',
    ],
    [
      'KeyV',
      'м',
      'М',
      'v',
      'V',
    ],
    [
      'KeyB',
      'и',
      'И',
      'b',
      'B',
    ],
    [
      'KeyN',
      'т',
      'Т',
      'n',
      'N',
    ],
    [
      'KeyM',
      'ь',
      'Ь',
      'm',
      'M',
    ],
    [
      'Period',
      'б',
      'Б',
      ',',
      '<',
    ],
    [
      'Slash',
      'ю',
      'Ю',
      '.',
      '>',
    ],
    [
      'IntlRo',
      '.',
      ',',
      '/',
      '?',
    ],
    [
      'ShiftRight',
      'Shift',
      'Shift',
      'Shift',
      'Shift',
    ],
  ],
  [
    [
      'ControlLeft',
      'Ctrl',
      'Ctrl',
      'Ctrl',
      'Ctrl',
    ],
    [
      'MetaLeft',
      'Win',
      'Win',
      'Win',
      'Win',
    ],
    [
      'AltLeft',
      'Alt',
      'Alt',
      'Alt',
      'Alt',
    ],
    [
      'Space',
      ' ',
      ' ',
      ' ',
      ' ',
    ],
    [
      'AltRight',
      'Alt',
      'Alt',
      'Alt',
      'Alt',
    ],
    [
      'MetaRight',
      'Win',
      'Win',
      'Win',
      'Win',
    ],
    [
      'ContextMenu',
      'Cont',
      'Cont',
      'Cont',
      'Cont',
    ],
    [
      'ControlRight',
      'Ctrl',
      'Ctrl',
      'Ctrl',
      'Ctrl',
    ],

  ],
];

let body = document.querySelector('body');

let outputArea = document.createElement('textarea');
outputArea.setAttribute('rows', 4);
outputArea.classList.add('outputArea');
body.appendChild(outputArea);

let container = document.createElement('div');
container.classList.add('keybord-container');
body.appendChild(container);

for (let i = 1; i < 6; i++) {
  let row = document.createElement('div');
  row.classList.add('rows', `row-${i}`);
  container.appendChild(row);

  keys[i - 1].forEach((el) => {
    let button = document.createElement('div');
    button.classList.add(el[0]);

    let span = document.createElement('span');
    span.textContent = (el[1]);
    span.classList.add('ruLow', 'hidden');
    button.appendChild(span);

    span = document.createElement('span');
    span.textContent = (el[2]);
    span.classList.add('ruUp', 'hidden');
    button.appendChild(span);

    span = document.createElement('span');
    span.textContent = (el[3]);
    span.classList.add('enLow', 'activeLetter');
    button.appendChild(span);

    span = document.createElement('span');
    span.textContent = (el[4]);
    span.classList.add('enUp', 'hidden');
    button.appendChild(span);

    row.appendChild(button);
  });
}

container.addEventListener('click', (event) => {
  let keyClick = event.target.closest('div');
  let keyClickClass = event.target.closest('div').classList[0];
  console.log('Pressed:', keyClickClass);
  setTimeout(() => {
    keyClick.classList.add('active');
    setTimeout(() => {
      keyClick.classList.remove('active');
    }, 200);
  }, 0);
  if (keyClick.querySelector('.activeLetter').textContent.length < 2) {
    outputArea.value += keyClick.querySelector('.activeLetter').textContent;
  }
});
