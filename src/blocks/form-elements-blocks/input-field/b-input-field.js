export class InputField {

  static removeInputFocusOnOntherInputClick() {
    const inputs = document.querySelectorAll('.b-input-field__e-input');
    document.body.addEventListener('click', (e) => {
      // console.log(e.target.closest('.b-input-field'));
      if (e.target.closest('.b-input-field')) {
        // if click was in input block
        console.log('includes input');
        for (let i = 0; i < inputs.length; i += 1) {
          const input = inputs[i];
          input.blur();
        }
      }
    }, { passive: true, capture: true });
  }
  static initDropdowns() {
    // InputField.removeInputFocusOnOntherInputClick();

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
        const handleApplyButtonClick = (event) => {
          setCounterValuesAsText();
          closeDropdown();
        };

        const applyButton = createButton('Применить',
          handleApplyButtonClick, ['b-button', 'b-button_is-text']);

        const buttonsContainer = document.createElement('DIV');
        buttonsContainer.classList.add('b-input-field__e-dropdown-one-button-container');
        buttonsContainer.append(applyButton);

        dropdownContent.append(buttonsContainer);
      }

      if (inputBlock.matches('.b-input-field_has-counters-text-has-apply-clear-buttons')) {
        const handleApplyButtonOnClick = (event) => {
          setCounterValuesAsText();
          closeDropdown();
        };

        const handleClearButtonClick = (event) => {
          setInputFieldDefaultText();
        };

        const applyButton = createButton('Применить',
          handleApplyButtonOnClick, ['b-button', 'b-button_is-text']);

        const clearButton = createButton('Очистить',
          handleClearButtonClick, ['b-button', 'b-button_is-text']);

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
      let dropdownEnabled = false;
      dropdownContent.style.width = `${input.offsetWidth}px`;
      inputWrapper.onclick = handleInputFieldClick;

      if (inputBlock.dataset.openByDefault || inputBlock.dataset.openByDefault === '') {
        handleInputFieldClick();
      }

      function setInputFieldDefaultText() {
        input.value = defaultText;
      }

      function handleInputFieldClick(event) {
        // event?.preventDefault();
        dropdownEnabled = !dropdownEnabled;
        input.classList.toggle('b-input-field__e-input_active-dropdown');
        dropdownContent.hidden = !dropdownEnabled;

        document.addEventListener('click', handleDocumentClick, { passive: true });
      }

      function createButton(text, callback, classes) {
        const button = document.createElement('BUTTON');
        button.classList.add(...classes);

        const handleClick = callback;

        button.addEventListener('click', handleClick);

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

      function handleDocumentClick(event) {
        const isInside = inputBlock.contains(event.target);
        if (!isInside) {
          closeDropdown();
        }
      }

      function closeDropdown() {
        dropdownEnabled = false;
        input.classList.remove('b-input-field__e-input_active-dropdown');
        dropdownContent.hidden = true;
        document.removeEventListener('click', handleDocumentClick, { passive: true });
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
