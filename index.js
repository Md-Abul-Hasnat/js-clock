const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const hourDeg = (hour / 12) * 360;
  const minuteDeg = (minute / 60) * 360;
  const secondDeg = (second / 60) * 360;

  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;

  setInterval(() => {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    const hourDeg = (hour / 12) * 360;
    const minuteDeg = (minute / 60) * 360;
    const secondDeg = (second / 60) * 360;

    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
  }, 1000);
}

updateClock();
