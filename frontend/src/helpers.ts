import moment from "moment/moment";

export function getCurrentWeek() {
  let currentDate = moment();

  let weekStart = currentDate.clone().startOf("isoWeek");

  let days = [];
  let dates = [];

  for (let i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, "days").format("dddd"));
    dates.push(moment(weekStart).add(i, "days").format("MMM DD."));
  }

  return {
    days: days,
    dates: dates,
  };
}
