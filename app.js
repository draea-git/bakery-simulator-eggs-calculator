let quantite = document.getElementById('quantite');
let btnCalcul = document.getElementById('btnCalcul');
let big = document.getElementById('big');
let small = document.getElementById('small');

let btnRefresh = document.getElementById('btnRefresh');

function calculEggs(){
  let y = (quantite.value);
  if (y < 0) {
    y = 0;
  }
  let quoSixteen = Math.floor(y/60);
  let remSixteen = y%60;
  if (remSixteen == 0) {
    big.innerHTML = quoSixteen;
    small.innerHTML = 0;
  } else if (remSixteen == 45) {
      big.innerHTML = quoSixteen;
      small.innerHTML = Math.floor(remSixteen/45);
  } else if (remSixteen != 45) {
      remSixteen = remSixteen+60;
      y = y-60;
      quoSixteen = Math.floor(y/60);
      if (remSixteen == 90) {
        small.innerHTML = Math.floor(remSixteen/45);
        big.innerHTML = quoSixteen;
      } else {
          remSixteen = remSixteen+60;
          y = y-60;
          quoSixteen = Math.floor(y/60);
          small.innerHTML = Math.floor(remSixteen/45);
          big.innerHTML = quoSixteen;
      }
  } else {
    big.innerHTML = "erreur";
    small.innerHTML = "erreur";
  }
}

btnCalcul.addEventListener('click', function(evt) {
  calculEggs();
})

btnRefresh.addEventListener('click', function(evt) {
  quantite.value = "";
  small.innerHTML = "";
  big.innerHTML = "";
})