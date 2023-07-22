// import './b-input-field.scss';
// import './__calendar/calendar.scss';

import './__calendar/calendar';

console.log('hi im input');

for (let i = 0; i < document.getElementsByClassName('b-input-field_is-dropdown').length; i++) {
  const inputBlock = document.getElementsByClassName('b-input-field_is-dropdown')[i];

  const inputWrapper = inputBlock.querySelector('.b-input-field__e-input-wrapper');
  // const dropdownIcon = inputBlock.querySelector('.b-input-field__e-icon_is-chevron-icon');
  const dropdownContent = inputBlock.querySelector('.b-input-field__e-dropdown');
  const input = inputBlock.querySelector('.b-input-field__e-input_is-dropdown');
  dropdownContent.hidden = true;
  // input.disabled = true;

  let enabled = false;
  dropdownContent.style.width = `${input.offsetWidth}px`;
  inputWrapper.onpointerdown = function (event) {
    event.preventDefault();
    enabled = !enabled;
    // dropdownContent.style.display = enabled ? '' : 'none';
    input.classList.toggle('b-input-field__e-input_active-dropdown');
    dropdownContent.hidden = !enabled;

    document.addEventListener('pointerdown', handleDocumentClick, { passive: true });
  };

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
