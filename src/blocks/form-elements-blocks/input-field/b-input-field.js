export class InputField {
  static initDropdowns() {
    for (let i = 0; i < document.getElementsByClassName('b-input-field_is-dropdown').length; i++) {
      const inputBlock = document.getElementsByClassName('b-input-field_is-dropdown')[i];

      const inputWrapper = inputBlock.querySelector('.b-input-field__e-input-wrapper');
      // const dropdownIcon = inputBlock.querySelector('.b-input-field__e-icon_is-chevron-icon');
      const dropdownContent = inputBlock.querySelector('.b-input-field__e-dropdown');
      const input = inputBlock.querySelector('.b-input-field__e-input_is-dropdown');

      if (inputBlock.matches('.b-input-field_has-counters-text-no-buttons')) {
        setCounterValuesAsText();
        dropdownContent.addEventListener("pointerdown", setCounterValuesAsText, { passive: true });
      }

      if (inputBlock.matches('.b-input-field_has-counters-apply-button')) {

      }

      dropdownContent.hidden = true;
      input.setAttribute('readonly', '');
      let enabled = false;
      dropdownContent.style.width = `${input.offsetWidth}px`;
      inputWrapper.onpointerdown = onclick;

      if (inputBlock.dataset.openByDefault || inputBlock.dataset.openByDefault === '') {
        onclick();
      }

      function onclick(event) {
        event?.preventDefault();
        enabled = !enabled;
        input.classList.toggle('b-input-field__e-input_active-dropdown');
        dropdownContent.hidden = !enabled;

        document.addEventListener('pointerdown', handleDocumentClick, { passive: true });
      }

      function setCounterValuesAsText() {
        input.value = "";
        const counters = dropdownContent.querySelectorAll('.b-counter');
        counters.forEach((counter) => {
          const counterTextEl = counter.querySelector('.b-counter__e-text');
          const counterText = counterTextEl.textContent;
          const counterValueEl = counter.querySelector('.b-counter__e-value');
          const counterValue = +counterValueEl.textContent;
          input.value += `${formatWords(counterValue, counterText)}, `;
        });
      }

      function handleDocumentClick(event) {
        const isInside = inputBlock.contains(event.target);
        if (!isInside) {
          enabled = false;
          input.classList.remove('b-input-field__e-input_active-dropdown');
          dropdownContent.hidden = true;
          document.removeEventListener('pointerdown', handleDocumentClick, { passive: true });
        }
      }

      function formatWords(num, word) {
        let ending = "";
        if (word === "спальни") {
          if (num === 1 || (num > 20 && num % 10 === 1)) {
            ending = "спальня";
          } else if (num > 1 && num < 5) {
            ending = "спальни";
          } else {
            ending = "спален";
          }
        }
        if (word === "кровати") {
          if (num === 1 || (num > 20 && num % 10 === 1)) {
            ending = "кровать";
          } else if (num > 1 && num < 5) {
            ending = "кровати";
          } else {
            ending = "кроватей";
          }
        }
        if (word === "ванные комнаты") {
          if (num === 1 || (num > 20 && num % 10 === 1)) {
            ending = "ванная комната";
          } else if (num > 1 && num < 5) {
            ending = "ванные комнаты";
          } else {
            ending = "ванных комнат";
          }
        }
        return num + " " + ending;
      }
    }
  }
}
