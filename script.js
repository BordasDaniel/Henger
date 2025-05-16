var sugarSlider = document.getElementById("sugarRange");
var sugarOutput = document.getElementById("sugarKimenet");

sugarOutput.value = sugarSlider.value;

sugarSlider.oninput = function() {
  sugarOutput.value = this.value;
  Szamolas();
}

sugarOutput.oninput = function() {
  sugarSlider.value = this.value;
  Szamolas();
}


var magassagSlider = document.getElementById("magassagRange");
var magassagOutput = document.getElementById("magassagKimenet");

magassagOutput.value = magassagSlider.value; 

magassagSlider.oninput = function() {
  magassagOutput.value = this.value; 
  Szamolas();
}

magassagOutput.oninput = function() {
  magassagSlider.value = this.value;
  Szamolas();
}


function Szamolas()
{
  var terfogat = document.getElementById("szamoltTerfogat");
  var felszin = document.getElementById("szamoltFelszin");

  let r = parseFloat(sugarOutput.value);
  let m = parseFloat(magassagOutput.value);

  terfogat.innerHTML = (Math.PI * Math.pow(r, 2) * m).toFixed(2) + " cm³";
  felszin.innerHTML = (2 * Math.PI * r * r + 2 * Math.PI * r * m).toFixed(2) + " cm²";
}

window.onload = () => {
  Szamolas();
}