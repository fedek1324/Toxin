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


// const pagination = new Pagination(1, 1,
//   12, 12, 12);
// const pagination2 = new Pagination(1, 3,
//   12, 12, 36);
const pagination3 = new Pagination(1, 7,
  12, 12, 12 * 15);
InputField.initDropdowns(); // hides already inited nodes
