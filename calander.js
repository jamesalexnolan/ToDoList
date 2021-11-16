moment.locale("en-gb")

var selectedDay = moment();

document.getElementById("selectedDay").innerHTML = selectedDay.format('L')

function addDay() {
    selectedDay.add(1, 'day')
    document.getElementById("selectedDay").innerHTML = selectedDay.format('L')
    document.getElementById("selectedMonth").innerHTML = selectedDay.format('MMMM')
    drawCalendar();
}

function minusDay() {
    selectedDay.subtract(1, 'day')
    document.getElementById("selectedDay").innerHTML = selectedDay.format('L')
    document.getElementById("selectedMonth").innerHTML = selectedDay.format('MMMM')
    drawCalendar();
}

document.getElementById("selectedMonth").innerHTML = selectedDay.format('MMMM')

function addMonth() {
    selectedDay.add(1, 'month')
    document.getElementById("selectedMonth").innerHTML = selectedDay.format('MMMM')
    document.getElementById("selectedDay").innerHTML = selectedDay.format('L')
    drawCalendar();
}

function minusMonth() {
    selectedDay.subtract(1, 'month')
    document.getElementById("selectedMonth").innerHTML = selectedDay.format('MMMM')
    document.getElementById("selectedDay").innerHTML = selectedDay.format('L')
    drawCalendar();
}

var taskCalendarElement = document.getElementById("calendar")

var daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function drawCalendar() {
    var html = ""
    html += '<div class="row">';
    for (i = 0; i < daysOfWeek.length; i++) {
        html += '<div class="dayCell">' + daysOfWeek[i] + "</div>";
    }
    html += '</div>';

    var firstDayOfMonth = moment(selectedDay.year() + "-" + (selectedDay.month() + 1) + "-01");
    var firstDayOfMonthDay = firstDayOfMonth.day() + 1
    var daysInMonth = firstDayOfMonth.daysInMonth()
    var rows = Math.ceil((firstDayOfMonthDay + daysInMonth) / 7)
    for (i = 0; i < rows; i++) {
        for (d = 0; d < 7; d++) {
            var cellNumber = d + 1 + (i * 7)
            var cellDateDay = ''
            if (cellNumber >= firstDayOfMonthDay && cellNumber - firstDayOfMonthDay < daysInMonth) {
                cellDateDay += cellNumber - firstDayOfMonthDay + 1;

            }
            var cellDate = moment(selectedDay.year() + "-" + (selectedDay.month() + 1) + "-" + (100 + cellDateDay).slice(-2));
            var cellIsToday = cellDate.format('D') == selectedDay.format('D')
            if (d === 0) {
                html += '<div class="row">';
            }
            
            var cellTasks = getTasks(cellDate); 
            var cellTasksHtml = ""
            if (cellTasks.length > 0) {
                for (t = 0;  t< cellTasks.length; t++) {
                cellTasksHtml +=  '<div class="cell-task">' + cellTasks[t].title + "</div>";
                }
                    console.log(tasks)
            }
            
            if (cellIsToday) {
                html += '<div class="cell today">' + cellDateDay + cellTasksHtml + "</div>";
            } else {
                html += '<div class="cell">' + cellDateDay + cellTasksHtml + "</div>";
            }
            if (d === 6) {
                html += '</div>';
            
            }
        }
    }
    taskCalendarElement.innerHTML = html
}

drawCalendar()