import { Calendar } from "@/blocks/form-elements-blocks/input-field/__calendar/calendar";
import { InputField } from "@/blocks/form-elements-blocks/input-field/b-input-field";
import { Counter } from "@/blocks/form-elements-blocks/counter/b-counter";

// import './blocks/logo/logo.scss';

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('hi');

  // let styleW = require('@/blocks/logo/logo_type_watermark.scss');
// var fileref = document.createElement("link");
// fileref.rel = "stylesheet";
// fileref.type = "text/css";
// var file = styleW;
// fileref.href = file;
// document.getElementsByTagName("head")[0].appendChild(fileref);

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
// import '@/blocks/logo/logo.scss';

