
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
    [
      'Delete',
      'Del',
      'Del',
      'Del',
      'Del',
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
const pressedKeys = new Set();
let currLang = 'en';
const prevLang = localStorage.getItem('lang');

const body = document.querySelector('body');

const outputArea = document.createElement('textarea');
outputArea.setAttribute('rows', 4);
outputArea.classList.add('outputArea');
body.appendChild(outputArea);

const container = document.createElement('div');
container.classList.add('keybord-container');
body.appendChild(container);

for (let i = 1; i < 6; i += 1) {
  const row = document.createElement('div');
  row.classList.add('rows', `row-${i}`);
  container.appendChild(row);

  keys[i - 1].forEach((el) => {
    const button = document.createElement('div');
    button.classList.add(el[0]);

    let span = document.createElement('span');
    // eslint-disable-next-line prefer-destructuring
    span.textContent = (el[1]);
    span.classList.add('ruLow', 'hidden');
    button.appendChild(span);

    span = document.createElement('span');
    // eslint-disable-next-line prefer-destructuring
    span.textContent = (el[2]);
    span.classList.add('ruUp', 'hidden');
    button.appendChild(span);

    span = document.createElement('span');
    // eslint-disable-next-line prefer-destructuring
    span.textContent = (el[3]);
    span.classList.add('enLow', 'activeLetter');
    button.appendChild(span);

    span = document.createElement('span');
    // eslint-disable-next-line prefer-destructuring
    span.textContent = (el[4]);
    span.classList.add('enUp', 'hidden');
    button.appendChild(span);

    row.appendChild(button);
  });
}

function shifting() {
  if (currLang === 'en') {
    let targets = document.querySelectorAll('.enLow');
    targets.forEach((element) => {
      element.classList.remove('activeLetter');
      element.classList.add('hidden');
    });

    targets = document.querySelectorAll('.enUp');
    targets.forEach((element) => {
      element.classList.add('activeLetter');
      element.classList.remove('hidden');
    });
  } else {
    let targets = document.querySelectorAll('.ruLow');
    targets.forEach((element) => {
      element.classList.remove('activeLetter');
      element.classList.add('hidden');
    });

    targets = document.querySelectorAll('.ruUp');
    targets.forEach((element) => {
      element.classList.add('activeLetter');
      element.classList.remove('hidden');
    });
  }
}
function unshifting() {
  if (currLang === 'en') {
    let targets = document.querySelectorAll('.enUp');
    targets.forEach((element) => {
      element.classList.remove('activeLetter');
      element.classList.add('hidden');
    });

    targets = document.querySelectorAll('.enLow');
    targets.forEach((element) => {
      element.classList.add('activeLetter');
      element.classList.remove('hidden');
    });
  } else {
    let targets = document.querySelectorAll('.ruUp');
    targets.forEach((element) => {
      element.classList.remove('activeLetter');
      element.classList.add('hidden');
    });

    targets = document.querySelectorAll('.ruLow');
    targets.forEach((element) => {
      element.classList.add('activeLetter');
      element.classList.remove('hidden');
    });
  }
}

function langChange() {
  if (currLang === 'en') {
    let targets = document.querySelectorAll('.enLow');
    targets.forEach((element) => {
      element.classList.remove('activeLetter');
      element.classList.add('hidden');
    });

    targets = document.querySelectorAll('.ruLow');
    targets.forEach((element) => {
      element.classList.add('activeLetter');
      element.classList.remove('hidden');
    });
    localStorage.setItem('lang', 'ru');
    currLang = 'ru';
  } else {
    let targets = document.querySelectorAll('.ruLow');
    targets.forEach((element) => {
      element.classList.remove('activeLetter');
      element.classList.add('hidden');
    });

    targets = document.querySelectorAll('.enLow');
    targets.forEach((element) => {
      element.classList.add('activeLetter');
      element.classList.remove('hidden');
    });
    localStorage.setItem('lang', 'en');
    currLang = 'en';
  }
}

container.addEventListener('click', (event) => {
  const keyClick = event.target.closest('div');
  const keyClickClass = event.target.closest('div').classList[0];
  event.preventDefault();
  // console.log('Pressed:', keyClickClass);
  setTimeout(() => {
    keyClick.classList.add('active');
    setTimeout(() => {
      keyClick.classList.remove('active');
    }, 200);
  }, 0);
  if (keyClick.querySelector('.activeLetter').textContent.length < 2) {
    outputArea.value += keyClick.querySelector('.activeLetter').textContent;
  }
  if (keyClickClass === 'ShiftLeft' || keyClickClass === 'ShiftRight') {
    setTimeout(() => {
      shifting();
      setTimeout(() => {
        unshifting();
      }, 500);
    }, 0);
  }
});

if (prevLang === 'ru') {
  langChange();
}


// eslint-disable-next-line no-restricted-globals
addEventListener('keydown', (event) => {
  // console.log('Hard key ', event.code);
  const target = document.querySelector([`.${event.code}`]);
  target.classList.add('active');
  pressedKeys.add(event.code);
  let q = 0;
  pressedKeys.forEach(() => {
    q += 1;
  });
  if (pressedKeys.has('ShiftLeft') && pressedKeys.has('AltLeft') && q === 2) {
    // console.log('langChange()');
    langChange();
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shifting();
  }
});

// eslint-disable-next-line no-restricted-globals
addEventListener('keyup', (event) => {
  // console.log('Hard key ', event.code);
  const target = document.querySelector([`.${event.code}`]);
  target.classList.remove('active');
  pressedKeys.delete(event.code);
  // console.log(pressedKeys);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    unshifting();
  }
});
