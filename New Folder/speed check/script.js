function detectNetworkSpeed() {
    var startTime = new Date().getTime();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://example.com/small-file', true);
    xhr.responseType = 'blob';
  
    xhr.onload = function() {
      var endTime = new Date().getTime();
      var duration = endTime - startTime;
      var fileSize = xhr.response.size; // in bytes
      var speed = fileSize / (duration / 1000); // in bytes per second
      var speedKBps = speed / 1024; // convert to KBps
  
      // Display the network speed result
      var speedResultElement = document.getElementById("speedResult");
      speedResultElement.textContent = "Network Speed: " + speedKBps.toFixed(2) + " KB/s";
    };
  
    xhr.send();
  }
  