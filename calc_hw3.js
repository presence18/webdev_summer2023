// This function clears the display box
function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  // This function appends the clicked button value to the display box
  function display(value) {
    if (value === "sin" || value === "cos" || value === "tan") {
      document.getElementById("result").value += value + "(";
    } else {
      document.getElementById("result").value += value;
    }
  }
  
  // This function evaluates the expression and returns the result
  function calculate() {
    var expression = document.getElementById("result").value;
    var result;
  
    // Check if the expression contains sin, cos, or tan
    if (expression.includes("sin(") || expression.includes("cos(") || expression.includes("tan(")) {
      try {
        // Replace sin, cos, and tan with Math.sin, Math.cos, and Math.tan respectively
        expression = expression.replace(/sin/g, "Math.sin");
        expression = expression.replace(/cos/g, "Math.cos");
        expression = expression.replace(/tan/g, "Math.tan");
  
        result = eval(expression); // Evaluate the modified expression
      } catch (error) {
        result = "Error"; // Display "Error" if there is a calculation error
      }
    } else {
      result = eval(expression); // Evaluate the expression as usual
    }
  
    document.getElementById("result").value = result;
  }