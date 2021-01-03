import { format, sub } from "date-fns";

export function processDateRange(rangeValue) {
  let date = new Date();
  if (rangeValue === "this_week") {
    date = sub(new Date(), { days: 7 });
  } else if (rangeValue === "this_month") {
    date = sub(new Date(), { months: 1 });
  }
  return format(date, "yyyy-MM-dd");
}
