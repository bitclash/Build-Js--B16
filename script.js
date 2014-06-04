var pickNumber = function() {
  var pick = prompt("Pick a number between 1 and 10, sucka!");

  if (pick >10 || pick <1){
    alert("Not so good with the book learnin' are ya??  GO BACK TO SCHOOL, HIPPIE!");
  }

  else if (pick <= 3) {
    alert("Aw, snap! Is that all you GOT!??!");
  }

  else if (pick <= 8) {
    alert("Getting warmer, a-hole!");
  }

  else {
    alert("You've won a pepperoni pizza with 9mm bullets on it.  Courtesy of Arnold.");
  }

};
