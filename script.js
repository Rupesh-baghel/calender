

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const daysContainer = document.querySelector(".days");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const monthElement = document.querySelector(".month");
const todayBtn = document.querySelector(".today-btn");

const date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

function renderCalendar() {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1;

    monthElement.innerHTML = `${months[currentMonth]} ${currentYear}`;

    let daysHTML = "";

    // Previous month's days
    for (let x = firstDay.getDay(); x > 0; x--) {
        daysHTML += `<div class="day prev">${prevLastDate - x + 1}</div>`;
    }

    // Current month's days
    for (let i = 1; i <= lastDate; i++) {
        if (i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
            daysHTML += `<div class="day today">${i}</div>`;
        } else {
            daysHTML += `<div class="day">${i}</div>`;
        }
    }

    // Next month's days
    for (let j = 1; j <= nextDays; j++) {
        daysHTML += `<div class="day next">${j}</div>`;
    }

    hideTodayBtn();
    daysContainer.innerHTML = daysHTML;
}

renderCalendar();

nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

todayBtn.addEventListener("click", () => {
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    renderCalendar();
});

function hideTodayBtn() {
    if (currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
        todayBtn.style.display = "none";
    } else {
        todayBtn.style.display = "flex";
    }
}
