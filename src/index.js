import { Calendar } from './blocks/form-elements-blocks/input-field/__calendar/calendar';
import { InputField } from './blocks/form-elements-blocks/input-field/b-input-field';
import { Counter } from './blocks/form-elements-blocks/counter/b-counter';
import { LikeButton } from "./blocks/form-elements-blocks/like-button/like-button";
import { RateButton } from "./blocks/form-elements-blocks/rate-button/rate-button";
import { Slider } from "./blocks/form-elements-blocks/slider/slider";

Calendar.initCalendars();
Counter.initCounters();
LikeButton.initLikeButtons();
RateButton.initRateButtons();
Slider.initSliders();
InputField.initDropdowns(); // hides already inited nodes
