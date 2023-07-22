export class InputField {
  static initDropdowns() {
    for (let i = 0; i < document.getElementsByClassName('b-input-field_is-dropdown').length; i++) {
      const inputBlock = document.getElementsByClassName('b-input-field_is-dropdown')[i];

      const inputWrapper = inputBlock.querySelector('.b-input-field__e-input-wrapper');
      // const dropdownIcon = inputBlock.querySelector('.b-input-field__e-icon_is-chevron-icon');
      const dropdownContent = inputBlock.querySelector('.b-input-field__e-dropdown');
      const input = inputBlock.querySelector('.b-input-field__e-input_is-dropdown');
      dropdownContent.hidden = true;
      input.setAttribute('readonly', '');
      let enabled = false;
      dropdownContent.style.width = `${input.offsetWidth}px`;
      inputWrapper.onpointerdown = onclick;

      if(inputBlock.dataset.openByDefault || inputBlock.dataset.openByDefault === '') {
        onclick();
      }

      function onclick(event) {
        event?.preventDefault();
        enabled = !enabled;
        input.classList.toggle('b-input-field__e-input_active-dropdown');
        dropdownContent.hidden = !enabled;

        document.addEventListener('pointerdown', handleDocumentClick, { passive: true });
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
    }
  }
}