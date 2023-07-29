export class InputField {
  static initDropdowns() {
    for (let i = 0; i < document.getElementsByClassName('b-input-field_is-dropdown').length; i++) {
      const inputBlock = document.getElementsByClassName('b-input-field_is-dropdown')[i];

      const inputWrapper = inputBlock.querySelector('.b-input-field__e-input-wrapper');
      // const dropdownIcon = inputBlock.querySelector('.b-input-field__e-icon_is-chevron-icon');
      const dropdownContent = inputBlock.querySelector('.b-input-field__e-dropdown');
      const input = inputBlock.querySelector('.b-input-field__e-input_is-dropdown');
      const defaultText = input.value.valueOf();

      if (inputBlock.matches('.b-input-field_has-counters-text-no-buttons')) {
        setCounterValuesAsText();
        dropdownContent.addEventListener('pointerdown', setCounterValuesAsText, { passive: true });
      }

      if (inputBlock.matches('.b-input-field_has-counters-text-and-apply-button')) {
        const handleApplyButtonOnPointerDown = (event) => {
          setCounterValuesAsText();
          closeDropdown();
        };

        const applyButton = createButton('Применить',
          handleApplyButtonOnPointerDown, ['b-button', 'b-button_is-text']);

        const buttonsContainer = document.createElement('DIV');
        buttonsContainer.classList.add('b-input-field__e-dropdown-one-button-container');
        buttonsContainer.append(applyButton);

        dropdownContent.append(buttonsContainer);
      }

      if (inputBlock.matches('.b-input-field_has-counters-text-has-apply-clear-buttons')) {
        const handleApplyButtonOnPointerDown = (event) => {
          setCounterValuesAsText();
          closeDropdown();
        };

        const handleClearButtonPointerDown = (event) => {
          setInputFieldDefaultText();
        };

        const applyButton = createButton('Применить',
          handleApplyButtonOnPointerDown, ['b-button', 'b-button_is-text']);

        const clearButton = createButton('Очистить',
          handleClearButtonPointerDown, ['b-button', 'b-button_is-text']);

        const buttonsContainer = document.createElement('DIV');
        buttonsContainer.classList.add('b-input-field__e-dropdown-buttons-container');
        buttonsContainer.append(applyButton);
        buttonsContainer.prepend(clearButton);

        dropdownContent.append(buttonsContainer);
      }

      if (inputBlock.dataset.applyCountersTextByDefault
      || inputBlock.dataset.applyCountersTextByDefault === '') {
        setCounterValuesAsText();
      }

      dropdownContent.hidden = true;
      input.setAttribute('readonly', '');
      let enabled = false;
      dropdownContent.style.width = `${input.offsetWidth}px`;
      inputWrapper.onpointerdown = handleInputFieldPointerDown;

      if (inputBlock.dataset.openByDefault || inputBlock.dataset.openByDefault === '') {
        handleInputFieldPointerDown();
      }

      function setInputFieldDefaultText() {
        input.value = defaultText;
      }

      function handleInputFieldPointerDown(event) {
        event?.preventDefault();
        enabled = !enabled;
        input.classList.toggle('b-input-field__e-input_active-dropdown');
        dropdownContent.hidden = !enabled;

        document.addEventListener('pointerdown', handleDocumentPoinerDown, { passive: true });
      }

      function createButton(text, callback, classes) {
        const button = document.createElement('BUTTON');
        button.classList.add(...classes);

        const handleOnPointerDown = callback;

        button.addEventListener('pointerdown', handleOnPointerDown);

        const buttonText = document.createElement('SPAN');
        buttonText.classList.add('b-button__e-text');
        buttonText.textContent = text;
        button.append(buttonText);

        return button;
      }

      function setCounterValuesAsText() {
        input.value = '';
        const counters = dropdownContent.querySelectorAll('.b-counter');
        counters.forEach((counter) => {
          const counterTextEl = counter.querySelector('.b-counter__e-text');
          const counterText = counterTextEl.textContent;
          const counterValueEl = counter.querySelector('.b-counter__e-value');
          const counterValue = +counterValueEl.textContent;
          input.value += `${formatWords(counterValue, counterText)}, `;
        });
        input.value = input.value.slice(0, -2); // remove space and comma in the end
      }

      function handleDocumentPoinerDown(event) {
        const isInside = inputBlock.contains(event.target);
        if (!isInside) {
          closeDropdown();
        }
      }

      function closeDropdown() {
        enabled = false;
        input.classList.remove('b-input-field__e-input_active-dropdown');
        dropdownContent.hidden = true;
        document.removeEventListener('pointerdown', handleDocumentPoinerDown, { passive: true });
      }

      function formatWords(num, wordArg) {
        const word = wordArg.toLowerCase();
        let ending = '';
        if (word === 'спальни') {
          if (num === 1 || (num > 20 && num % 10 === 1)) {
            ending = 'спальня';
          } else if (num > 1 && num < 5) {
            ending = 'спальни';
          } else {
            ending = 'спален';
          }
        }
        if (word === 'кровати') {
          if (num === 1 || (num > 20 && num % 10 === 1)) {
            ending = 'кровать';
          } else if (num > 1 && num < 5) {
            ending = 'кровати';
          } else {
            ending = 'кроватей';
          }
        }
        if (word === 'ванные комнаты') {
          if (num === 1 || (num > 20 && num % 10 === 1)) {
            ending = 'ванная комната';
          } else if (num > 1 && num < 5) {
            ending = 'ванные комнаты';
          } else {
            ending = 'ванных комнат';
          }
        }

        if (word === 'взрослые') {
          if (num === 1 || (num > 20 && num % 10 === 1)) {
            ending = 'взрослый';
          } else if (num > 1 && num < 5) {
            ending = 'взрослых';
          } else {
            ending = 'взрослых';
          }
        }

        if (word === 'дети') {
          if (num === 1 || (num > 20 && num % 10 === 1)) {
            ending = 'ребёнок';
          } else if (num > 1 && num < 5) {
            ending = 'детей';
          } else {
            ending = 'детей';
          }
        }

        if (word === 'младенцы') {
          if (num === 1 || (num > 20 && num % 10 === 1)) {
            ending = 'младенец';
          } else if (num > 1 && num < 5) {
            ending = 'младенцев';
          } else {
            ending = 'младенцев';
          }
        }
        return `${num} ${ending}`;
      }
    }
  }
}
