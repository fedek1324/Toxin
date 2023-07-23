import { Calendar } from './blocks/form-elements-blocks/input-field/__calendar/calendar';
import { InputField } from './blocks/form-elements-blocks/input-field/b-input-field';
import { Counter } from './blocks/form-elements-blocks/counter/b-counter';

Calendar.initCalendars();
Counter.initCounters();
InputField.initDropdowns(); // hides already inited nodes
