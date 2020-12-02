function calculate() {
  let x = parseFloat(document.getElementById("1stnumber").value);
  let y = document.getElementById("operator").value;
  let z = parseFloat(document.getElementById("2ndnumber").value);

  if (isNaN(x) || isNaN(z)) {
    document.getElementById("result").innerHTML = "Error";
  } else {
    if (y === "+") {
      q = parseFloat(x) + parseFloat(z);
    } else if (y === "-") {
      q = parseFloat(x) - parseFloat(z);
    } else if (y === "/") {
      q = parseFloat(x) / parseFloat(z);
    } else if (y === "*") {
      q = parseFloat(x) * parseFloat(z);
    }

    document.getElementById("result").innerHTML = q;
  }
  
}
