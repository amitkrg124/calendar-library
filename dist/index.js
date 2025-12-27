"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/index.ts
var index_exports = {};
__export(index_exports, {
  Calendar: () => Calendar,
  formatDateForA11y: () => formatDateForA11y,
  getDaysInMonth: () => getDaysInMonth,
  getMonthName: () => getMonthName,
  isSameDay: () => isSameDay
});
module.exports = __toCommonJS(index_exports);

// src/lib/components/Calendar/Calendar.tsx
var import_react2 = require("react");

// src/lib/components/Calendar/Calendar.module.css
var Calendar_default = {};

// src/lib/components/Calendar/CalendarHeader.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var CalendarHeader = ({ monthName, year }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: Calendar_default.header, "data-testid": "calendar-header", children: [
    monthName,
    " ",
    year
  ] });
};

// src/lib/components/Calendar/CalendarDayHeader.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var CalendarDayHeader = ({ dayNames }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Calendar_default.dayHeader, "data-testid": "calendar-day-header", children: dayNames.map((day) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: Calendar_default.dayName, children: day }, day)) });
};

// src/lib/components/Calendar/CalendarGrid.tsx
var import_react = __toESM(require("react"));

// src/lib/components/Calendar/CalendarCell.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var CalendarCell = ({
  day,
  isHighlighted,
  ariaLabel
}) => {
  if (day === null) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `${Calendar_default.cell} ${Calendar_default.emptyCell}`, "aria-hidden": "true" });
  }
  const cellClasses = `${Calendar_default.cell} ${isHighlighted ? Calendar_default.highlightedCell : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var CalendarGrid = ({
  grid,
  highlightedDate,
  year,
  month
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: Calendar_default.grid, role: "grid", "data-testid": "calendar-grid", children: grid.map((week, weekIndex) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react.default.Fragment, { children: week.map((day, dayIndex) => {
    const isHighlighted = day !== null && isSameDay(highlightedDate, new Date(year, month, day));
    const ariaLabel = day !== null ? formatDateForA11y(year, month, day) : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
var Calendar = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthName = (0, import_react2.useMemo)(() => getMonthName(month), [month]);
  const dayNames = (0, import_react2.useMemo)(() => getDayNames(), []);
  const calendarGrid = (0, import_react2.useMemo)(
    () => generateCalendarGrid(year, month),
    [year, month]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: Calendar_default.calendar, "data-testid": "calendar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CalendarHeader, { monthName, year }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CalendarDayHeader, { dayNames }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Calendar,
  formatDateForA11y,
  getDaysInMonth,
  getMonthName,
  isSameDay
});
