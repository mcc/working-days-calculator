import moment from "moment";
import Holidays from "date-holidays";

type HolidayType = {
  date: string;
  name: string;
  start?: Date;
  end?: Date;
};

export function getWorkingDaysCount(
  countryCode: string,
  start: Date,
  end: Date
) {
  if (!countryCode) return null;

  const hd = new Holidays();
  hd.init(countryCode);

  const startYear = moment(start).year();
  const endYear = moment(end).year();

  let years = [];
  let holidays: HolidayType[] = [];

  for (let i = 0; i <= endYear - startYear; i++) {
    years.push(startYear + i);
  }

  years.forEach((year) => holidays.push(...hd.getHolidays(year)));

  let count = 0;
  holidays = formatHolidays(holidays);

  const daysDiff = moment(end).diff(moment(start), "days");

  for (let i = 0; i < daysDiff + 1; i++) {
    const current = moment(start).add(i, "days");
    const isHoliday = holidays.find(
      (h) => h.date === current.format("YYYY-MM-DD")
    );

    if (!isHoliday && current.day() !== 6 && current.day() !== 0) {
      count++;
    }
  }

  return {
    workDays: count,
    calendarDays: daysDiff,
  };
}

function formatHolidays(list: HolidayType[]): HolidayType[] {
  let holidays: HolidayType[] = [];

  list.forEach((holiday: HolidayType) => {
    let { start, end, name } = holiday;
    if (name === "설날" || name === "추석") {
      start = moment(start).subtract(1, "days").toDate();
      end = moment(start).add(3, "days").toDate();
    }

    const dayDiff = moment(end).diff(moment(start), "days");

    for (let i = 0; i < dayDiff; i++) {
      holidays.push({
        date: moment(start).add(i, "days").format("YYYY-MM-DD"),
        name: name,
      });
    }
  });
  return holidays;
}
