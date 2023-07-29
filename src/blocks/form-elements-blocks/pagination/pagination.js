export class Pagination {
  constructor(currentPage, pageCount, pageElementsCount,
    maxPageElementsCount, totalElementsCount) {
    this.pagination = document.querySelector('.b-pagination');

    this.initPagination(currentPage, pageCount, pageElementsCount,
      maxPageElementsCount, totalElementsCount);
  }

  clearContent() {
    const buttons = this.pagination.querySelector('.b-pagination__e-buttons-container');
    // buttons.textContent = '';
    buttons.replaceChildren();
  }

  initPagination(currentPage, pageCount, pageElementsCount,
    maxPageElementsCount, totalElementsCount) {
    this.currentPage = currentPage;
    this.pageCount = pageCount;
    this.pageElementsCount = pageElementsCount;
    this.maxPageElementsCount = maxPageElementsCount;
    this.totalElementsCount = totalElementsCount;

    this.clearContent();

    this.initButtons(pageCount, currentPage);
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
      const {
        pageCount, pageElementsCount,
        maxPageElementsCount, totalElementsCount,
      } = this;
      this.initPagination(pageNumber, pageCount,
        pageElementsCount, maxPageElementsCount, totalElementsCount);
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
      const {
        currentPage, pageCount, pageElementsCount,
        maxPageElementsCount, totalElementsCount,
      } = this;
      this.initPagination(currentPage + 1, pageCount,
        pageElementsCount, maxPageElementsCount, totalElementsCount);
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
      const {
        currentPage, pageCount, pageElementsCount,
        maxPageElementsCount, totalElementsCount,
      } = this;
      this.initPagination(currentPage - 1, pageCount,
        pageElementsCount, maxPageElementsCount, totalElementsCount);
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

  dispose() {

  }
}

// init buttons type 2 whe one can return to page 1 in the middle
// initButtons(pageCount, currentPage) {
//     if (pageCount === 1) {
//       this.addPageButton(1, true);
//     } else {
//       let startPage;
//       let endPage;
//
//       if (pageCount <= 6) {
//         startPage = 1;
//         endPage = pageCount;
//       } else {
//         if (currentPage <= 3) {
//           startPage = 1;
//           endPage = 5;
//         } else if (currentPage >= pageCount - 2) {
//           startPage = pageCount - 4;
//           endPage = pageCount;
//         } else {
//           startPage = currentPage - 1;
//           endPage = currentPage + 1;
//         }
//       }
//
//       if (startPage > 1) {
//         if (startPage === 3) {
//           this.addPageButton(2, false);
//         } else {
//           this.addPageButton(1, false);
//           if (startPage > 2) {
//             this.addThreeDots();
//           }
//         }
//       }
//
//       for (let i = startPage; i <= endPage; i++) {
//         const isCurrent = i === currentPage;
//         this.addPageButton(i, isCurrent);
//       }
//
//       if (endPage < pageCount) {
//         if (endPage === pageCount - 2) {
//           this.addPageButton(pageCount - 1, false);
//         } else {
//           if (endPage < pageCount - 1) {
//             this.addThreeDots();
//           }
//           this.addPageButton(pageCount, false);
//         }
//       }
//
//       if (currentPage > 1) {
//         this.addPreviousPageButton();
//       }
//
//       if (currentPage < pageCount) {
//         this.addNextPageButton();
//       }
//     }
//   }
