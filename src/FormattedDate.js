export default function FormattedtDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let day = days[props.date.getDay()];
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour >= 12) return `${day}, ${hour}:${minute}pm`;
  else {
    return `${day}, ${hour}:${minute}am`;
  }
}
