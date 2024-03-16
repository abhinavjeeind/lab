function convertTextToSpeech() {
    var textInput = document.getElementById("textInput").value;
    var output = document.getElementById("output");
  
    // Check if the browser supports the Web Speech API
    if ('speechSynthesis' in window) {
      // Create a new instance of SpeechSynthesisUtterance
      var msg = new SpeechSynthesisUtterance();
  
      // Set the text to be spoken
      msg.text = textInput;
  
      // Speak the text
      window.speechSynthesis.speak(msg);
  
      // Update the output display
      output.textContent = "Speaking: " + textInput;
    } else {
      output.textContent = "Sorry, your browser doesn't support text to speech conversion.";
    }
  }
  