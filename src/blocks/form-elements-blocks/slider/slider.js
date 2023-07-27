export class Slider {
  constructor(sliderElement, minValue, maxValue, step) {
    this.sliderElement = sliderElement;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.step = step;

    this.width = sliderElement.querySelector('.b-slider__e-slider').offsetWidth;

    this.thumbsPositions = [0.30, 0.60]; // for initial position and calculations

    this.initThumb(sliderElement, 0);
    this.initThumb(sliderElement, 1);
  }

  initThumb(sliderElement, num) {
    const thumb = sliderElement.querySelectorAll('.b-slider__e-thumb')[num];
    thumb.style.left = `${this.thumbsPositions[num] * this.width}px`;
    let shiftX;

    const handleThumbPointerMove = (event) => {
      let newLeft = event.clientX - shiftX - sliderElement.getBoundingClientRect().left;

      if (newLeft < 0) {
        newLeft = 0;
      }

      if (num === 0) {
        const rightThumb = sliderElement.querySelectorAll('.b-slider__e-thumb')[1];
        const rightPos = +rightThumb.style.left.slice(0, -2);
        if (newLeft > rightPos - rightThumb.offsetWidth) {
          newLeft = rightPos - rightThumb.offsetWidth;
        }
      } else if (num === 1) {
        const leftThumb = sliderElement.querySelectorAll('.b-slider__e-thumb')[0];
        const leftPos = +leftThumb.style.left.slice(0, -2);
        if (newLeft < leftPos + leftThumb.offsetWidth) {
          newLeft = leftPos + leftThumb.offsetWidth;
        }
      }

      const rightEdge = sliderElement.offsetWidth - thumb.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      thumb.style.left = `${newLeft}px`;
      this.thumbsPositions[num] = newLeft / rightEdge;
      console.log(this.thumbsPositions)
    };

    const handleThumbPointerUp = (event) => {
      thumb.removeEventListener('pointermove', handleThumbPointerMove);
      thumb.removeEventListener('pointerup', handleThumbPointerUp);
    };


    const handleThumbPointerDown = (event) => {
      shiftX = event.clientX - thumb.getBoundingClientRect().left;
      thumb.setPointerCapture(event.pointerId);
      thumb.addEventListener('pointermove', handleThumbPointerMove);
      thumb.addEventListener('pointerup', handleThumbPointerUp);
    };

    thumb.addEventListener('pointerdown', handleThumbPointerDown);
  }

  static initSliders() {
    const sliders = document.querySelectorAll('.b-slider');
    for (let i = 0; i < sliders.length; i += 1) {
      const slider = sliders[i];
      new Slider(slider, 0, 15000);
    }
  }
}
