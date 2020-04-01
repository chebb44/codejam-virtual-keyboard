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
      'Comma',
      'б',
      'Б',
      ',',
      '<',
    ],
    [
      'Period',
      'ю',
      'Ю',
      '.',
      '>',
    ],
    [
      'Slash',
      '.',
      ',',
      '/',
      '?',
    ],
    [
      'ArrowUp',
      'Up',
      'Up',
      'Up',
      'Up',
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
    [
      'ArrowLeft',
      'Left',
      'Left',
      'Left',
      'Left',
    ],
    [
      'ArrowDown',
      'Down',
      'Down',
      'Down',
      'Down',
    ],
    [
      'ArrowRight',
      'Right',
      'Right',
      'Right',
      'Right',
    ],

  ],
];

const pressedKeys = new Set();
let currLang = 'en';
const prevLang = localStorage.getItem('lang');

const body = document.querySelector('body');

const description = document.createElement('div');
description.classList.add('description');
description.innerText = 'Press Ctrl+Alt to switch language. Design by Win.';
body.appendChild(description);

const outputArea = document.createElement('textarea');
outputArea.setAttribute('rows', 4);
outputArea.classList.add('outputArea');
body.appendChild(outputArea);

const container = document.createElement('div');
container.classList.add('keyboard-container');
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

function setFocus() {
  outputArea.focus();
}
setFocus();

outputArea.onblur = setFocus;

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

function bsHandler() {
  let { value } = outputArea;
  const pos = outputArea.selectionStart;
  value = value.slice(0, pos - 1) + value.slice(pos);
  outputArea.value = value;
  outputArea.selectionStart = pos - 1;
  outputArea.selectionEnd = pos - 1;
}
function delHandler() {
  let { value } = outputArea;
  const pos = outputArea.selectionStart;
  value = value.slice(0, pos) + value.slice(pos + 1);
  outputArea.value = value;
  outputArea.selectionStart = pos;
  outputArea.selectionEnd = pos;
}

function addChar(input) {
  let { value } = outputArea;
  const pos = outputArea.selectionStart;
  value = value.slice(0, pos) + input + value.slice(pos);
  outputArea.value = value;
  outputArea.selectionStart = pos + input.length;
  outputArea.selectionEnd = pos + input.length;
}

container.addEventListener('click', (event) => {
  const keyClick = event.target.closest('div');
  const keyClickClass = event.target.closest('div').classList[0];
  event.preventDefault();
  setTimeout(() => {
    keyClick.classList.add('active');
    setTimeout(() => {
      keyClick.classList.remove('active');
    }, 200);
  }, 0);
  if (keyClick.querySelector('.activeLetter').textContent.length < 2) {
    addChar(keyClick.querySelector('.activeLetter').textContent);
  }
  if (keyClickClass === 'ShiftLeft' || keyClickClass === 'ShiftRight') {
    setTimeout(() => {
      shifting();
      setTimeout(() => {
        unshifting();
      }, 500);
    }, 0);
  }
  if (keyClick.querySelector('.activeLetter').textContent === 'Enter') {
    addChar('\n');
  }
  if (keyClick.querySelector('.activeLetter').textContent === 'Backspace') {
    bsHandler();
  }
  if (keyClick.querySelector('.activeLetter').textContent === 'Del') {
    delHandler();
  }
  if (keyClick.querySelector('.activeLetter').textContent === 'Tab') {
    addChar('    ');
  }
  if (keyClick.querySelector('.activeLetter').textContent === 'Left') {
    outputArea.selectionStart -= 1;
    outputArea.selectionEnd -= 1;
  }
  if (keyClick.querySelector('.activeLetter').textContent === 'Right') {
    outputArea.selectionEnd += 1;
    outputArea.selectionStart += 1;
  }
  if (keyClick.querySelector('.activeLetter').textContent === 'Up') {
    addChar('Up');
  }
  if (keyClick.querySelector('.activeLetter').textContent === 'Down') {
    addChar('Down');
  }
});

if (prevLang === 'ru') {
  langChange();
}


document.addEventListener('keydown', (event) => {
  try {
    const target = document.querySelector([`.${event.code}`]);
    target.classList.add('active');
    pressedKeys.add(event.code);
    let q = 0;
    pressedKeys.forEach(() => {
      q += 1;
    });
    if (pressedKeys.has('ControlLeft') && pressedKeys.has('AltLeft') && q === 2) {
      langChange();
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      shifting();
    }
    event.preventDefault();
    const input = document.querySelector([`.${event.code} .activeLetter`]).textContent;
    if (input === 'Enter') {
      outputArea.value += '\n';
    }
    if (input === 'Backspace') {
      bsHandler();
    }
    if (input === 'Del') {
      delHandler();
    }
    if (input === 'Tab') {
      addChar('    ');
    }
    if (input === 'Left') {
      outputArea.selectionStart -= 1;
      outputArea.selectionEnd -= 1;
    }
    if (input === 'Right') {
      outputArea.selectionEnd += 1;
      outputArea.selectionStart += 1;
    }
    if (input === 'Up') {
      addChar('Up');
    }
    if (input === 'Down') {
      addChar('Down');
    }
    if (input.length < 2) addChar(input);
  } catch (err) {
    return (err);
  }
  return (true);
});


document.addEventListener('keyup', (event) => {
  try {
    const target = document.querySelector([`.${event.code}`]);
    target.classList.remove('active');
    pressedKeys.delete(event.code);
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      unshifting();
    }
  } catch (err) {
    return (err);
  }
  return (true);
});
