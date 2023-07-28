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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Counter\": () => (/* binding */ Counter)\n/* harmony export */ });\nclass Counter {\n  static initCounters() {\n    // Helper function to disable buttons and update value\n    function updateCounterValue(counter, value, amount) {\n      const counterMax = +counter.dataset.maxValue;\n      const counterMin = +counter.dataset.minValue;\n      const currentValue = +value.textContent; // Parse the current value as a number\n      const newValue = Math.min(Math.max(currentValue + amount, counterMin), counterMax);\n      const minusBtn = counter.querySelector('.b-counter__e-button_is-minus');\n      const plusBtn = counter.querySelector('.b-counter__e-button_is-plus');\n\n      value.textContent = newValue.toString(); // Convert the newValue back to string\n      minusBtn.disabled = newValue <= counterMin;\n      minusBtn.style.opacity = newValue <= counterMin ? '0.38' : '1';\n      minusBtn.classList.toggle('b-counter__e-button_disabled', newValue <= counterMin);\n\n      plusBtn.disabled = newValue >= counterMax;\n      plusBtn.classList.toggle('b-counter__e-button_disabled', newValue >= counterMax);\n    }\n\n    const counters = document.querySelectorAll('.b-counter');\n    counters.forEach((counter) => {\n      const minusBtn = counter.querySelector('.b-counter__e-button_is-minus');\n      const plusBtn = counter.querySelector('.b-counter__e-button_is-plus');\n      const value = counter.querySelector('.b-counter__e-value');\n      const initialValue = +value.textContent; // Parse the initial value as a number\n\n      minusBtn.onpointerdown = () => {\n        updateCounterValue(counter, value, -1);\n      };\n\n      plusBtn.onpointerdown = () => {\n        updateCounterValue(counter, value, 1);\n      };\n\n      // Initialize counter value based on initial value and limits\n      updateCounterValue(counter, value, 0);\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/counter/b-counter.js?");

/***/ }),

/***/ "./blocks/form-elements-blocks/input-field/__calendar/calendar.js":
/*!************************************************************************!*\
  !*** ./blocks/form-elements-blocks/input-field/__calendar/calendar.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calendar\": () => (/* binding */ Calendar)\n/* harmony export */ });\nclass Calendar {\n  constructor(datePicker, isRange) {\n    this.today = new Date();\n    this.currentMonth = this.today.getMonth() + 1; // like-button people count\n    this.currentYear = this.today.getFullYear();\n\n    this.startDate = null;\n    this.endDate = null;\n    this.calendar = null;\n    this.datePickerBlock = null;\n    this.inputWrapper = null;\n    this.input = null;\n\n    this.isRange = isRange;\n\n    this.initCalendar(datePicker);\n    // Generate the calendar for the current month\n    this.generateCalendar(this.currentYear, this.currentMonth);\n\n    this.addCellOnClick();\n  }\n\n  addCloseOnDocumentClickHandlers() {\n    const handleDocumentClick = (event) => {\n      const isInside = this.datePickerBlock.contains(event.target);\n      if (!isInside) {\n        // console.log('outer of input block click detected. closing block')\n        this.input.classList.remove('b-input-field__e-input_active-date-picker');\n        this.calendar.classList.remove('b-input-field__e-calendar_active');\n        document.removeEventListener('pointerdown', handleDocumentClick, true);\n      }\n    };\n\n    document.addEventListener('pointerdown', handleDocumentClick, true);\n  }\n\n  initCalendar(datePicker) {\n    // Get the datepicker input element\n    this.datePickerBlock = datePicker;\n    this.inputWrapper = datePicker.querySelector('.b-input-field__e-input-wrapper');\n    this.input = datePicker.querySelector('.b-input-field__e-input');\n\n    // Create a date picker calendar\n    this.calendar = document.createElement('div');\n    this.calendar.classList.add('b-input-field__e-calendar');\n    this.datePickerBlock.append(this.calendar);\n    this.input.setAttribute('readonly', '');\n\n    // Event listener to toggle the calendar visibility\n    this.inputWrapper.addEventListener('pointerdown', (event) => {\n      event.preventDefault();\n      this.input.classList.toggle('b-input-field__e-input_active-date-picker');\n      this.calendar.classList.toggle('b-input-field__e-calendar_active');\n      this.addCloseOnDocumentClickHandlers();\n    });\n  }\n\n  // Function to generate the calendar HTML\n  generateCalendar(year, month) {\n    // should be waiting for addCloseOnDocumentClickHandlers proof that click was on input block\n    console.log('render calendar');\n    const firstDay = new Date(year, month - 1, 1).getDay();\n    const lastDate = new Date(year, month, 0).getDate();\n    const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();\n    // Mapping for day index, where Monday is 0 and Sunday is 6\n    const dayIndexMap = [6, 0, 1, 2, 3, 4, 5];\n\n    let dayCounter = 0;\n    let tbodyContent = '';\n    let weekRow = '';\n\n    // Loop for the previous month dates\n    for (let i = dayIndexMap[firstDay] - 1; i >= 0; i--) {\n      const date = daysInPreviousMonth - i;\n      weekRow += `<td class=\"b-input-field__e-date b-input-field__e-date_disabled\">${date}</td>`;\n      dayCounter += 1;\n    }\n\n    // Loop for the current month dates\n    for (let i = 1; i <= lastDate; i++) {\n      const date = i;\n      const currentDate = new Date(year, month - 1, date);\n      // Check if it's the current date\n      const isCurrentDate = currentDate.toDateString() === new Date().toDateString();\n      let dateCellClass = 'b-input-field__e-date';\n      dateCellClass += isCurrentDate ? ' b-input-field__e-date_current-date' : '';\n      weekRow += `<td class=\"${dateCellClass}\">${date}</td>`;\n      dayCounter += 1;\n\n      if (dayCounter === 7) {\n        tbodyContent += `<tr class=\"b-input-field__e-week-row\" >${weekRow}</tr>`;\n        weekRow = '';\n        dayCounter = 0;\n      }\n    }\n\n    // Loop for the next month dates\n    let nextMonthDate = 1;\n    while (dayCounter < 7) {\n      weekRow += `<td class=\"b-input-field__e-date b-input-field__e-date_disabled\">${nextMonthDate}</td>`;\n      dayCounter += 1;\n      nextMonthDate += 1;\n    }\n\n    // Add the last row if it is not empty\n    if (weekRow !== '') {\n      tbodyContent += `<tr class=\"b-input-field__e-week-row\">${weekRow}</tr>`;\n    }\n\n    const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });\n    const formattedTitle = `${monthName[0].toUpperCase() + monthName.slice(1)} ${year}`;\n\n    this.calendar.innerHTML = `\n        <div class=\"b-input-field__e-current-month-header\">\n          <button class=\"b-input-field__e-prev-month-btn\">arrow_back</button>\n          <span class=\"b-input-field__e-current-month\">${formattedTitle}</span>\n          <button class=\"b-input-field__e-next-month-btn\">arrow_forward</button>\n        </div>\n        <table class=\"b-input-field__e-table\">\n          <thead class=\"b-input-field__e-t-head\">\n            <tr class=\"b-input-field__e-weekdays\">\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Пн</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Вт</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Ср</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Чт</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Пт</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Сб</th>\n              <th class=\"b-input-field__e-weekday\" scope=\"col\">Вс</th>\n            </tr>\n          </thead>\n          <tbody class=\"b-input-field__e-t-body\">\n            ${tbodyContent}\n          </tbody>\n        </table>\n      `;\n    this.addMonthNavigationHandlers();\n  }\n\n  addMonthNavigationHandlers() {\n    // Event listeners for month navigation\n    const prevMonthBtn = this.calendar.querySelector('.b-input-field__e-prev-month-btn');\n    const nextMonthBtn = this.calendar.querySelector('.b-input-field__e-next-month-btn');\n\n    prevMonthBtn.addEventListener('pointerdown', (event) => {\n      event.preventDefault();\n      const newMonth = this.currentMonth === 1 ? 12 : this.currentMonth - 1;\n      const newYear = this.currentMonth === 1 ? this.currentYear - 1 : this.currentYear;\n      this.updateCalendar(newYear, newMonth);\n      this.highlightRange();\n    });\n\n    nextMonthBtn.addEventListener('pointerdown', (event) => {\n      event.preventDefault();\n      // waiting for addCloseOnDocumentClickHandlers proof that click was on input block\n      this.currentMonth = this.currentMonth === 12 ? 1 : this.currentMonth + 1;\n      this.currentYear = this.currentMonth === 12 ? this.currentYear + 1 : this.currentYear;\n      this.updateCalendar(this.currentYear, this.currentMonth);\n      this.highlightRange();\n    });\n  }\n\n  // Function to update the calendar body for the given month and year\n  updateCalendar(year, month) {\n    this.currentYear = year;\n    this.currentMonth = month;\n    this.generateCalendar(year, month);\n  }\n\n  addCellOnClick() {\n    // Event listener for date selection using event delegation\n    this.calendar.addEventListener('pointerdown', (event) => {\n      const cell = event.target;\n      if (cell.tagName === 'TD' && !cell.classList.contains('b-input-field__e-date_disabled')) {\n        const date = parseInt(cell.textContent, 10);\n        const selectedDate = new Date(this.currentYear, this.currentMonth - 1, date);\n        if (this.isRange) {\n          this.handleClickIfRange(selectedDate, event);\n        } else {\n          this.handleClickIfOneDate(selectedDate, event);\n        }\n      }\n    });\n  }\n\n  handleClickIfRange(selectedDate, event) {\n    const cell = event.target;\n    // Check if start date is not set\n    if (!this.startDate) {\n      this.startDate = selectedDate;\n      this.endDate = null;\n      cell.classList.add('b-input-field__e-date_picked');\n    } else if (this.startDate && !this.endDate) { // Check if only start date is set\n      if (this.startDate < selectedDate) { // ok. no swap\n        this.endDate = selectedDate;\n        cell.classList.add('b-input-field__e-date_picked');\n      } else {\n        cell.classList.add('b-input-field__e-date_picked');\n        this.endDate = this.startDate;\n        this.startDate = selectedDate;\n      }\n    } else if (this.startDate && this.endDate) { // Check if both start and end dates are set\n      this.startDate = selectedDate;\n      this.endDate = null;\n      this.removeRangeAndPickedDates();\n      cell.classList.add('b-input-field__e-date_picked');\n    }\n\n    // Check if both start and end dates are set\n    if (this.startDate && this.endDate) {\n      const formattedStartDate = this.formatDate(this.startDate);\n      const formattedEndDate = this.formatDate(this.endDate);\n      this.input.value = `${formattedStartDate} - ${formattedEndDate}`;\n      this.highlightRange();\n    } else if (this.startDate && !this.endDate) {\n      const formattedStartDate = this.formatDate(this.startDate);\n      this.input.value = formattedStartDate;\n    }\n  }\n\n  removeRangeAndPickedDates() {\n    // Dehighlight the selected date range\n    const highlightedCells = this.calendar.querySelectorAll('.b-input-field__e-date_selected');\n    highlightedCells.forEach((cell) => {\n      cell.classList.remove('b-input-field__e-date_selected');\n    });\n\n    const pickedCells = this.calendar.querySelectorAll('.b-input-field__e-date_picked');\n    pickedCells.forEach((cell) => {\n      cell.classList.remove('b-input-field__e-date_picked');\n    });\n\n    const firstPickedCell = this.calendar.querySelector('.b-input-field__e-date_first');\n    firstPickedCell?.classList?.remove('b-input-field__e-date_first');\n\n    const secondPickedCell = this.calendar.querySelector('.b-input-field__e-date_last');\n    secondPickedCell?.classList?.remove('b-input-field__e-date_last');\n  }\n\n  handleClickIfOneDate(selectedDate, event) {\n    const cell = event.target;\n    const pickedDate = document.querySelector('.b-input-field__e-date_picked');\n    if (pickedDate) {\n      pickedDate.classList.remove('b-input-field__e-date_picked');\n    }\n    const formattedDate = this.formatDate(selectedDate);\n    this.input.value = formattedDate;\n    cell.classList.add('b-input-field__e-date_picked');\n  }\n\n  highlightRange() {\n    console.log('highlightRange');\n\n    // Highlight the selected date range\n    if (!this.startDate || !this.endDate) {\n      return;\n    }\n\n    console.log('highlighting');\n    const cells = this.calendar.querySelectorAll('td');\n    for (let i = 0; i < cells.length; i += 1) {\n      const cell = cells[i];\n      const cellDate = +cell.textContent;\n\n      let cellDateObj;\n      if (cellDate - i > 15) {\n        // we get prev month dates here\n        const jsMonth = this.currentMonth - 1; // to 0..11 format\n        const month = jsMonth === 0 ? 11 : jsMonth - 1;\n        cellDateObj = new Date(this.currentYear, month, cellDate);\n      } else if (cellDate - i < -15) {\n        // we get next month dates here\n        const jsMonth = this.currentMonth - 1; // to 0..11 format\n        const month = jsMonth === 11 ? 0 : jsMonth + 1;\n        cellDateObj = new Date(this.currentYear, month, cellDate);\n      } else {\n        const jsMonth = this.currentMonth - 1; // to 0..11 format\n        cellDateObj = new Date(this.currentYear, jsMonth, cellDate);\n      }\n\n      if (this.startDate.getTime() <= cellDateObj.getTime()\n        && cellDateObj.getTime() <= this.endDate.getTime()) {\n        cell.classList.add('b-input-field__e-date_selected');\n        if (cellDateObj.getTime() === this.startDate.getTime()) {\n          cell.classList.add('b-input-field__e-date_first');\n          cell.classList.add('b-input-field__e-date_picked');\n        } else if (cellDateObj.getTime() === this.endDate.getTime()) {\n          cell.classList.add('b-input-field__e-date_last');\n          cell.classList.add('b-input-field__e-date_picked');\n        }\n      }\n    }\n  }\n\n  // Function to format the date as \"dd.mm.yyyy\"\n  formatDate(date) {\n    const day = String(date.getDate()).padStart(2, '0');\n    const month = String(date.getMonth() + 1).padStart(2, '0');\n    const year = date.getFullYear();\n\n    const formattedDate = date.toLocaleString('ru', {\n      day: '2-digit',\n      month: 'short',\n    });\n    if (this.isRange) {\n      return formattedDate.slice(0, -1);\n    }\n    return `${day}.${month}.${year}`;\n  }\n\n  static initCalendars() {\n    const singleDatePickers = document.getElementsByClassName('b-input-field_is-single-date-picker');\n    for (let i = 0; i < singleDatePickers.length; i += 1) {\n      const singleDatePicker = singleDatePickers[i];\n      singleDatePicker.disabled = true;\n      new Calendar(singleDatePicker, false);\n    }\n\n    const rangeDatePickers = document.getElementsByClassName('b-input-field_is-range-date-picker');\n    for (let i = 0; i < rangeDatePickers.length; i += 1) {\n      const rangeDatePicker = rangeDatePickers[i];\n      rangeDatePicker.disabled = true;\n      new Calendar(rangeDatePicker, true);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/input-field/__calendar/calendar.js?");

/***/ }),

/***/ "./blocks/form-elements-blocks/input-field/b-input-field.js":
/*!******************************************************************!*\
  !*** ./blocks/form-elements-blocks/input-field/b-input-field.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputField\": () => (/* binding */ InputField)\n/* harmony export */ });\nclass InputField {\n  static initDropdowns() {\n    for (let i = 0; i < document.getElementsByClassName('b-input-field_is-dropdown').length; i++) {\n      const inputBlock = document.getElementsByClassName('b-input-field_is-dropdown')[i];\n\n      const inputWrapper = inputBlock.querySelector('.b-input-field__e-input-wrapper');\n      // const dropdownIcon = inputBlock.querySelector('.b-input-field__e-icon_is-chevron-icon');\n      const dropdownContent = inputBlock.querySelector('.b-input-field__e-dropdown');\n      const input = inputBlock.querySelector('.b-input-field__e-input_is-dropdown');\n\n      if (inputBlock.matches('.b-input-field_has-counters-text-no-buttons')) {\n        setCounterValuesAsText();\n        dropdownContent.addEventListener(\"pointerdown\", setCounterValuesAsText, { passive: true });\n      }\n\n      if (inputBlock.matches('.b-input-field_has-counters-apply-button')) {\n\n      }\n\n      dropdownContent.hidden = true;\n      input.setAttribute('readonly', '');\n      let enabled = false;\n      dropdownContent.style.width = `${input.offsetWidth}px`;\n      inputWrapper.onpointerdown = onclick;\n\n      if (inputBlock.dataset.openByDefault || inputBlock.dataset.openByDefault === '') {\n        onclick();\n      }\n\n      function onclick(event) {\n        event?.preventDefault();\n        enabled = !enabled;\n        input.classList.toggle('b-input-field__e-input_active-dropdown');\n        dropdownContent.hidden = !enabled;\n\n        document.addEventListener('pointerdown', handleDocumentClick, { passive: true });\n      }\n\n      function setCounterValuesAsText() {\n        input.value = \"\";\n        const counters = dropdownContent.querySelectorAll('.b-counter');\n        counters.forEach((counter) => {\n          const counterTextEl = counter.querySelector('.b-counter__e-text');\n          const counterText = counterTextEl.textContent;\n          const counterValueEl = counter.querySelector('.b-counter__e-value');\n          const counterValue = +counterValueEl.textContent;\n          input.value += `${formatWords(counterValue, counterText)}, `;\n        });\n      }\n\n      function handleDocumentClick(event) {\n        const isInside = inputBlock.contains(event.target);\n        if (!isInside) {\n          enabled = false;\n          input.classList.remove('b-input-field__e-input_active-dropdown');\n          dropdownContent.hidden = true;\n          document.removeEventListener('pointerdown', handleDocumentClick, { passive: true });\n        }\n      }\n\n      function formatWords(num, word) {\n        let ending = \"\";\n        if (word === \"спальни\") {\n          if (num === 1 || (num > 20 && num % 10 === 1)) {\n            ending = \"спальня\";\n          } else if (num > 1 && num < 5) {\n            ending = \"спальни\";\n          } else {\n            ending = \"спален\";\n          }\n        }\n        if (word === \"кровати\") {\n          if (num === 1 || (num > 20 && num % 10 === 1)) {\n            ending = \"кровать\";\n          } else if (num > 1 && num < 5) {\n            ending = \"кровати\";\n          } else {\n            ending = \"кроватей\";\n          }\n        }\n        if (word === \"ванные комнаты\") {\n          if (num === 1 || (num > 20 && num % 10 === 1)) {\n            ending = \"ванная комната\";\n          } else if (num > 1 && num < 5) {\n            ending = \"ванные комнаты\";\n          } else {\n            ending = \"ванных комнат\";\n          }\n        }\n        return num + \" \" + ending;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/input-field/b-input-field.js?");

/***/ }),

/***/ "./blocks/form-elements-blocks/like-button/like-button.js":
/*!****************************************************************!*\
  !*** ./blocks/form-elements-blocks/like-button/like-button.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LikeButton\": () => (/* binding */ LikeButton)\n/* harmony export */ });\nclass LikeButton {\n  static initLikeButtons() {\n    const likeButtons = document.querySelectorAll('.b-like-button');\n    for (let i = 0; i < likeButtons.length; i += 1) {\n      const likeButton = likeButtons[i];\n      const handleLikeButtonPointerDown = (event) => {\n        likeButton.classList.toggle('b-like-button_disabled');\n        const textNode = likeButton.querySelector('.b-like-button__e-counter-text');\n        if (likeButton.matches('.b-like-button_disabled')) {\n          textNode.textContent = +textNode.textContent - 1;\n        } else {\n          textNode.textContent = +textNode.textContent + 1;\n        }\n      };\n\n      likeButton.addEventListener('pointerdown', handleLikeButtonPointerDown);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/like-button/like-button.js?");

/***/ }),

/***/ "./blocks/form-elements-blocks/rate-button/rate-button.js":
/*!****************************************************************!*\
  !*** ./blocks/form-elements-blocks/rate-button/rate-button.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RateButton\": () => (/* binding */ RateButton)\n/* harmony export */ });\nclass RateButton {\n  static initRateButtons() {\n    const rateButtons = document.querySelectorAll('.b-rate-button');\n    for (let i = 0; i < rateButtons.length; i += 1) {\n      const rateButton = rateButtons[i];\n      const starButtons = rateButton.querySelectorAll('.b-rate-button__e-star-button');\n      for (let j = 0; j < starButtons.length; j += 1) {\n        const starButton = starButtons[j];\n        starButton.addEventListener('pointerdown', (event) =>\n          handleStarButtonOnPointerDown.bind(this, event, j, starButtons)());\n      }\n    }\n\n    function handleStarButtonOnPointerDown(event, starIndex, starButtons) {\n      for (let i = 0; i < starButtons.length; i += 1) {\n        const starButton = starButtons[i];\n        if (i <= starIndex) {\n          starButton.classList.add('b-rate-button__e-star-button_filled');\n        } else {\n          starButton.classList.remove('b-rate-button__e-star-button_filled');\n        }\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/rate-button/rate-button.js?");

/***/ }),

/***/ "./blocks/form-elements-blocks/slider/slider.js":
/*!******************************************************!*\
  !*** ./blocks/form-elements-blocks/slider/slider.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\n  constructor(sliderElement, minValue, maxValue, step, defaultStart, defaultEnd) {\n    this.sliderElement = sliderElement;\n    this.minValue = minValue;\n    this.maxValue = maxValue;\n    this.step = step;\n\n    this.initThumb(sliderElement, 0, defaultStart);\n    this.initThumb(sliderElement, 1, defaultEnd);\n  }\n\n  isInt(value) {\n    return !Number.isNaN(value) &&\n      parseInt(Number(value)) == value &&\n      !Number.isNaN(parseInt(value, 10));\n  }\n\n  setUIValue(value, thumbElNum) {\n    const element = this.sliderElement.querySelector('.b-slider__e-current-range-text');\n    const text = element.textContent;\n    const indexOfDash = text.indexOf('-');\n    if (this.isInt(this.step)) {\n      value = Math.round(value);\n    }\n    let newText;\n    if (thumbElNum === 0) {\n      newText = `${value} ${text.slice(indexOfDash)}`;\n    } else {\n      newText = `${text.slice(0, indexOfDash)} - ${value}`;\n    }\n    element.textContent = newText;\n  }\n\n  convertPxToFraction(valuePx) {\n    const thumb = this.sliderElement.querySelector('.b-slider__e-thumb');\n    const rightEdge = this.sliderElement.offsetWidth - thumb.offsetWidth;\n    return valuePx / rightEdge;  // rightEdge == maxLeft == maxPose of left cord\n  }\n\n  convertFractionToPx(valueFraction) {\n    const thumb = this.sliderElement.querySelector('.b-slider__e-thumb');\n    const rightEdge = this.sliderElement.offsetWidth - thumb.offsetWidth;\n    return valueFraction * rightEdge;  // rightEdge == maxLeft == maxPose of left cord\n  }\n\n\n  convertFractionValueToAbsolute(valueFraction) {\n    const { minValue, maxValue } = this;\n    return valueFraction * (maxValue - minValue) + minValue;\n  }\n\n  convertAbsoluteValueToFraction(valueAbsolute) {\n    const { minValue, maxValue } = this;\n    return (valueAbsolute - minValue) / (maxValue - minValue);\n  }\n\n  checkCollisionAndFix(valueAbsolute, thumbElNum) {\n    if (thumbElNum === 0) {\n      const rightThumb = this.sliderElement.querySelectorAll('.b-slider__e-thumb')[1];\n      const rightThumbPos = +rightThumb.style.left.slice(0, -2);\n\n      // not exactly right thumb but left thumb but they are equal\n      const maxAllowedLeft = rightThumbPos - rightThumb.offsetWidth;\n      const maxAllowedLeftFraction = this.convertPxToFraction(maxAllowedLeft);\n      const maxAllowedLeftAbsolute = this.convertFractionValueToAbsolute(maxAllowedLeftFraction);\n      if (valueAbsolute > maxAllowedLeftAbsolute) {\n        return valueAbsolute - this.step; // go one step back\n      }\n      return valueAbsolute;\n    } if (thumbElNum === 1) {\n      const leftThumb = this.sliderElement.querySelectorAll('.b-slider__e-thumb')[0];\n      const leftThumbPos = +leftThumb.style.left.slice(0, -2);\n\n      const maxAllowedLeft = leftThumbPos + leftThumb.offsetWidth;\n      const maxAllowedLeftFraction = this.convertPxToFraction(maxAllowedLeft);\n      const maxAllowedLeftAbsolute = this.convertFractionValueToAbsolute(maxAllowedLeftFraction);\n\n      if (valueAbsolute < maxAllowedLeftAbsolute) {\n        return valueAbsolute + this.step;\n      }\n      return valueAbsolute;\n    }\n  }\n\n  getFractionInSteps(valueFraction, thumbElNum) {\n    const { minValue, step } = this;\n    const absoluteValue = this.convertFractionValueToAbsolute(valueFraction);\n    const absoluteValueInStepsPositions = Math.round((absoluteValue - minValue) / step) * step + minValue;\n    const newAbsolutePos =\n      this.checkCollisionAndFix(absoluteValueInStepsPositions, thumbElNum);\n    const newFraction = this.convertAbsoluteValueToFraction(newAbsolutePos);\n    return newFraction;\n  }\n\n  setThumbPos(valueAbsolute, thumb) {\n    const valueFraction = this.convertAbsoluteValueToFraction(valueAbsolute);\n    const valuePx = this.convertFractionToPx(valueFraction);\n    thumb.style.left = `${valuePx}px`;\n  }\n\n  initThumb(sliderElement, thumbElNum, initialPos) {\n    const thumb = sliderElement.querySelectorAll('.b-slider__e-thumb')[thumbElNum];\n\n    // style.left Can be from 0 to rightEdge\n    const rightEdge = sliderElement.offsetWidth - thumb.offsetWidth;\n    this.setThumbPos(initialPos, thumb);\n    let shiftX;\n\n    const handleThumbPointerMove = (event) => {\n\n      const calculatedLeft = this.calculateLeftPx(event, shiftX, sliderElement, thumbElNum, thumb);\n\n      const newPoseInFraction = this.convertPxToFraction(calculatedLeft);\n      const appropriateFractionPose = this.getFractionInSteps(newPoseInFraction, thumbElNum);\n\n      const newAbsolutePose = this.convertFractionValueToAbsolute(appropriateFractionPose);\n      this.setUIValue(newAbsolutePose, thumbElNum);\n\n      const newPxPose = this.convertFractionToPx(appropriateFractionPose);\n      thumb.style.left = `${newPxPose}px`;\n    };\n\n    const handleThumbPointerUp = (event) => {\n      thumb.removeEventListener('pointermove', handleThumbPointerMove);\n      thumb.removeEventListener('pointerup', handleThumbPointerUp);\n    };\n\n    const handleThumbPointerDown = (event) => {\n      shiftX = event.clientX - thumb.getBoundingClientRect().left;\n      thumb.setPointerCapture(event.pointerId);\n      thumb.addEventListener('pointermove', handleThumbPointerMove);\n      thumb.addEventListener('pointerup', handleThumbPointerUp);\n    };\n\n    thumb.addEventListener('pointerdown', handleThumbPointerDown);\n  }\n\n  calculateLeftPx(event, shiftX, sliderElement, thumbElNum, thumb) {\n    let newLeft = event.clientX - shiftX - sliderElement.getBoundingClientRect().left;\n\n    if (newLeft < 0) {\n      newLeft = 0;\n    }\n\n    if (thumbElNum === 0) {\n      const rightThumb = sliderElement.querySelectorAll('.b-slider__e-thumb')[1];\n      const rightPos = +rightThumb.style.left.slice(0, -2);\n      if (newLeft > rightPos - rightThumb.offsetWidth) {\n        newLeft = rightPos - rightThumb.offsetWidth;\n      }\n    } else if (thumbElNum === 1) {\n      const leftThumb = sliderElement.querySelectorAll('.b-slider__e-thumb')[0];\n      const leftPos = +leftThumb.style.left.slice(0, -2);\n      if (newLeft < leftPos + leftThumb.offsetWidth) {\n        newLeft = leftPos + leftThumb.offsetWidth;\n      }\n    }\n\n    const rightEdge = sliderElement.offsetWidth - thumb.offsetWidth;\n    if (newLeft > rightEdge) {\n      newLeft = rightEdge;\n    }\n    return newLeft;\n  }\n\n  static initSliders() {\n    const sliders = document.querySelectorAll('.b-slider');\n    for (let i = 0; i < sliders.length; i += 1) {\n      const slider = sliders[i];\n      const sliderMinValue = +(slider.dataset.minValue ?? 0);\n      const sliderMaxValue = +(slider.dataset.maxValue ?? 100);\n      const sliderStep = +(slider.dataset.step ?? 1);\n      const sliderDefaultStart = +(slider.dataset.defaultStart ?? 0);\n      const sliderDefaultEnd = +(slider.dataset.defaultEnd ?? 100);\n      new Slider(slider, sliderMinValue, sliderMaxValue, sliderStep, sliderDefaultStart, sliderDefaultEnd);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./blocks/form-elements-blocks/slider/slider.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_form_elements_blocks_input_field_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/form-elements-blocks/input-field/__calendar/calendar */ \"./blocks/form-elements-blocks/input-field/__calendar/calendar.js\");\n/* harmony import */ var _blocks_form_elements_blocks_input_field_b_input_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/form-elements-blocks/input-field/b-input-field */ \"./blocks/form-elements-blocks/input-field/b-input-field.js\");\n/* harmony import */ var _blocks_form_elements_blocks_counter_b_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/form-elements-blocks/counter/b-counter */ \"./blocks/form-elements-blocks/counter/b-counter.js\");\n/* harmony import */ var _blocks_form_elements_blocks_like_button_like_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/form-elements-blocks/like-button/like-button */ \"./blocks/form-elements-blocks/like-button/like-button.js\");\n/* harmony import */ var _blocks_form_elements_blocks_rate_button_rate_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/form-elements-blocks/rate-button/rate-button */ \"./blocks/form-elements-blocks/rate-button/rate-button.js\");\n/* harmony import */ var _blocks_form_elements_blocks_slider_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/form-elements-blocks/slider/slider */ \"./blocks/form-elements-blocks/slider/slider.js\");\n\n\n\n\n\n\n\n_blocks_form_elements_blocks_input_field_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__.Calendar.initCalendars();\n_blocks_form_elements_blocks_counter_b_counter__WEBPACK_IMPORTED_MODULE_2__.Counter.initCounters();\n_blocks_form_elements_blocks_like_button_like_button__WEBPACK_IMPORTED_MODULE_3__.LikeButton.initLikeButtons();\n_blocks_form_elements_blocks_rate_button_rate_button__WEBPACK_IMPORTED_MODULE_4__.RateButton.initRateButtons();\n_blocks_form_elements_blocks_slider_slider__WEBPACK_IMPORTED_MODULE_5__.Slider.initSliders();\n_blocks_form_elements_blocks_input_field_b_input_field__WEBPACK_IMPORTED_MODULE_1__.InputField.initDropdowns(); // hides already inited nodes\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);