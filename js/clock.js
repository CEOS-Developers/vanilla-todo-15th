const clock = document.querySelector('h2.clock');

// clock 기능 구현
function getClock() {
  const date = new Date();

  // 00:00:00의 형태로 시계 포멧 맞추기
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();

// 1초 마다 getClock 실행
setInterval(getClock, 1000);
