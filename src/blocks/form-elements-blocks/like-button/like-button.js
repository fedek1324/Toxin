export class LikeButton {
  static initLikeButtons() {
    const likeButtons = document.querySelectorAll('.b-like-button');
    for (let i = 0; i < likeButtons.length; i += 1) {
      const likeButton = likeButtons[i];
      const handleLikeButtonPointerDown = (event) => {
        likeButton.classList.toggle('b-like-button_disabled');
        const textNode = likeButton.querySelector('.b-like-button__e-counter-text');
        if (likeButton.matches('.b-like-button_disabled')) {
          textNode.textContent = +textNode.textContent - 1;
        } else {
          textNode.textContent = +textNode.textContent + 1;
        }
      };

      likeButton.addEventListener('pointerdown', handleLikeButtonPointerDown);
    }
  }
}
