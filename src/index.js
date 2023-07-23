import {Calendar} from "@/blocks/form-elements-blocks/input-field/__calendar/calendar";
import {InputField} from "@/blocks/form-elements-blocks/input-field/b-input-field";
import {Counter} from "@/blocks/form-elements-blocks/counter/b-counter";

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('hi');


  // doesnt work
  // function requireAll(requireContext) {
  //   return requireContext.keys().map(requireContext);
  // }
  //
  // requireAll(require.context('./blocks', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));  // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
  // requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));
});

Calendar.initCalendars();
Counter.initCounters();
InputField.initDropdowns(); // hides already inited nodes
