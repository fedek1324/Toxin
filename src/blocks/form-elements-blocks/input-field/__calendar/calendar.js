export class Calendar {
  constructor(datePicker, isRange) {
    this.today = new Date();
    this.currentMonth = this.today.getMonth() + 1; // like-button people count
    this.currentYear = this.today.getFullYear();

    this.startDate = null;
    this.endDate = null;
    this.calendar = null;
    this.datePickerBlock = null;
    this.inputWrapper = null;
    this.input = null;

    this.isRange = isRange;

    this.initCalendar(datePicker);
    // Generate the calendar for the current month
    this.generateCalendar(this.currentYear, this.currentMonth);

    this.addCellOnClick();
  }

  addCloseOnDocumentClickHandlers() {
    const handleDocumentClick = (event) => {
      const isInside = this.datePickerBlock.contains(event.target);
      if (!isInside) {
        // console.log('outer of input block click detected. closing block')
        this.input.classList.remove('b-input-field__e-input_active-date-picker');
        this.calendar.classList.remove('b-input-field__e-calendar_active');
        document.removeEventListener('click', handleDocumentClick, true);
      }
    };

    // no poiner down bcs it doesnt allow scroll
    document.addEventListener('click', handleDocumentClick, true);
  }

  initCalendar(datePicker) {
    // Get the datepicker input element
    this.datePickerBlock = datePicker;
    this.inputWrapper = datePicker.querySelector('.b-input-field__e-input-wrapper');
    this.input = datePicker.querySelector('.b-input-field__e-input');

    // Create a date picker calendar
    this.calendar = document.createElement('div');
    this.calendar.classList.add('b-input-field__e-calendar');
    this.datePickerBlock.append(this.calendar);
    this.input.setAttribute('readonly', '');

    if (this.isOnTheRightOfContainer(this.calendar)) {
      // this.calendar.style.position = 'relative';
      this.calendar.style.right = '38px';
    }

    // Event listener to toggle the calendar visibility
    this.inputWrapper.addEventListener('click', (event) => {
      this.input.classList.toggle('b-input-field__e-input_active-date-picker');
      this.calendar.classList.toggle('b-input-field__e-calendar_active');
      this.addCloseOnDocumentClickHandlers();
    });
  }

  isOnTheRightOfContainer(element) {
    console.log(element);
    const closestContainer = element.closest('div');
    const containerRight = closestContainer.getBoundingClientRect().right;
    const containerLeft = closestContainer.getBoundingClientRect().left;

    const elRight = element.getBoundingClientRect().right;
    const elLeft = element.getBoundingClientRect().left;

    return (containerRight - elRight) < (containerLeft - elLeft);
  }

  // Function to generate the calendar HTML
  generateCalendar(year, month) {
    // should be waiting for addCloseOnDocumentClickHandlers proof that click was on input block
    console.log('render calendar');
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();
    const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
    // Mapping for day index, where Monday is 0 and Sunday is 6
    const dayIndexMap = [6, 0, 1, 2, 3, 4, 5];

    let dayCounter = 0;
    let tbodyContent = '';
    let weekRow = '';

    // Loop for the previous month dates
    for (let i = dayIndexMap[firstDay] - 1; i >= 0; i--) {
      const date = daysInPreviousMonth - i;
      weekRow += `<td class="b-input-field__e-date b-input-field__e-date_disabled">${date}</td>`;
      dayCounter += 1;
    }

    // Loop for the current month dates
    for (let i = 1; i <= lastDate; i++) {
      const date = i;
      const currentDate = new Date(year, month - 1, date);
      // Check if it's the current date
      const isCurrentDate = currentDate.toDateString() === new Date().toDateString();
      let dateCellClass = 'b-input-field__e-date';
      dateCellClass += isCurrentDate ? ' b-input-field__e-date_current-date' : '';
      weekRow += `<td class="${dateCellClass}">${date}</td>`;
      dayCounter += 1;

      if (dayCounter === 7) {
        tbodyContent += `<tr class="b-input-field__e-week-row" >${weekRow}</tr>`;
        weekRow = '';
        dayCounter = 0;
      }
    }

    // Loop for the next month dates
    let nextMonthDate = 1;
    while (dayCounter < 7) {
      weekRow += `<td class="b-input-field__e-date b-input-field__e-date_disabled">${nextMonthDate}</td>`;
      dayCounter += 1;
      nextMonthDate += 1;
    }

    // Add the last row if it is not empty
    if (weekRow !== '') {
      tbodyContent += `<tr class="b-input-field__e-week-row">${weekRow}</tr>`;
    }

    const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
    const formattedTitle = `${monthName[0].toUpperCase() + monthName.slice(1)} ${year}`;

    this.calendar.innerHTML = `
        <div class="b-input-field__e-current-month-header">
          <button class="b-input-field__e-prev-month-btn">arrow_back</button>
          <span class="b-input-field__e-current-month">${formattedTitle}</span>
          <button class="b-input-field__e-next-month-btn">arrow_forward</button>
        </div>
        <table class="b-input-field__e-table">
          <thead class="b-input-field__e-t-head">
            <tr class="b-input-field__e-weekdays">
              <th class="b-input-field__e-weekday" scope="col">Пн</th>
              <th class="b-input-field__e-weekday" scope="col">Вт</th>
              <th class="b-input-field__e-weekday" scope="col">Ср</th>
              <th class="b-input-field__e-weekday" scope="col">Чт</th>
              <th class="b-input-field__e-weekday" scope="col">Пт</th>
              <th class="b-input-field__e-weekday" scope="col">Сб</th>
              <th class="b-input-field__e-weekday" scope="col">Вс</th>
            </tr>
          </thead>
          <tbody class="b-input-field__e-t-body">
            ${tbodyContent}
          </tbody>
        </table>
      `;
    this.addMonthNavigationHandlers();
  }

  addMonthNavigationHandlers() {
    // Event listeners for month navigation
    const prevMonthBtn = this.calendar.querySelector('.b-input-field__e-prev-month-btn');
    const nextMonthBtn = this.calendar.querySelector('.b-input-field__e-next-month-btn');

    prevMonthBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const newMonth = this.currentMonth === 1 ? 12 : this.currentMonth - 1;
      const newYear = this.currentMonth === 1 ? this.currentYear - 1 : this.currentYear;
      this.updateCalendar(newYear, newMonth);
      this.highlightRange();
    });

    nextMonthBtn.addEventListener('click', (event) => {
      event.preventDefault();
      // waiting for addCloseOnDocumentClickHandlers proof that click was on input block
      this.currentMonth = this.currentMonth === 12 ? 1 : this.currentMonth + 1;
      this.currentYear = this.currentMonth === 12 ? this.currentYear + 1 : this.currentYear;
      this.updateCalendar(this.currentYear, this.currentMonth);
      this.highlightRange();
    });
  }

  // Function to update the calendar body for the given month and year
  updateCalendar(year, month) {
    this.currentYear = year;
    this.currentMonth = month;
    this.generateCalendar(year, month);
  }

  addCellOnClick() {
    // Event listener for date selection using event delegation
    this.calendar.addEventListener('click', (event) => {
      const cell = event.target;
      if (cell.tagName === 'TD' && !cell.classList.contains('b-input-field__e-date_disabled')) {
        const date = parseInt(cell.textContent, 10);
        const selectedDate = new Date(this.currentYear, this.currentMonth - 1, date);
        if (this.isRange) {
          this.handleClickIfRange(selectedDate, event);
        } else {
          this.handleClickIfOneDate(selectedDate, event);
        }
      }
    });
  }

  handleClickIfRange(selectedDate, event) {
    const cell = event.target;
    // Check if start date is not set
    if (!this.startDate) {
      this.startDate = selectedDate;
      this.endDate = null;
      cell.classList.add('b-input-field__e-date_picked');
    } else if (this.startDate && !this.endDate) { // Check if only start date is set
      if (this.startDate < selectedDate) { // ok. no swap
        this.endDate = selectedDate;
        cell.classList.add('b-input-field__e-date_picked');
      } else {
        cell.classList.add('b-input-field__e-date_picked');
        this.endDate = this.startDate;
        this.startDate = selectedDate;
      }
    } else if (this.startDate && this.endDate) { // Check if both start and end dates are set
      this.startDate = selectedDate;
      this.endDate = null;
      this.removeRangeAndPickedDates();
      cell.classList.add('b-input-field__e-date_picked');
    }

    // Check if both start and end dates are set
    if (this.startDate && this.endDate) {
      const formattedStartDate = this.formatDate(this.startDate);
      const formattedEndDate = this.formatDate(this.endDate);
      this.input.value = `${formattedStartDate} - ${formattedEndDate}`;
      this.highlightRange();
    } else if (this.startDate && !this.endDate) {
      const formattedStartDate = this.formatDate(this.startDate);
      this.input.value = formattedStartDate;
    }
  }

  removeRangeAndPickedDates() {
    // Dehighlight the selected date range
    const highlightedCells = this.calendar.querySelectorAll('.b-input-field__e-date_selected');
    highlightedCells.forEach((cell) => {
      cell.classList.remove('b-input-field__e-date_selected');
    });

    const pickedCells = this.calendar.querySelectorAll('.b-input-field__e-date_picked');
    pickedCells.forEach((cell) => {
      cell.classList.remove('b-input-field__e-date_picked');
    });

    const firstPickedCell = this.calendar.querySelector('.b-input-field__e-date_first');
    firstPickedCell?.classList?.remove('b-input-field__e-date_first');

    const secondPickedCell = this.calendar.querySelector('.b-input-field__e-date_last');
    secondPickedCell?.classList?.remove('b-input-field__e-date_last');
  }

  handleClickIfOneDate(selectedDate, event) {
    const cell = event.target;
    const pickedDate = document.querySelector('.b-input-field__e-date_picked');
    if (pickedDate) {
      pickedDate.classList.remove('b-input-field__e-date_picked');
    }
    const formattedDate = this.formatDate(selectedDate);
    this.input.value = formattedDate;
    cell.classList.add('b-input-field__e-date_picked');
  }

  highlightRange() {
    console.log('highlightRange');

    // Highlight the selected date range
    if (!this.startDate || !this.endDate) {
      return;
    }

    console.log('highlighting');
    const cells = this.calendar.querySelectorAll('td');
    for (let i = 0; i < cells.length; i += 1) {
      const cell = cells[i];
      const cellDate = +cell.textContent;

      let cellDateObj;
      if (cellDate - i > 15) {
        // we get prev month dates here
        const jsMonth = this.currentMonth - 1; // to 0..11 format
        const month = jsMonth === 0 ? 11 : jsMonth - 1;
        cellDateObj = new Date(this.currentYear, month, cellDate);
      } else if (cellDate - i < -15) {
        // we get next month dates here
        const jsMonth = this.currentMonth - 1; // to 0..11 format
        const month = jsMonth === 11 ? 0 : jsMonth + 1;
        cellDateObj = new Date(this.currentYear, month, cellDate);
      } else {
        const jsMonth = this.currentMonth - 1; // to 0..11 format
        cellDateObj = new Date(this.currentYear, jsMonth, cellDate);
      }

      if (this.startDate.getTime() <= cellDateObj.getTime()
        && cellDateObj.getTime() <= this.endDate.getTime()) {
        cell.classList.add('b-input-field__e-date_selected');
        if (cellDateObj.getTime() === this.startDate.getTime()) {
          cell.classList.add('b-input-field__e-date_first');
          cell.classList.add('b-input-field__e-date_picked');
        } else if (cellDateObj.getTime() === this.endDate.getTime()) {
          cell.classList.add('b-input-field__e-date_last');
          cell.classList.add('b-input-field__e-date_picked');
        }
      }
    }
  }

  // Function to format the date as "dd.mm.yyyy"
  formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const formattedDate = date.toLocaleString('ru', {
      day: '2-digit',
      month: 'short',
    });
    if (this.isRange) {
      return formattedDate.slice(0, -1);
    }
    return `${day}.${month}.${year}`;
  }

  static initCalendars() {
    const singleDatePickers = document.getElementsByClassName('b-input-field_is-single-date-picker');
    for (let i = 0; i < singleDatePickers.length; i += 1) {
      const singleDatePicker = singleDatePickers[i];
      singleDatePicker.disabled = true;
      new Calendar(singleDatePicker, false);
    }

    const rangeDatePickers = document.getElementsByClassName('b-input-field_is-range-date-picker');
    for (let i = 0; i < rangeDatePickers.length; i += 1) {
      const rangeDatePicker = rangeDatePickers[i];
      rangeDatePicker.disabled = true;
      new Calendar(rangeDatePicker, true);
    }
  }
}
