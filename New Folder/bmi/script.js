function calculateBMI() {
    var heightInput = document.getElementById("height").value;
    var weightInput = document.getElementById("weight").value;
  
    // Convert height from cm to meters
    var height = heightInput / 100;
  
    // Calculate BMI
    var bmi = weightInput / (height * height);
  
    // Display result
    var resultElement = document.getElementById("result");
    if (!isNaN(bmi)) {
      resultElement.textContent = "Your BMI is: " + bmi.toFixed(2);
    } else {
      resultElement.textContent = "Please enter valid height and weight";
    }
  }
  