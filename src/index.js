import { Calendar } from './blocks/form-elements-blocks/input-field/__calendar/calendar';
import { InputField } from './blocks/form-elements-blocks/input-field/b-input-field';
import { Counter } from './blocks/form-elements-blocks/counter/b-counter';
import { LikeButton } from "./blocks/form-elements-blocks/like-button/like-button";
import { RateButton } from "./blocks/form-elements-blocks/rate-button/rate-button";
import { Slider } from "./blocks/form-elements-blocks/slider/slider";
import { Pagination } from "./blocks/form-elements-blocks/pagination/pagination";

Calendar.initCalendars();
Counter.initCounters();
LikeButton.initLikeButtons();
RateButton.initRateButtons();
Slider.initSliders();

let currentPage = 1;
let currentPageElementsCount = 12;

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
