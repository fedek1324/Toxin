class Calendar {
    constructor(datePicker, isRange) {
        this.today = new Date();
        this.currentMonth = this.today.getMonth() + 1; // like people count
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
        const handleDocumentClick = event => {
            let isInside = this.datePickerBlock.contains(event.target);
            if (!isInside) {
                console.log('outer of input block click detected. closing block')
                this.input.classList.remove('b-input-field__e-input_active-date-picker');
                this.calendar.classList.remove('b-input-field__e-calendar_active');
                document.removeEventListener("pointerdown", handleDocumentClick, {passive: true});
            }
        }

        document.addEventListener("pointerdown", handleDocumentClick, {passive: true})
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

        // Event listener to toggle the calendar visibility
        this.inputWrapper.addEventListener('pointerdown', event => {
            event.preventDefault();
            this.input.classList.toggle('b-input-field__e-input_active-date-picker');
            this.calendar.classList.toggle('b-input-field__e-calendar_active');
            this.addCloseOnDocumentClickHandlers();
        });
    }

    // Function to generate the calendar HTML
    generateCalendar(year, month) {
        // waiting for addCloseOnDocumentClickHandlers proof that click was on input block
        setTimeout(() => {
            const firstDay = new Date(year, month - 1, 1).getDay();
            const lastDate = new Date(year, month, 0).getDate();
            const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();

            const dayIndexMap = [6, 0, 1, 2, 3, 4, 5]; // Mapping for day index, where Monday is 0 and Sunday is 6

            let dayCounter = 0;
            let tbodyContent = '';
            let weekRow = '';

            // Loop for the previous month dates
            for (let i = dayIndexMap[firstDay] - 1; i >= 0; i--) {
                const date = daysInPreviousMonth - i;
                weekRow += `<td class="b-input-field__e-date b-input-field__e-date_disabled">${date}</td>`;
                dayCounter++;
            }

            // Loop for the current month dates
            for (let i = 1; i <= lastDate; i++) {
                const date = i;
                const currentDate = new Date(year, month - 1, date);
                const isCurrentDate = currentDate.toDateString() === new Date().toDateString(); // Check if it's the current date
                let dateCellClass = 'b-input-field__e-date';
                dateCellClass += isCurrentDate ? 'b-input-field__e-date_current-date' : '';
                weekRow += `<td class="${dateCellClass}">${date}</td>`;
                dayCounter++;

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
                dayCounter++;
                nextMonthDate++;
            }

            // Add the last row if it is not empty
            if (weekRow !== '') {
                tbodyContent += `<tr class="b-input-field__e-week-row">${weekRow}</tr>`;
            }

            const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
            const formattedTitle = `${monthName} ${year}`;

            this.calendar.innerHTML = `
              <table class="b-input-field__e-table">
                <thead class="b-input-field__e-t-head">
                  <tr class="b-input-field__e-first-tr">
                    <th colspan="7" class="b-input-field__e-th">
                      <button class="b-input-field__e-prev-month-btn">&lt;</button>
                      ${formattedTitle}
                      <button class="b-input-field__e-next-month-btn">&gt;</button>
                    </th>
                  </tr>
                  <tr class="b-input-field__e-weekdays">
                    <th class="b-input-field__e-weekday">Пн</th>
                    <th class="b-input-field__e-weekday">Вт</th>
                    <th class="b-input-field__e-weekday">Ср</th>
                    <th class="b-input-field__e-weekday">Чт</th>
                    <th class="b-input-field__e-weekday">Пт</th>
                    <th class="b-input-field__e-weekday">Сб</th>
                    <th class="b-input-field__e-weekday">Вс</th>
                  </tr>
                </thead>
                <tbody class="b-input-field__e-t-body">
                  ${tbodyContent}
                </tbody>
              </table>
            `;
            this.addMonthNavigationHandlers();
        });
    }

    addMonthNavigationHandlers() {
        // Event listeners for month navigation
        const prevMonthBtn = this.calendar.querySelector('.b-input-field__e-prev-month-btn');
        const nextMonthBtn = this.calendar.querySelector('.b-input-field__e-next-month-btn');

        prevMonthBtn.addEventListener('pointerdown', event => {
            event.preventDefault();
            const newMonth = this.currentMonth === 1 ? 12 : this.currentMonth - 1;
            const newYear = this.currentMonth === 1 ? this.currentYear - 1 : this.currentYear;
            this.updateCalendar(newYear, newMonth);
        });

        nextMonthBtn.addEventListener('pointerdown', event => {
            event.preventDefault();
            // waiting for addCloseOnDocumentClickHandlers proof that click was on input block
            const newMonth = this.currentMonth === 12 ? 1 : this.currentMonth + 1;
            const newYear = this.currentMonth === 12 ? this.currentYear + 1 : this.currentYear;
            this.updateCalendar(newYear, newMonth);
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
        this.calendar.addEventListener('pointerdown', (event) => {
            const cell = event.target;
            if (cell.tagName === 'TD' && !cell.classList.contains('b-input-field__e-date_disabled')) {
                const date = parseInt(cell.textContent);
                const selectedDate = new Date(this.currentYear, this.currentMonth - 1, date);
                if (this.isRange) {
                    this.handleClickIfRange(selectedDate);
                } else {
                    this.handleClickIfOneDate(selectedDate);
                }
            }
        })
    }

    handleClickIfRange(selectedDate) {
        // Check if start date is not set
        if (!this.startDate) {
            this.startDate = selectedDate;
            this.endDate = null;
        }
        // Check if only start date is set
        else if (this.startDate && !this.endDate) {
            this.endDate =  new Date(Math.max(this.startDate, selectedDate));
            this.startDate = new Date(Math.min(this.startDate, selectedDate));
        }
        // Check if both start and end dates are set
        else if (this.startDate && this.endDate) {
            this.startDate = selectedDate;
            this.endDate = null;

            // Repaint calendar so it is without range
            this.updateCalendar(this.currentYear, this.currentMonth);
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

    handleClickIfOneDate(selectedDate) {
        const formattedDate = this.formatDate(selectedDate);
        this.input.value = formattedDate;
        // this.calendar.classList.remove('b-input-field__e-calendar_active');
    }

    highlightRange() {
        // Highlight the selected date range
        const cells = this.calendar.querySelectorAll('td');
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            const cellDate = cell.textContent;
            let startDateNum = this.startDate.getDate();
            let endDateNum  = this.endDate.getDate();
            if (cellDate >= startDateNum && cellDate <= endDateNum
                && (Math.abs(cellDate - i) < 15 ) ) { // filter other month
                cell.classList.add('b-input-field__e-date_selected');
            }
        }
    }

    // Function to format the date as "dd.mm.yyyy"
    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    }
}

let singleDatePickers = document.getElementsByClassName("b-input-field_is-single-date-picker");
for (let i = 0; i < singleDatePickers.length; i++) {
    const singleDatePicker = singleDatePickers[i];
    new Calendar(singleDatePicker, false);
    singleDatePicker.disabled = true;
}

let rangeDatePickers = document.getElementsByClassName("b-input-field_is-range-date-picker");
for (let i = 0; i < rangeDatePickers.length; i++) {
    const rangeDatePicker = rangeDatePickers[i];
    rangeDatePicker.disabled = true;
    new Calendar(rangeDatePicker, true);
}
