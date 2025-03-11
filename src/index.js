import { Calendar } from './blocks/form-elements-blocks/input-field/__calendar/calendar';
import { InputField } from './blocks/form-elements-blocks/input-field/b-input-field';
import { Counter } from './blocks/form-elements-blocks/counter/b-counter';
import { LikeButton } from './blocks/form-elements-blocks/like-button/like-button';
import { RateButton } from './blocks/form-elements-blocks/rate-button/rate-button';
import { Slider } from './blocks/form-elements-blocks/slider/slider';
import { Pagination } from './blocks/form-elements-blocks/pagination/pagination';
import { ExpandableCheckboxList } from './blocks/form-elements-blocks/expandable-checkbox-list/b-expandable-checkbox-list';
import { Carousel } from './blocks/cards-blocks/carousel/carousel';
import { Header } from './blocks/headers-and-footers-blocks/header/header';

Header.initHeaders();
Calendar.initCalendars();
Counter.initCounters();
LikeButton.initLikeButtons();
RateButton.initRateButtons();
Slider.initSliders();
ExpandableCheckboxList.initExpandableCheckboxLists();
Carousel.initCarousels();

let currentPage = 1;
const currentPageElementsCount = 12;

const maxElementsPerPage = 12;
const pageCount = 15;
const totalElements = 12 * 15;

const initPagination = (currentPageArg, pageCountArg,
  currentPageElementsCountArg, totalElementsCount, pageChangeCallback) =>
{
  const pageElFrom = maxElementsPerPage * (currentPageArg - 1) + 1;
  const pageElementTo = pageElFrom + currentPageElementsCountArg - 1; // including last

  new Pagination(currentPageArg, pageCountArg,
    pageElFrom, pageElementTo, totalElementsCount,
    pageChangeCallback);
};

const pageChangeCallback = (currentPageArg) => {
  console.log(`new page ${currentPageArg}`);
  currentPage = currentPageArg;

  initPagination(currentPageArg, pageCount,
    currentPageElementsCount, totalElements, pageChangeCallback);
};

initPagination(currentPage, pageCount,
  currentPageElementsCount, totalElements, pageChangeCallback);

InputField.initDropdowns(); // hides already inited nodes (eg counters)

// init scroll line width
function getScrollbarWidth() {
  // Create a temporary div with a scrollbar
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  // Create an inner div
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculate the width difference
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Clean up
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

// Set the scrollbar width as a CSS variable on the root element
document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
