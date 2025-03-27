export class Counter {
  static initCounters() {
    // Helper function to disable buttons and update value
    function updateCounterValue(counter, value, amount) {
      const counterMax = +counter.dataset.maxValue;
      const counterMin = +counter.dataset.minValue;
      const currentValue = +value.textContent; // Parse the current value as a number
      const newValue = Math.min(Math.max(currentValue + amount, counterMin), counterMax);
      const minusBtn = counter.querySelector('.b-counter__e-button_is-minus');
      const plusBtn = counter.querySelector('.b-counter__e-button_is-plus');

      value.textContent = newValue.toString(); // Convert the newValue back to string
      minusBtn.disabled = newValue <= counterMin;
      minusBtn.style.opacity = newValue <= counterMin ? '0.38' : '1';
      minusBtn.classList.toggle('b-counter__e-button_disabled', newValue <= counterMin);

      plusBtn.disabled = newValue >= counterMax;
      plusBtn.classList.toggle('b-counter__e-button_disabled', newValue >= counterMax);
    }

    const counters = document.querySelectorAll('.b-counter');
    counters.forEach((counter) => {
      const minusBtn = counter.querySelector('.b-counter__e-button_is-minus');
      const plusBtn = counter.querySelector('.b-counter__e-button_is-plus');
      const value = counter.querySelector('.b-counter__e-value');
      const initialValue = +value.textContent; // Parse the initial value as a number

      minusBtn.addEventListener('click', (e) => {
        // to not reload page when in form element
        e.preventDefault();
        updateCounterValue(counter, value, -1);
      });

      plusBtn.addEventListener('click', (e) => {
        // to not reload page when in form element
        e.preventDefault();
        updateCounterValue(counter, value, 1);
      });

      // Initialize counter value based on initial value and limits
      updateCounterValue(counter, value, 0);
    });
  }
}
