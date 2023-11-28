const altoInput = document.getElementById("alto");
const anchoInput = document.getElementById("ancho");
const precioPorM2Input = document.getElementById("precioPorM2");
// buttons
const m2TotalButton = document.getElementById("m2TotalButton");
const costoTotalButton = document.getElementById("costoTotalButton");

const totalM2Result = document.querySelector(".totalm2");
const totalCostResult = document.querySelector(".costototal");

function calcularMetrosCuadrados(alto, ancho) {
  const resultM2 = alto * ancho;
  totalM2Result.textContent = resultM2;
}

function calcularCostoTotal(precioPorM2, resultM2) {
  const totalCostM2 = precioPorM2 * resultM2;
  totalCostResult.textContent = "$" + totalCostM2.toFixed(2);
}

m2TotalButton.addEventListener("click", () => {
  const alto = parseFloat(altoInput.value);
  const ancho = parseFloat(anchoInput.value);

  if (!isNaN(alto) && !isNaN(ancho)) {
    calcularMetrosCuadrados(alto, ancho);
  } else {
    totalM2Result.textContent = "Ingrese valores válidos. ";
  }
});

costoTotalButton.addEventListener("click", () => {
  const resultM2 = parseFloat(totalM2Result.textContent);
  const precioPorM2 = parseFloat(precioPorM2Input.value);

  if (!isNaN(resultM2) && !isNaN(precioPorM2)) {
    calcularCostoTotal(resultM2, precioPorM2);
  } else {
    totalM2Result.textContent = "Ingrese valores válidos. ";
  }
});
