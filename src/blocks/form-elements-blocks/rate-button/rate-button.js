export class RateButton {
  static initRateButtons() {
    const rateButtons = document.querySelectorAll('.b-rate-button');
    for (let i = 0; i < rateButtons.length; i += 1) {
      const rateButton = rateButtons[i];
      const starButtons = rateButton.querySelectorAll('.b-rate-button__e-star-button');
      for (let j = 0; j < starButtons.length; j += 1) {
        const starButton = starButtons[j];
        starButton.addEventListener('pointerdown', (event) =>
          handleStarButtonOnPointerDown.bind(this, event, j, starButtons)());
      }
    }

    function handleStarButtonOnPointerDown(event, starIndex, starButtons) {
      for (let i = 0; i < starButtons.length; i += 1) {
        const starButton = starButtons[i];
        if (i <= starIndex) {
          starButton.classList.add('b-rate-button__e-star-button_filled');
        } else {
          starButton.classList.remove('b-rate-button__e-star-button_filled');
        }
      }
    }
  }
}
