// ===== DISPLAY ELEMENT =====
let display = document.getElementById("display");

// ===== ADD INPUT =====
function append(value) {
  display.value += value;
}

// ===== CLEAR DISPLAY =====
function clearDisplay() {
  display.value = "";
}

// ===== CALCULATE RESULT =====
function calculate() {
  try {
    // replace scientific functions with Math equivalents
    let expression = display.value
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/tan/g, "Math.tan");

    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
