export class Pagination {
  constructor(currentPage, pageCount, pageElementFrom,
              pageElementTo, totalElementsCount, pageChangeCallback) {
    this.pagination = document.querySelector('.b-pagination');

    this.pageChangeCallback = pageChangeCallback;

    this.setPagination(currentPage, pageCount, pageElementFrom,
                pageElementTo, totalElementsCount);
  }

  removeDefaultText() {
    const descriptionEl = this.pagination.querySelector('.b-pagination__e-default-description');
    descriptionEl?.remove();
  }

  setCurrentPageElementsRangeText(from, to) {
    this.removeDefaultText();
    const rangeEl = this.pagination.querySelector('.b-pagination__e-on-page-elements-count');
    rangeEl.textContent = `${from} - ${to}`;
  }

  removeButtons() {
    const buttons = this.pagination.querySelector('.b-pagination__e-buttons-container');
    // buttons.textContent = '';
    buttons.replaceChildren();
  }

  setPagination(currentPage, pageCount, pageElementFrom,
                pageElementTo, totalElementsCount) {
    this.currentPage = currentPage;
    this.pageCount = pageCount;
    this.pageElementFrom = pageElementFrom;
    this.pageElementTo = pageElementTo;
    this.totalElementsCount = totalElementsCount;

    this.removeButtons();

    this.initButtons(pageCount, currentPage);
    this.initDescription();
  }

  initDescription() {
    this.removeDefaultText();

    const {
      pageElementFrom,
      pageElementTo, totalElementsCount,
    } = this;

    this.setCurrentPageElementsRangeText(pageElementFrom, pageElementTo);

    const unionSelector = '.b-pagination__e-union-text';
    const totalElementsSelector = '.b-pagination__e-total-elements-count';
    const finishingTextSelector = '.b-pagination__e-finishing-text';

    const unuionEl = this.pagination.querySelector(unionSelector);
    const totalEl = this.pagination.querySelector(totalElementsSelector);
    const finishingTextEl = this.pagination.querySelector(finishingTextSelector);

    unuionEl.textContent = ' из ';
    totalEl.textContent = totalElementsCount;
    finishingTextEl.textContent = ' вариантов аренды';

  }

  initButtons(pageCount, currentPage) {
    if (pageCount === 1) {
      this.addPageButton(1, true);
    } else if (pageCount < 6) {
      for (let i = 0; i < pageCount; i += 1) {
        const isCurrent = (i + 1) === currentPage;
        this.addPageButton(i + 1, isCurrent);
      }
      if (currentPage === 1) {
        this.addNextPageButton();
      } else if (currentPage === pageCount) {
        this.addPreviousPageButton();
      } else {
        this.addNextPageButton();
        this.addPreviousPageButton();
      }
    } else if (currentPage === 1) {
      this.addPageButton(1, true);
      this.addPageButton(2, false);
      this.addPageButton(3, false);
      this.addThreeDots();
      this.addPageButton(pageCount, false);

      this.addNextPageButton();
    } else if (currentPage < pageCount - 3) {
      for (let i = 0; i < 3; i += 1) {
        const pageNumber = currentPage - 1 + i;
        const isCurrent = pageNumber === currentPage;
        this.addPageButton(pageNumber, isCurrent);
      }
      this.addThreeDots();
      this.addPageButton(pageCount, false);
      this.addNextPageButton();
      this.addPreviousPageButton();
    } else if (currentPage < pageCount - 1) {
      for (let i = pageCount - 4; i <= pageCount; i += 1) {
        const isCurrent = i === currentPage;
        this.addPageButton(i, isCurrent);
      }
      this.addNextPageButton();
      this.addPreviousPageButton();
    } else if (currentPage === pageCount - 1) {
      this.addPageButton(1, false);
      this.addThreeDots();
      for (let i = pageCount - 2; i <= pageCount; i++) {
        this.addPageButton(i, i === pageCount - 1);
      }
      this.addNextPageButton();
      this.addPreviousPageButton();
    } else {
    // lastButton
      this.addPageButton(1, false);
      this.addThreeDots();
      for (let i = pageCount - 2; i <= pageCount; i++) {
        this.addPageButton(i, i === pageCount);
      }
      this.addPreviousPageButton();
    }
  }

  addPageButton(pageNumber, isCurrent) {
    const newButton = document.createElement('BUTTON');
    newButton.classList.add('b-pagination__e-button');
    if (isCurrent) {
      newButton.classList.add('b-pagination__e-button_selected');
    }
    newButton.textContent = pageNumber;

    const handlePageButtonOnPointerDown = (event) => {
      event.preventDefault();
      this.pageChangeCallback(pageNumber, event);
    };

    newButton.addEventListener('pointerdown', handlePageButtonOnPointerDown);

    const container = this.pagination.querySelector('.b-pagination__e-buttons-container');
    container.append(newButton);
  }

  addNextPageButton() {
    const newButton = document.createElement('BUTTON');
    newButton.classList.add('b-pagination__e-next-page-button');

    const container = this.pagination.querySelector('.b-pagination__e-buttons-container');
    container.append(newButton);

    const handleNextPageButtonOnPointerDown = (event) => {
      event.preventDefault();
      this.pageChangeCallback(this.currentPage + 1, event);
    };

    newButton.addEventListener('pointerdown', handleNextPageButtonOnPointerDown);
  }

  addPreviousPageButton() {
    const newButton = document.createElement('BUTTON');
    newButton.classList.add('b-pagination__e-previous-page-button');

    const container = document.querySelector('.b-pagination__e-buttons-container');
    container.prepend(newButton);

    const handlePreviousPageButtonOnPointerDown = (event) => {
      event.preventDefault();
      this.pageChangeCallback(this.currentPage - 1, event);
    };

    newButton.addEventListener('pointerdown', handlePreviousPageButtonOnPointerDown);
  }

  addThreeDots() {
    const dots = document.createElement('SPAN');
    dots.classList.add('b-pagination__e-three-dots');
    dots.textContent = '...';

    const container = document.querySelector('.b-pagination__e-buttons-container');
    container.append(dots);
  }
}