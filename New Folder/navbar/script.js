var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  
  if (prevScrollPos > currentScrollPos) {
    // Show navbar
    navbar.style.top = "0";
  } else {
    // Hide navbar
    navbar.style.top = "-50px";
  }
  
  prevScrollPos = currentScrollPos;
}
