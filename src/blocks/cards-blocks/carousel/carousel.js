function handleImageSetButtonClick(event, imageUrl, carousel) {
  event.preventDefault();
  const imageDiv = carousel.querySelector('.b-carousel__e-image-div');
  imageDiv.style.backgroundImage = `url(${imageUrl})`;
}

export class Carousel {
  static initCarousels() {
    const carousels = document.querySelectorAll('.b-carousel');
    for (let i = 0; i < carousels.length; i += 1) {
      const carousel = carousels[i];
      const imagesUrlArrayString = carousel.dataset.imagesUrlArray;
      const imagesUrlArray = JSON.parse(imagesUrlArrayString);

      const imageSetDots = carousel.querySelectorAll('.b-carousel__e-image-set-dot');
      let currentImage = 0;

      if (imageSetDots.length) {
        imageSetDots[0].classList.add('b-carousel__e-image-set-dot_selected');
      }

      // const imageSetButtons = carousel.querySelectorAll('.b-carousel__e-image-set-dot');
      // for (let j = 0; j < imageSetButtons.length; j += 1) {
      //   const imageSetButton = imageSetButtons[j];
      //   imageSetButton.addEventListener('click', (event) => {
      //     const imageUrl = imagesUrlArray[j];
      //     handleImageSetButtonClick(event, imageUrl, carousel);
      //   });
      // }
      const leftButton = carousel.querySelector('.b-carousel__e-left-button-area');
      const rightButton = carousel.querySelector('.b-carousel__e-right-button-area');

      const leftButtonArrow = carousel.querySelector('.b-carousel__e-left-arrow');
      const rightButtonArrow = carousel.querySelector('.b-carousel__e-right-arrow');

      function onLeftButtonClick(event) {
        imageSetDots[currentImage].classList.remove('b-carousel__e-image-set-dot_selected');
        if (currentImage > 0) {
          currentImage -= 1;
        } else {
          currentImage = imagesUrlArray.length - 1;
        }
        imageSetDots[currentImage].classList.add('b-carousel__e-image-set-dot_selected');
        handleImageSetButtonClick(event, imagesUrlArray[currentImage], carousel);
      }

      function onRightButtonClick(event) {
        imageSetDots[currentImage].classList.remove('b-carousel__e-image-set-dot_selected');
        if (currentImage < imagesUrlArray.length - 1) {
          currentImage += 1;
        } else {
          currentImage = 0;
        }
        imageSetDots[currentImage].classList.add('b-carousel__e-image-set-dot_selected');
        handleImageSetButtonClick(event, imagesUrlArray[currentImage], carousel);
      }

      leftButton.addEventListener('click', onLeftButtonClick);
      rightButton.addEventListener('click', onRightButtonClick);
      leftButtonArrow.addEventListener('click', onLeftButtonClick);
      rightButtonArrow.addEventListener('click', onRightButtonClick);
    }
  }
}
