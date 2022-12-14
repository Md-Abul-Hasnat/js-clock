const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const secondDeg = (second * 360) / 60;
  const minuteDeg = (secondDeg + minute * 360) / 60;
  const hourDeg = (minuteDeg + hour * 360) / 12;

  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}

updateClock();
setInterval(() => updateClock(), 1000);
