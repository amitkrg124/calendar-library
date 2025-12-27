// src/lib/components/Calendar/Calendar.tsx
import { useMemo } from "react";

// src/lib/components/Calendar/Calendar.module.css
var Calendar_default = {};

// src/lib/components/Calendar/CalendarHeader.tsx
import { jsxs } from "react/jsx-runtime";
var CalendarHeader = ({ monthName, year }) => {
  return /* @__PURE__ */ jsxs("div", { className: Calendar_default.header, "data-testid": "calendar-header", children: [
    monthName,
    " ",
    year
  ] });
};

// src/lib/components/Calendar/CalendarDayHeader.tsx
import { jsx } from "react/jsx-runtime";
var CalendarDayHeader = ({ dayNames }) => {
  return /* @__PURE__ */ jsx("div", { className: Calendar_default.dayHeader, "data-testid": "calendar-day-header", children: dayNames.map((day) => /* @__PURE__ */ jsx("div", { className: Calendar_default.dayName, children: day }, day)) });
};

// src/lib/components/Calendar/CalendarGrid.tsx
import React from "react";

// src/lib/components/Calendar/CalendarCell.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var CalendarCell = ({
  day,
  isHighlighted,
  ariaLabel
}) => {
  if (day === null) {
    return /* @__PURE__ */ jsx2("div", { className: `${Calendar_default.cell} ${Calendar_default.emptyCell}`, "aria-hidden": "true" });
  }
  const cellClasses = `${Calendar_default.cell} ${isHighlighted ? Calendar_default.highlightedCell : ""}`;
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: cellClasses,
      "data-testid": isHighlighted ? "highlighted-cell" : "calendar-cell",
      "aria-label": ariaLabel,
      role: "gridcell",
      tabIndex: isHighlighted ? 0 : -1,
      children: day
    }
  );
};

// src/lib/utils/calendarUtils.ts
var getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};
var getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};
var getMonthName = (month) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return monthNames[month];
};
var getDayNames = () => {
  return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
};
var generateCalendarGrid = (year, month) => {
  const firstDay = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const grid = [];
  let currentWeek = [];
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      grid.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    grid.push(currentWeek);
  }
  return grid;
};
var isSameDay = (date1, date2) => {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};
var formatDateForA11y = (year, month, day) => {
  const paddedMonth = String(month + 1).padStart(2, "0");
  const paddedDay = String(day).padStart(2, "0");
  return `${year}-${paddedMonth}-${paddedDay}`;
};

// src/lib/components/Calendar/CalendarGrid.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var CalendarGrid = ({
  grid,
  highlightedDate,
  year,
  month
}) => {
  return /* @__PURE__ */ jsx3("div", { className: Calendar_default.grid, role: "grid", "data-testid": "calendar-grid", children: grid.map((week, weekIndex) => /* @__PURE__ */ jsx3(React.Fragment, { children: week.map((day, dayIndex) => {
    const isHighlighted = day !== null && isSameDay(highlightedDate, new Date(year, month, day));
    const ariaLabel = day !== null ? formatDateForA11y(year, month, day) : void 0;
    return /* @__PURE__ */ jsx3(
      CalendarCell,
      {
        day,
        isHighlighted,
        ariaLabel
      },
      `day-${weekIndex}-${dayIndex}`
    );
  }) }, `week-${weekIndex}`)) });
};

// src/lib/components/Calendar/Calendar.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Calendar = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthName = useMemo(() => getMonthName(month), [month]);
  const dayNames = useMemo(() => getDayNames(), []);
  const calendarGrid = useMemo(
    () => generateCalendarGrid(year, month),
    [year, month]
  );
  return /* @__PURE__ */ jsxs2("div", { className: Calendar_default.calendar, "data-testid": "calendar", children: [
    /* @__PURE__ */ jsx4(CalendarHeader, { monthName, year }),
    /* @__PURE__ */ jsx4(CalendarDayHeader, { dayNames }),
    /* @__PURE__ */ jsx4(
      CalendarGrid,
      {
        grid: calendarGrid,
        highlightedDate: date,
        year,
        month
      }
    )
  ] });
};
export {
  Calendar,
  formatDateForA11y,
  getDaysInMonth,
  getMonthName,
  isSameDay
};
