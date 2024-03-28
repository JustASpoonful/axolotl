let isBlue = true;

function toggleProxy() {
  document.body.classList.toggle('blue-border', isBlue);
  document.body.classList.toggle('red-border', !isBlue);
  isBlue = !isBlue;
}
