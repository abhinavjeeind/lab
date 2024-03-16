function calculateGrade() {
    // Get input value
    var marks = parseFloat(document.getElementById("marks").value);
  
    // Check if marks is a valid number
    if (!isNaN(marks)) {
      // Determine grade based on marks
      var grade;
      if (marks >= 90) {
        grade = "A+";
      } else if (marks >= 80) {
        grade = "A";
      } else if (marks >= 70) {
        grade = "B+";
      } else if (marks >= 60) {
        grade = "B";
      } else if (marks >= 50) {
        grade = "C";
      } else if (marks >= 40) {
        grade = "D";
      } else {
        grade = "F";
      }
  
      // Display grade
      document.getElementById("grade").textContent = "Your Grade is: " + grade;
    } else {
      // Display error message if input is not a number
      document.getElementById("grade").textContent = "Please enter valid marks";
    }
  }
  