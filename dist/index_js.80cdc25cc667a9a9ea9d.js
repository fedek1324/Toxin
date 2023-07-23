"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index_js"],{

/***/ "./blocks/form-elements-blocks/counter/b-counter.js":
/*!**********************************************************!*\
  !*** ./blocks/form-elements-blocks/counter/b-counter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Counter: () => (/* binding */ Counter)\n/* harmony export */ });\nclass Counter {\n  static initCounters() {\n    function checkEdgeValues() {}\n    // TODO FIX CHECKS\n    const counters = document.querySelectorAll('.b-counter');\n    counters.forEach(counter => {\n      const minusBtn = counter.querySelector('.b-counter__e-button_is-minus');\n      const plusBtn = counter.querySelector('.b-counter__e-button_is-plus');\n      const value = counter.querySelector('.b-counter__e-value');\n      const counterMax = counter.dataset.maxValue;\n      const counterMin = counter.dataset.minValue;\n      if (+value.textContent <= counterMin) {\n        value.textContent = counterMin;\n        minusBtn.classList.add('.b-counter__e-button_disabled');\n        minusBtn.style.opacity = \"0.38\";\n        minusBtn.disabled = true;\n      }\n      if (+value.textContent >= counterMax) {\n        value.textContent = counterMax;\n        minusBtn.classList.add('.b-counter__e-button_disabled');\n        minusBtn.disabled = true;\n      }\n      minusBtn.onpointerdown = () => {\n        if (+value.textContent <= counterMin) {\n          value.textContent = counterMin;\n          minusBtn.classList.add('b-counter__e-button_disabled');\n          minusBtn.disabled = true;\n        } else {\n          value.textContent = +value.textContent - 1;\n          minusBtn.classList.remove('b-counter__e-button_disabled');\n          minusBtn.disabled = false;\n        }\n      };\n      plusBtn.onpointerdown = () => {\n        if (+value.textContent >= counterMax) {\n          value.textContent = counterMax;\n          plusBtn.classList.add('b-counter__e-button_disabled');\n          plusBtn.disabled = true;\n        } else {\n          value.textContent = +value.textContent + 1;\n          plusBtn.classList.remove('b-counter__e-button_disabled');\n          plusBtn.disabled = false;\n        }\n      };\n    });\n  }\n}\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/counter/b-counter.js?");

/***/ }),

/***/ "./blocks/form-elements-blocks/input-field/__calendar/calendar.js":
/*!************************************************************************!*\
  !*** ./blocks/form-elements-blocks/input-field/__calendar/calendar.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Calendar: () => (/* binding */ Calendar)\n/* harmony export */ });\nclass Calendar {\n  constructor(datePicker, isRange) {\n    this.today = new Date();\n    this.currentMonth = this.today.getMonth() + 1; // like people count\n    this.currentYear = this.today.getFullYear();\n    this.startDate = null;\n    this.endDate = null;\n    this.calendar = null;\n    this.datePickerBlock = null;\n    this.inputWrapper = null;\n    this.input = null;\n    this.isRange = isRange;\n    this.initCalendar(datePicker);\n    // Generate the calendar for the current month\n    this.generateCalendar(this.currentYear, this.currentMonth);\n    this.addCellOnClick();\n  }\n  addCloseOnDocumentClickHandlers() {\n    const handleDocumentClick = event => {\n      const isInside = this.datePickerBlock.contains(event.target);\n      if (!isInside) {\n        // console.log('outer of input block click detected. closing block')\n        this.input.classList.remove('b-input-field__e-input_active-date-picker');\n        this.calendar.classList.remove('b-input-field__e-calendar_active');\n        document.removeEventListener('pointerdown', handleDocumentClick, true);\n      }\n    };\n    document.addEventListener('pointerdown', handleDocumentClick, true);\n  }\n  initCalendar(datePicker) {\n    // Get the datepicker input element\n    this.datePickerBlock = datePicker;\n    this.inputWrapper = datePicker.querySelector('.b-input-field__e-input-wrapper');\n    this.input = datePicker.querySelector('.b-input-field__e-input');\n\n    // Create a date picker calendar\n    this.calendar = document.createElement('div');\n    this.calendar.classList.add('b-input-field__e-calendar');\n    this.datePickerBlock.append(this.calendar);\n    this.input.setAttribute('readonly', '');\n\n    // Event listener to toggle the calendar visibility\n    this.inputWrapper.addEventListener('pointerdown', event => {\n      event.preventDefault();\n      this.input.classList.toggle('b-input-field__e-input_active-date-picker');\n      this.calendar.classList.toggle('b-input-field__e-calendar_active');\n      this.addCloseOnDocumentClickHandlers();\n    });\n  }\n\n  // Function to generate the calendar HTML\n  generateCalendar(year, month) {\n    // should be waiting for addCloseOnDocumentClickHandlers proof that click was on input block\n    console.log('render calendar');\n    const firstDay = new Date(year, month - 1, 1).getDay();\n    const lastDate = new Date(year, month, 0).getDate();\n    const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();\n    // Mapping for day index, where Monday is 0 and Sunday is 6\n    const dayIndexMap = [6, 0, 1, 2, 3, 4, 5];\n    let dayCounter = 0;\n    let tbodyContent = '';\n    let weekRow = '';\n\n    // Loop for the previous month dates\n    for (let i = dayIndexMap[firstDay] - 1; i >= 0; i--) {\n      const date = daysInPreviousMonth - i;\n      weekRow += `<td class=\"b-input-field__e-date b-input-field__e-date_disabled\">${date}</td>`;\n      dayCounter += 1;\n    }\n\n    // Loop for the current month dates\n    for (let i = 1; i <= lastDate; i++) {\n      const date = i;\n      const currentDate = new Date(year, month - 1, date);\n      // Check if it's the current date\n      const isCurrentDate = currentDate.toDateString() === new Date().toDateString();\n      let dateCellClass = 'b-input-field__e-date';\n      dateCellClass += isCurrentDate ? ' b-input-field__e-date_current-date' : '';\n      weekRow += `<td class=\"${dateCellClass}\">${date}</td>`;\n      dayCounter += 1;\n      if (dayCounter === 7) {\n        tbodyContent += `<tr class=\"b-input-field__e-week-row\" >${weekRow}</tr>`;\n        weekRow = '';\n        dayCounter = 0;\n      }\n    }\n\n    // Loop for the next month dates\n    let nextMonthDate = 1;\n    while (dayCounter < 7) {\n      weekRow += `<td class=\"b-input-field__e-date b-input-field__e-date_disabled\">${nextMonthDate}</td>`;\n      dayCounter += 1;\n      nextMonthDate += 1;\n    }\n\n    // Add the last row if it is not empty\n    if (weekRow !== '') {\n      tbodyContent += `<tr class=\"b-input-field__e-week-row\">${weekRow}</tr>`;\n    }\n    const monthName = new Date(year, month - 1, 1).toLocaleString('default', {\n      month: 'long'\n    });\n    const formattedTitle = `${monthName[0].toUpperCase() + monthName.slice(1)} ${year}`;\n    this.calendar.innerHTML = `\n        <div class=\"b-input-field__e-current-month-header\">\n          <button class=\"b-input-field__e-prev-month-btn\">arrow_back</button>\n          <span class=\"b-input-field__e-current-month\">${formattedTitle}</span>\n          <button class=\"b-input-field__e-next-month-btn\">arrow_forward</button>\n        </div>\n        <table class=\"b-input-field__e-table\">\n          <thead class=\"b-input-field__e-t-head\">\n            <tr class=\"b-input-field__e-weekdays\">\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Пн</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Вт</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Ср</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Чт</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Пт</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Сб</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Вс</th>\n            </tr>\n          </thead>\n          <tbody class=\"b-input-field__e-t-body\">\n            ${tbodyContent}\n          </tbody>\n        </table>\n      `;\n    this.addMonthNavigationHandlers();\n  }\n  addMonthNavigationHandlers() {\n    // Event listeners for month navigation\n    const prevMonthBtn = this.calendar.querySelector('.b-input-field__e-prev-month-btn');\n    const nextMonthBtn = this.calendar.querySelector('.b-input-field__e-next-month-btn');\n    prevMonthBtn.addEventListener('pointerdown', event => {\n      event.preventDefault();\n      const newMonth = this.currentMonth === 1 ? 12 : this.currentMonth - 1;\n      const newYear = this.currentMonth === 1 ? this.currentYear - 1 : this.currentYear;\n      this.updateCalendar(newYear, newMonth);\n      this.highlightRange();\n    });\n    nextMonthBtn.addEventListener('pointerdown', event => {\n      event.preventDefault();\n      // waiting for addCloseOnDocumentClickHandlers proof that click was on input block\n      this.currentMonth = this.currentMonth === 12 ? 1 : this.currentMonth + 1;\n      this.currentYear = this.currentMonth === 12 ? this.currentYear + 1 : this.currentYear;\n      this.updateCalendar(this.currentYear, this.currentMonth);\n      this.highlightRange();\n    });\n  }\n\n  // Function to update the calendar body for the given month and year\n  updateCalendar(year, month) {\n    this.currentYear = year;\n    this.currentMonth = month;\n    this.generateCalendar(year, month);\n  }\n  addCellOnClick() {\n    // Event listener for date selection using event delegation\n    this.calendar.addEventListener('pointerdown', event => {\n      const cell = event.target;\n      if (cell.tagName === 'TD' && !cell.classList.contains('b-input-field__e-date_disabled')) {\n        const date = parseInt(cell.textContent, 10);\n        const selectedDate = new Date(this.currentYear, this.currentMonth - 1, date);\n        if (this.isRange) {\n          this.handleClickIfRange(selectedDate, event);\n        } else {\n          this.handleClickIfOneDate(selectedDate, event);\n        }\n      }\n    });\n  }\n  handleClickIfRange(selectedDate, event) {\n    const cell = event.target;\n    // Check if start date is not set\n    if (!this.startDate) {\n      this.startDate = selectedDate;\n      this.endDate = null;\n      cell.classList.add('b-input-field__e-date_picked');\n    } else if (this.startDate && !this.endDate) {\n      // Check if only start date is set\n      if (this.startDate < selectedDate) {\n        // ok. no swap\n        this.endDate = selectedDate;\n        cell.classList.add('b-input-field__e-date_picked');\n      } else {\n        cell.classList.add('b-input-field__e-date_picked');\n        this.endDate = this.startDate;\n        this.startDate = selectedDate;\n      }\n    } else if (this.startDate && this.endDate) {\n      // Check if both start and end dates are set\n      this.startDate = selectedDate;\n      this.endDate = null;\n      this.removeRangeAndPickedDates();\n      cell.classList.add('b-input-field__e-date_picked');\n    }\n\n    // Check if both start and end dates are set\n    if (this.startDate && this.endDate) {\n      const formattedStartDate = this.formatDate(this.startDate);\n      const formattedEndDate = this.formatDate(this.endDate);\n      this.input.value = `${formattedStartDate} - ${formattedEndDate}`;\n      this.highlightRange();\n    } else if (this.startDate && !this.endDate) {\n      const formattedStartDate = this.formatDate(this.startDate);\n      this.input.value = formattedStartDate;\n    }\n  }\n  removeRangeAndPickedDates() {\n    // Dehighlight the selected date range\n    const highlightedCells = this.calendar.querySelectorAll('.b-input-field__e-date_selected');\n    highlightedCells.forEach(cell => {\n      cell.classList.remove('b-input-field__e-date_selected');\n    });\n    const pickedCells = this.calendar.querySelectorAll('.b-input-field__e-date_picked');\n    pickedCells.forEach(cell => {\n      cell.classList.remove('b-input-field__e-date_picked');\n    });\n    const firstPickedCell = this.calendar.querySelector('.b-input-field__e-date_first');\n    firstPickedCell?.classList?.remove('b-input-field__e-date_first');\n    const secondPickedCell = this.calendar.querySelector('.b-input-field__e-date_last');\n    secondPickedCell?.classList?.remove('b-input-field__e-date_last');\n  }\n  handleClickIfOneDate(selectedDate, event) {\n    const cell = event.target;\n    const pickedDate = document.querySelector('.b-input-field__e-date_picked');\n    if (pickedDate) {\n      pickedDate.classList.remove('b-input-field__e-date_picked');\n    }\n    const formattedDate = this.formatDate(selectedDate);\n    this.input.value = formattedDate;\n    cell.classList.add('b-input-field__e-date_picked');\n  }\n  highlightRange() {\n    console.log('highlightRange');\n\n    // Highlight the selected date range\n    if (!this.startDate || !this.endDate) {\n      return;\n    }\n    console.log('highlighting');\n    const cells = this.calendar.querySelectorAll('td');\n    for (let i = 0; i < cells.length; i += 1) {\n      const cell = cells[i];\n      const cellDate = +cell.textContent;\n      let cellDateObj;\n      if (cellDate - i > 15) {\n        // we get prev month dates here\n        const jsMonth = this.currentMonth - 1; // to 0..11 format\n        const month = jsMonth === 0 ? 11 : jsMonth - 1;\n        cellDateObj = new Date(this.currentYear, month, cellDate);\n      } else if (cellDate - i < -15) {\n        // we get next month dates here\n        const jsMonth = this.currentMonth - 1; // to 0..11 format\n        const month = jsMonth === 11 ? 0 : jsMonth + 1;\n        cellDateObj = new Date(this.currentYear, month, cellDate);\n      } else {\n        const jsMonth = this.currentMonth - 1; // to 0..11 format\n        cellDateObj = new Date(this.currentYear, jsMonth, cellDate);\n      }\n      if (this.startDate.getTime() <= cellDateObj.getTime() && cellDateObj.getTime() <= this.endDate.getTime()) {\n        cell.classList.add('b-input-field__e-date_selected');\n        if (cellDateObj.getTime() === this.startDate.getTime()) {\n          cell.classList.add('b-input-field__e-date_first');\n          cell.classList.add('b-input-field__e-date_picked');\n        } else if (cellDateObj.getTime() === this.endDate.getTime()) {\n          cell.classList.add('b-input-field__e-date_last');\n          cell.classList.add('b-input-field__e-date_picked');\n        }\n      }\n    }\n  }\n\n  // Function to format the date as \"dd.mm.yyyy\"\n  formatDate(date) {\n    const day = String(date.getDate()).padStart(2, '0');\n    const month = String(date.getMonth() + 1).padStart(2, '0');\n    const year = date.getFullYear();\n    const formattedDate = date.toLocaleString('ru', {\n      day: '2-digit',\n      month: 'short'\n    });\n    if (this.isRange) {\n      return formattedDate.slice(0, -1);\n    }\n    return `${day}.${month}.${year}`;\n  }\n  static initCalendars() {\n    const singleDatePickers = document.getElementsByClassName('b-input-field_is-single-date-picker');\n    for (let i = 0; i < singleDatePickers.length; i += 1) {\n      const singleDatePicker = singleDatePickers[i];\n      singleDatePicker.disabled = true;\n      new Calendar(singleDatePicker, false);\n    }\n    const rangeDatePickers = document.getElementsByClassName('b-input-field_is-range-date-picker');\n    for (let i = 0; i < rangeDatePickers.length; i += 1) {\n      const rangeDatePicker = rangeDatePickers[i];\n      rangeDatePicker.disabled = true;\n      new Calendar(rangeDatePicker, true);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/input-field/__calendar/calendar.js?");

/***/ }),

/***/ "./blocks/form-elements-blocks/input-field/b-input-field.js":
/*!******************************************************************!*\
  !*** ./blocks/form-elements-blocks/input-field/b-input-field.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InputField: () => (/* binding */ InputField)\n/* harmony export */ });\nclass InputField {\n  static initDropdowns() {\n    for (let i = 0; i < document.getElementsByClassName('b-input-field_is-dropdown').length; i++) {\n      const inputBlock = document.getElementsByClassName('b-input-field_is-dropdown')[i];\n      const inputWrapper = inputBlock.querySelector('.b-input-field__e-input-wrapper');\n      // const dropdownIcon = inputBlock.querySelector('.b-input-field__e-icon_is-chevron-icon');\n      const dropdownContent = inputBlock.querySelector('.b-input-field__e-dropdown');\n      const input = inputBlock.querySelector('.b-input-field__e-input_is-dropdown');\n      dropdownContent.hidden = true;\n      input.setAttribute('readonly', '');\n      let enabled = false;\n      dropdownContent.style.width = `${input.offsetWidth}px`;\n      inputWrapper.onpointerdown = onclick;\n      if (inputBlock.dataset.openByDefault || inputBlock.dataset.openByDefault === '') {\n        onclick();\n      }\n      function onclick(event) {\n        event?.preventDefault();\n        enabled = !enabled;\n        input.classList.toggle('b-input-field__e-input_active-dropdown');\n        dropdownContent.hidden = !enabled;\n        document.addEventListener('pointerdown', handleDocumentClick, {\n          passive: true\n        });\n      }\n      function handleDocumentClick(event) {\n        const isInside = inputBlock.contains(event.target);\n        if (!isInside) {\n          enabled = false;\n          input.classList.remove('b-input-field__e-input_active-dropdown');\n          dropdownContent.hidden = true;\n          document.removeEventListener('pointerdown', handleDocumentClick, {\n            passive: true\n          });\n        }\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/input-field/b-input-field.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_form_elements_blocks_input_field_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/blocks/form-elements-blocks/input-field/__calendar/calendar */ \"./blocks/form-elements-blocks/input-field/__calendar/calendar.js\");\n/* harmony import */ var _blocks_form_elements_blocks_input_field_b_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blocks/form-elements-blocks/input-field/b-input-field */ \"./blocks/form-elements-blocks/input-field/b-input-field.js\");\n/* harmony import */ var _blocks_form_elements_blocks_counter_b_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/blocks/form-elements-blocks/counter/b-counter */ \"./blocks/form-elements-blocks/counter/b-counter.js\");\n\n\n\n\n// import './blocks/logo/logo.scss';\n\ndocument.addEventListener('DOMContentLoaded', event => {\n  console.log('hi');\n\n  // let styleW = require('@/blocks/logo/logo_type_watermark.scss');\n  // var fileref = document.createElement(\"link\");\n  // fileref.rel = \"stylesheet\";\n  // fileref.type = \"text/css\";\n  // var file = styleW;\n  // fileref.href = file;\n  // document.getElementsByTagName(\"head\")[0].appendChild(fileref);\n\n  // doesnt work\n  // function requireAll(requireContext) {\n  //   return requireContext.keys().map(requireContext);\n  // }\n  //\n  // requireAll(require.context('./blocks', true, /^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$/));  // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1\n  // requireAll(require.context('./pages', true, /^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$/));\n});\n\n_blocks_form_elements_blocks_input_field_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar.initCalendars();\n_blocks_form_elements_blocks_counter_b_counter__WEBPACK_IMPORTED_MODULE_2__.Counter.initCounters();\n_blocks_form_elements_blocks_input_field_b_input_field__WEBPACK_IMPORTED_MODULE_1__.InputField.initDropdowns(); // hides already inited nodes\n// import '@/blocks/logo/logo.scss';\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);