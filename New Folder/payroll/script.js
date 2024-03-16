function addEmployee() {
    var employeeName = document.getElementById("employeeName").value;
    var employeeSalary = parseFloat(document.getElementById("employeeSalary").value);
  
    if (employeeName && !isNaN(employeeSalary)) {
      var employeeList = document.getElementById("employeeList");
  
      var li = document.createElement("li");
      li.textContent = employeeName + " - Salary: $" + employeeSalary.toFixed(2);
  
      employeeList.appendChild(li);
  
      // Clear input fields
      document.getElementById("employeeName").value = "";
      document.getElementById("employeeSalary").value = "";
    } else {
      alert("Please enter valid employee name and salary.");
    }
  }
  