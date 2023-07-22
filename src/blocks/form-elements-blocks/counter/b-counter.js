export class Counter {
  static initCounters() {
    function checkEdgeValues() {

    }
    // TODO FIX CHECKS
    const counters = document.querySelectorAll('.b-counter');
    counters.forEach((counter) => {
      const minusBtn = counter.querySelector('.b-counter__e-button_is-minus');
      const plusBtn = counter.querySelector('.b-counter__e-button_is-plus');
      const value = counter.querySelector('.b-counter__e-value');
      const counterMax = counter.dataset.maxValue;
      const counterMin = counter.dataset.minValue;
      if (+value.textContent <= counterMin) {
        value.textContent = counterMin;
        minusBtn.classList.add('.b-counter__e-button_disabled');
        minusBtn.style.opacity = "0.38";
        minusBtn.disabled = true;
      }
      if (+value.textContent >= counterMax) {
        value.textContent = counterMax;
        minusBtn.classList.add('.b-counter__e-button_disabled');
        minusBtn.disabled = true;
      }
      minusBtn.onpointerdown = () => {
        if (+value.textContent <= counterMin) {
          value.textContent = counterMin;
          minusBtn.classList.add('b-counter__e-button_disabled');
          minusBtn.disabled = true;
        } else {
          value.textContent = +value.textContent - 1;
          minusBtn.classList.remove('b-counter__e-button_disabled');
          minusBtn.disabled = false;
        }
      };
      plusBtn.onpointerdown = () => {
        if (+value.textContent >= counterMax) {
          value.textContent = counterMax;
          plusBtn.classList.add('b-counter__e-button_disabled');
          plusBtn.disabled = true;
        } else {
          value.textContent = +value.textContent + 1;
          plusBtn.classList.remove('b-counter__e-button_disabled');
          plusBtn.disabled = false;
        }
      };
    });
  }
}
