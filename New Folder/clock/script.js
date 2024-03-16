function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
  
    var hourHand = document.getElementById("hourHand");
    var minuteHand = document.getElementById("minuteHand");
    var secondHand = document.getElementById("secondHand");
  
    var hourAngle = (hour % 12) * 30 + minute / 2;
    var minuteAngle = minute * 6 + second / 10;
    var secondAngle = second * 6;
  
    hourHand.style.transform = "translate(-50%, -100%) rotate(" + hourAngle + "deg)";
    minuteHand.style.transform = "translate(-50%, -100%) rotate(" + minuteAngle + "deg)";
    secondHand.style.transform = "translate(-50%, -100%) rotate(" + secondAngle + "deg)";
  }
  
  setInterval(updateClock, 1000);
  