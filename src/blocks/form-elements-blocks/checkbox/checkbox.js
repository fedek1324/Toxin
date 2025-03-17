export class Checkbox {
  static initCheckboxes() {
    const checkboxes = document.querySelectorAll('.b-checkbox');

    checkboxes.forEach((checkbox) => {
      const newCheckbox = checkbox.querySelector('.b-checkbox__e-new-checkbox');
      const legacyCheckbox = checkbox.querySelector('.b-checkbox__e-legacy-checkbox');

      if (newCheckbox && legacyCheckbox) {
        newCheckbox.addEventListener('click', () => {
          // Toggle the checked state of the hidden checkbox
          legacyCheckbox.checked = !legacyCheckbox.checked;

          // Trigger a change event so any other listeners know the state changed
          const event = new Event('change', { bubbles: true });
          legacyCheckbox.dispatchEvent(event);
        });
      }
    });
  }
}
