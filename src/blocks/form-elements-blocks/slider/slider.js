export class Slider {
  constructor(sliderElement, minValue, maxValue, step, defaultStart, defaultEnd) {
    this.sliderElement = sliderElement;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.step = step;

    this.initThumb(sliderElement, 0, defaultStart);
    this.initThumb(sliderElement, 1, defaultEnd);
  }

  isInt(value) {
    return !Number.isNaN(value) &&
      parseInt(Number(value)) == value &&
      !Number.isNaN(parseInt(value, 10));
  }

  setUIValue(value, thumbElNum) {
    const element = this.sliderElement.querySelector('.b-slider__e-current-range-text');
    const text = element.textContent;
    const indexOfDash = text.indexOf('-');
    if (this.isInt(this.step)) {
      value = Math.round(value);
    }
    let newText;
    if (thumbElNum === 0) {
      newText = `${value} ${text.slice(indexOfDash)}`;
    } else {
      newText = `${text.slice(0, indexOfDash)} - ${value}`;
    }
    element.textContent = newText;
  }

  convertPxToFraction(valuePx) {
    const thumb = this.sliderElement.querySelector('.b-slider__e-thumb');
    const rightEdge = this.sliderElement.offsetWidth - thumb.offsetWidth;
    return valuePx / rightEdge;  // rightEdge == maxLeft == maxPose of left cord
  }

  convertFractionToPx(valueFraction) {
    const thumb = this.sliderElement.querySelector('.b-slider__e-thumb');
    const rightEdge = this.sliderElement.offsetWidth - thumb.offsetWidth;
    return valueFraction * rightEdge;  // rightEdge == maxLeft == maxPose of left cord
  }


  convertFractionValueToAbsolute(valueFraction) {
    const { minValue, maxValue } = this;
    return valueFraction * (maxValue - minValue) + minValue;
  }

  convertAbsoluteValueToFraction(valueAbsolute) {
    const { minValue, maxValue } = this;
    return (valueAbsolute - minValue) / (maxValue - minValue);
  }

  checkCollisionAndFix(valueAbsolute, thumbElNum) {
    if (thumbElNum === 0) {
      const rightThumb = this.sliderElement.querySelectorAll('.b-slider__e-thumb')[1];
      const rightThumbPos = +rightThumb.style.left.slice(0, -2);

      // not exactly right thumb but left thumb but they are equal
      const maxAllowedLeft = rightThumbPos - rightThumb.offsetWidth;
      const maxAllowedLeftFraction = this.convertPxToFraction(maxAllowedLeft);
      const maxAllowedLeftAbsolute = this.convertFractionValueToAbsolute(maxAllowedLeftFraction);
      if (valueAbsolute > maxAllowedLeftAbsolute) {
        return valueAbsolute - this.step; // go one step back
      }
      return valueAbsolute;
    } if (thumbElNum === 1) {
      const leftThumb = this.sliderElement.querySelectorAll('.b-slider__e-thumb')[0];
      const leftThumbPos = +leftThumb.style.left.slice(0, -2);

      const maxAllowedLeft = leftThumbPos + leftThumb.offsetWidth;
      const maxAllowedLeftFraction = this.convertPxToFraction(maxAllowedLeft);
      const maxAllowedLeftAbsolute = this.convertFractionValueToAbsolute(maxAllowedLeftFraction);

      if (valueAbsolute < maxAllowedLeftAbsolute) {
        return valueAbsolute + this.step;
      }
      return valueAbsolute;
    }
  }

  getFractionInSteps(valueFraction, thumbElNum) {
    const { minValue, step } = this;
    const absoluteValue = this.convertFractionValueToAbsolute(valueFraction);
    const absoluteValueInStepsPositions = Math.round((absoluteValue - minValue) / step) * step + minValue;
    const newAbsolutePos =
      this.checkCollisionAndFix(absoluteValueInStepsPositions, thumbElNum);
    const newFraction = this.convertAbsoluteValueToFraction(newAbsolutePos);
    return newFraction;
  }

  setThumbPos(valueAbsolute, thumb) {
    const valueFraction = this.convertAbsoluteValueToFraction(valueAbsolute);
    const valuePx = this.convertFractionToPx(valueFraction);
    thumb.style.left = `${valuePx}px`;
  }

  initThumb(sliderElement, thumbElNum, initialPos) {
    const thumb = sliderElement.querySelectorAll('.b-slider__e-thumb')[thumbElNum];

    // style.left Can be from 0 to rightEdge
    const rightEdge = sliderElement.offsetWidth - thumb.offsetWidth;
    this.setThumbPos(initialPos, thumb);
    let shiftX;

    const handleThumbPointerMove = (event) => {

      const calculatedLeft = this.calculateLeftPx(event, shiftX, sliderElement, thumbElNum, thumb);

      const newPoseInFraction = this.convertPxToFraction(calculatedLeft);
      const appropriateFractionPose = this.getFractionInSteps(newPoseInFraction, thumbElNum);

      const newAbsolutePose = this.convertFractionValueToAbsolute(appropriateFractionPose);
      this.setUIValue(newAbsolutePose, thumbElNum);

      const newPxPose = this.convertFractionToPx(appropriateFractionPose);
      thumb.style.left = `${newPxPose}px`;
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

  calculateLeftPx(event, shiftX, sliderElement, thumbElNum, thumb) {
    let newLeft = event.clientX - shiftX - sliderElement.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    if (thumbElNum === 0) {
      const rightThumb = sliderElement.querySelectorAll('.b-slider__e-thumb')[1];
      const rightPos = +rightThumb.style.left.slice(0, -2);
      if (newLeft > rightPos - rightThumb.offsetWidth) {
        newLeft = rightPos - rightThumb.offsetWidth;
      }
    } else if (thumbElNum === 1) {
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
    return newLeft;
  }

  static initSliders() {
    const sliders = document.querySelectorAll('.b-slider');
    for (let i = 0; i < sliders.length; i += 1) {
      const slider = sliders[i];
      const sliderMinValue = +(slider.dataset.minValue ?? 0);
      const sliderMaxValue = +(slider.dataset.maxValue ?? 100);
      const sliderStep = +(slider.dataset.step ?? 1);
      const sliderDefaultStart = +(slider.dataset.defaultStart ?? 0);
      const sliderDefaultEnd = +(slider.dataset.defaultEnd ?? 100);
      new Slider(slider, sliderMinValue, sliderMaxValue, sliderStep, sliderDefaultStart, sliderDefaultEnd);
    }
  }
}
