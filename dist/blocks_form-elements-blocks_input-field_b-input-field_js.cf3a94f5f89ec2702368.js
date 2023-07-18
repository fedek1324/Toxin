/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["blocks_form-elements-blocks_input-field_b-input-field_js"],{

/***/ "./blocks/form-elements-blocks/input-field/__calendar/calendar.js":
/*!************************************************************************!*\
  !*** ./blocks/form-elements-blocks/input-field/__calendar/calendar.js ***!
  \************************************************************************/
/***/ (() => {

eval("class Calendar {\r\n  constructor(datePicker, isRange) {\r\n    this.today = new Date();\r\n    this.currentMonth = this.today.getMonth() + 1; // like people count\r\n    this.currentYear = this.today.getFullYear();\r\n\r\n    this.startDate = null;\r\n    this.endDate = null;\r\n    this.calendar = null;\r\n    this.datePickerBlock = null;\r\n    this.inputWrapper = null;\r\n    this.input = null;\r\n\r\n    this.isRange = isRange;\r\n\r\n    this.initCalendar(datePicker);\r\n    // Generate the calendar for the current month\r\n    this.generateCalendar(this.currentYear, this.currentMonth);\r\n\r\n    this.addCellOnClick();\r\n  }\r\n\r\n  addCloseOnDocumentClickHandlers() {\r\n    const handleDocumentClick = event => {\r\n      let isInside = this.datePickerBlock.contains(event.target);\r\n      if (!isInside) {\r\n        // console.log('outer of input block click detected. closing block')\r\n        this.input.classList.remove('b-input-field__e-input_active-date-picker');\r\n        this.calendar.classList.remove('b-input-field__e-calendar_active');\r\n        document.removeEventListener(\"pointerdown\", handleDocumentClick, {passive: true});\r\n      }\r\n    }\r\n\r\n    document.addEventListener(\"pointerdown\", handleDocumentClick, {passive: true})\r\n  }\r\n\r\n\r\n  initCalendar(datePicker) {\r\n    // Get the datepicker input element\r\n    this.datePickerBlock = datePicker;\r\n    this.inputWrapper = datePicker.querySelector('.b-input-field__e-input-wrapper');\r\n    this.input = datePicker.querySelector('.b-input-field__e-input');\r\n\r\n    // Create a date picker calendar\r\n    this.calendar = document.createElement('div');\r\n    this.calendar.classList.add('b-input-field__e-calendar');\r\n    this.datePickerBlock.append(this.calendar);\r\n\r\n    // Event listener to toggle the calendar visibility\r\n    this.inputWrapper.addEventListener('pointerdown', event => {\r\n      event.preventDefault();\r\n      this.input.classList.toggle('b-input-field__e-input_active-date-picker');\r\n      this.calendar.classList.toggle('b-input-field__e-calendar_active');\r\n      this.addCloseOnDocumentClickHandlers();\r\n    });\r\n  }\r\n\r\n  // Function to generate the calendar HTML\r\n  generateCalendar(year, month) {\r\n    // waiting for addCloseOnDocumentClickHandlers proof that click was on input block\r\n    setTimeout(() => {\r\n      const firstDay = new Date(year, month - 1, 1).getDay();\r\n      const lastDate = new Date(year, month, 0).getDate();\r\n      const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();\r\n\r\n      const dayIndexMap = [6, 0, 1, 2, 3, 4, 5]; // Mapping for day index, where Monday is 0 and Sunday is 6\r\n\r\n      let dayCounter = 0;\r\n      let tbodyContent = '';\r\n      let weekRow = '';\r\n\r\n      // Loop for the previous month dates\r\n      for (let i = dayIndexMap[firstDay] - 1; i >= 0; i--) {\r\n        const date = daysInPreviousMonth - i;\r\n        weekRow += `<td class=\"b-input-field__e-date b-input-field__e-date_disabled\">${date}</td>`;\r\n        dayCounter++;\r\n      }\r\n\r\n      // Loop for the current month dates\r\n      for (let i = 1; i <= lastDate; i++) {\r\n        const date = i;\r\n        const currentDate = new Date(year, month - 1, date);\r\n        const isCurrentDate = currentDate.toDateString() === new Date().toDateString(); // Check if it's the current date\r\n        let dateCellClass = 'b-input-field__e-date';\r\n        dateCellClass += isCurrentDate ? ' b-input-field__e-date_current-date' : '';\r\n        weekRow += `<td class=\"${dateCellClass}\">${date}</td>`;\r\n        dayCounter++;\r\n\r\n        if (dayCounter === 7) {\r\n          tbodyContent += `<tr class=\"b-input-field__e-week-row\" >${weekRow}</tr>`;\r\n          weekRow = '';\r\n          dayCounter = 0;\r\n        }\r\n      }\r\n\r\n      // Loop for the next month dates\r\n      let nextMonthDate = 1;\r\n      while (dayCounter < 7) {\r\n        weekRow += `<td class=\"b-input-field__e-date b-input-field__e-date_disabled\">${nextMonthDate}</td>`;\r\n        dayCounter++;\r\n        nextMonthDate++;\r\n      }\r\n\r\n      // Add the last row if it is not empty\r\n      if (weekRow !== '') {\r\n        tbodyContent += `<tr class=\"b-input-field__e-week-row\">${weekRow}</tr>`;\r\n      }\r\n\r\n      const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });\r\n      const formattedTitle = `${monthName[0].toUpperCase() + monthName.slice(1)} ${year}`;\r\n\r\n      this.calendar.innerHTML = `\r\n        <div class=\"b-input-field__e-current-month-header\">\r\n          <button class=\"b-input-field__e-prev-month-btn\">arrow_back</button>\r\n          <span class=\"b-input-field__e-current-month\">${formattedTitle}</span>\r\n          <button class=\"b-input-field__e-next-month-btn\">arrow_forward</button>\r\n        </div>\r\n        <table class=\"b-input-field__e-table\">\r\n          <thead class=\"b-input-field__e-t-head\">\r\n            <tr class=\"b-input-field__e-weekdays\">\r\n              <th class=\"b-input-field__e-weekday\">Пн</th>\r\n              <th class=\"b-input-field__e-weekday\">Вт</th>\r\n              <th class=\"b-input-field__e-weekday\">Ср</th>\r\n              <th class=\"b-input-field__e-weekday\">Чт</th>\r\n              <th class=\"b-input-field__e-weekday\">Пт</th>\r\n              <th class=\"b-input-field__e-weekday\">Сб</th>\r\n              <th class=\"b-input-field__e-weekday\">Вс</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody class=\"b-input-field__e-t-body\">\r\n            ${tbodyContent}\r\n          </tbody>\r\n        </table>\r\n      `;\r\n      this.addMonthNavigationHandlers();\r\n    });\r\n  }\r\n\r\n  addMonthNavigationHandlers() {\r\n    // Event listeners for month navigation\r\n    const prevMonthBtn = this.calendar.querySelector('.b-input-field__e-prev-month-btn');\r\n    const nextMonthBtn = this.calendar.querySelector('.b-input-field__e-next-month-btn');\r\n\r\n    prevMonthBtn.addEventListener('pointerdown', event => {\r\n      event.preventDefault();\r\n      const newMonth = this.currentMonth === 1 ? 12 : this.currentMonth - 1;\r\n      const newYear = this.currentMonth === 1 ? this.currentYear - 1 : this.currentYear;\r\n      this.updateCalendar(newYear, newMonth);\r\n    });\r\n\r\n    nextMonthBtn.addEventListener('pointerdown', event => {\r\n      event.preventDefault();\r\n      // waiting for addCloseOnDocumentClickHandlers proof that click was on input block\r\n      const newMonth = this.currentMonth === 12 ? 1 : this.currentMonth + 1;\r\n      const newYear = this.currentMonth === 12 ? this.currentYear + 1 : this.currentYear;\r\n      this.updateCalendar(newYear, newMonth);\r\n    });\r\n  }\r\n\r\n\r\n  // Function to update the calendar body for the given month and year\r\n  updateCalendar(year, month) {\r\n    this.currentYear = year;\r\n    this.currentMonth = month;\r\n    this.generateCalendar(year, month);\r\n  }\r\n\r\n  addCellOnClick() {\r\n    // Event listener for date selection using event delegation\r\n    this.calendar.addEventListener('pointerdown', event => {\r\n      const cell = event.target;\r\n      if (cell.tagName === 'TD' && !cell.classList.contains('b-input-field__e-date_disabled')) {\r\n        const date = parseInt(cell.textContent);\r\n        const selectedDate = new Date(this.currentYear, this.currentMonth - 1, date);\r\n        if (this.isRange) {\r\n          this.handleClickIfRange(selectedDate, event);\r\n        } else {\r\n          this.handleClickIfOneDate(selectedDate, event);\r\n        }\r\n      }\r\n    })\r\n  }\r\n\r\n  handleClickIfRange(selectedDate, event) {\r\n    const cell = event.target;\r\n    // Check if start date is not set\r\n    if (!this.startDate) {\r\n      this.startDate = selectedDate;\r\n      this.endDate = null;\r\n    }\r\n    // Check if only start date is set\r\n    else if (this.startDate && !this.endDate) {\r\n      this.endDate =  new Date(Math.max(this.startDate, selectedDate));\r\n      this.startDate = new Date(Math.min(this.startDate, selectedDate));\r\n    }\r\n    // Check if both start and end dates are set\r\n    else if (this.startDate && this.endDate) {\r\n      this.startDate = selectedDate;\r\n      this.endDate = null;\r\n\r\n      // Repaint calendar so it is without range\r\n      this.updateCalendar(this.currentYear, this.currentMonth);\r\n    }\r\n\r\n    // Check if both start and end dates are set\r\n    if (this.startDate && this.endDate) {\r\n      const formattedStartDate = this.formatDate(this.startDate);\r\n      const formattedEndDate = this.formatDate(this.endDate);\r\n      this.input.value = `${formattedStartDate} - ${formattedEndDate}`;\r\n      this.highlightRange();\r\n    } else if (this.startDate && !this.endDate) {\r\n      const formattedStartDate = this.formatDate(this.startDate);\r\n      this.input.value = formattedStartDate;\r\n    }\r\n  }\r\n\r\n  handleClickIfOneDate(selectedDate, event) {\r\n    const cell = event.target;\r\n    const pickedDate = document.querySelector('.b-input-field__e-picked-date');\r\n    if (pickedDate) {\r\n      pickedDate.classList.remove('b-input-field__e-picked-date');\r\n    }\r\n    const formattedDate = this.formatDate(selectedDate);\r\n    this.input.value = formattedDate;\r\n    cell.classList.add('b-input-field__e-picked-date');\r\n  }\r\n\r\n  highlightRange() {\r\n    // Highlight the selected date range\r\n    const cells = this.calendar.querySelectorAll('td');\r\n    for (let i = 0; i < cells.length; i++) {\r\n      const cell = cells[i];\r\n      const cellDate = cell.textContent;\r\n      let startDateNum = this.startDate.getDate();\r\n      let endDateNum  = this.endDate.getDate();\r\n      if (cellDate >= startDateNum && cellDate <= endDateNum\r\n        && (Math.abs(cellDate - i) < 15 ) ) { // filter other month\r\n        cell.classList.add('b-input-field__e-date_selected');\r\n      }\r\n    }\r\n  }\r\n\r\n  test()\r\n  {\r\n\r\n  }\r\n\r\n  // Function to format the date as \"dd.mm.yyyy\"\r\n  formatDate(date) {\r\n    const day = String(date.getDate()).padStart(2, '0');\r\n    const month = String(date.getMonth() + 1).padStart(2, '0');\r\n    const year = date.getFullYear();\r\n    return `${day}.${month}.${year}`;\r\n  }\r\n}\r\n\r\nlet singleDatePickers = document.getElementsByClassName(\"b-input-field_is-single-date-picker\");\r\nfor (let i = 0; i < singleDatePickers.length; i++) {\r\n  const singleDatePicker = singleDatePickers[i];\r\n  singleDatePicker.disabled = true;\r\n  new Calendar(singleDatePicker, false);\r\n}\r\n\r\nlet rangeDatePickers = document.getElementsByClassName(\"b-input-field_is-range-date-picker\");\r\nfor (let i = 0; i < rangeDatePickers.length; i++) {\r\n  const rangeDatePicker = rangeDatePickers[i];\r\n  rangeDatePicker.disabled = true;\r\n  new Calendar(rangeDatePicker, true);\r\n}\r\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/input-field/__calendar/calendar.js?");

/***/ }),

/***/ "./blocks/form-elements-blocks/input-field/b-input-field.js":
/*!******************************************************************!*\
  !*** ./blocks/form-elements-blocks/input-field/b-input-field.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__calendar/calendar */ \"./blocks/form-elements-blocks/input-field/__calendar/calendar.js\");\n/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__);\nconsole.log('hi im input')\r\n\r\n;\r\n\r\nfor (let i = 0; i < document.getElementsByClassName(\"b-input-field_is-dropdown\").length; i++) {\r\n    let inputBlock = document.getElementsByClassName(\"b-input-field_is-dropdown\")[i];\r\n\r\n    const inputWrapper = inputBlock.querySelector('.b-input-field__e-input-wrapper');\r\n    const dropdownIcon = inputBlock.querySelector('.b-input-field__e-icon_is-chevron-icon');\r\n    const dropdownContent = inputBlock.querySelector('.b-input-field__e-dropdown');\r\n    const input = inputBlock.querySelector('.b-input-field__e-input_is-dropdown');\r\n    dropdownContent.hidden = true;\r\n    input.disabled = true;\r\n\r\n    let enabled = false;\r\n    dropdownContent.style.width = input.offsetWidth + \"px\";\r\n    inputWrapper.onpointerdown = function(event) {\r\n        event.preventDefault();\r\n        enabled = !enabled;\r\n        // dropdownContent.style.display = enabled ? '' : 'none';\r\n        input.classList.toggle(\"b-input-field__e-input_active-dropdown\");\r\n        dropdownContent.hidden = !enabled;\r\n\r\n        document.addEventListener(\"pointerdown\", handleDocumentClick, {passive: true})\r\n    };\r\n\r\n    function handleDocumentClick(event) {\r\n        let isInside = inputBlock.contains(event.target);\r\n        if (!isInside) {\r\n            enabled = false;\r\n            input.classList.remove(\"b-input-field__e-input_active-dropdown\");\r\n            dropdownContent.hidden = true;\r\n            document.removeEventListener(\"pointerdown\", handleDocumentClick, {passive: true});\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/input-field/b-input-field.js?");

/***/ })

}]);