let isBlue = true;

function toggleProxy() {
  document.body.classList.toggle('blue-border', isBlue);
  document.body.classList.toggle('red-border', !isBlue);
  isBlue = !isBlue;
}

let variable = false; //false if page rediredcts, true if page dosnt.

    if (!variable) {
      window.location.href = 'https://wattle.vercel.app/warning.html';
    }

    document.getElementById('changeVariableBtn').addEventListener('click', function() {
      variable = true;
    });
  
