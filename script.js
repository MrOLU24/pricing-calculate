document.addEventListener("DOMContentLoaded", function () {
  const ValueInput = document.getElementById("value");
  ValueInput.addEventListener("keyup", pricing);
});

function pricing() {
  let val = document.getElementById("value").value;
  let settleEl = document.getElementById("settle");
  let feesEl = document.getElementById("fees");

  //calculate
  let charge = (1.5 / 100) * val;
  let fees = val - charge;

  //update the dom
  settleEl.innerHTML = fees.toLocaleString();
  feesEl.innerHTML = charge.toLocaleString();
}
