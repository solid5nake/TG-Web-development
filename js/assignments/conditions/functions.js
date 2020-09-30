function checkNumber() {
  let input = document.getElementById("number").value;
  let text = document.getElementById("label");
  console.log(input)
  if (input > 5 && input < 10) {
    text.innerText = "Het ingevoerde getal is tussen 5 en 10";
  }
  else
    if (input >= 11 && input <= 20) {
      text.innerText = "Het ingevoerde getal is gelijk aan 11 of groter dan 11 en is gelijk aan 20 of kleiner dan 20.";
    }
    else
      if (input == 21 || input == 23) {
        text.innerText = "Het ingevoerde getal is gelijk aan 21 of is gelijk aan 23.";
      }
      else
        if (input > 30 && input < 35 || input > 40 && input < 45) {
          text.innerText = "het getal is tussen 30 en 35 of het getal is tussen 40 en 45.";
          console.log(text.innerText);
        }
        else {
          text.innerText = "";
        }
}

function translateMonth14() {
  // const integer = parseInt(document.getElementById("integer14").value);
  const val = document.getElementById("integer14").value;
  const integer = parseInt(val);
  let output;
  switch (integer) {
    case 1:
      output = 'januari';
      break;
    case 2:
      output = 'februari';
      break;
    case 3:
      output = 'march';
      break;
    case 4:
      output = 'april';
      break;
    case 5:
      output = 'mei';
      break;
    case 6:
      output = 'juni';
      break;
    case 7:
      output = 'juli';
      break;
    case 8:
      output = 'augustus';
      break;
    case 9:
      output = 'september';
      break;
    case 10:
      output = 'oktober';
      break;
    case 11:
      output = 'november';
      break;
    case 12:
      output = 'december';
      break;
    default:
      output = 'De maanden tellen alleen van 1 tot 12.';
  }
  document.getElementById('translatedMonth14').innerHTML = output;
}

function translateMonth() {
  let integer = document.getElementById("integer").value;
  let translatedMonth = document.getElementById("translatedMonth");
  if (integer == 1) {
    translatedMonth.innerHTML = "januari";
  }
  else
    if (integer == 2) {
      translatedMonth.innerHTML = "februari";
    }
  else
    if (integer == 3) {
      translatedMonth.innerHTML = "maart";
    }
  else
    if (integer == 4) {
      translatedMonth.innerHTML = "april";
    }
  else
    if (integer == 5) {
      translatedMonth.innerHTML = "mei";
    }
  else
    if (integer == 6) {
      translatedMonth.innerHTML = "juni";
    }
  else
    if (integer == 7) {
      translatedMonth.innerHTML = "juli";
    }
  else
    if (integer == 8) {
      translatedMonth.innerHTML = "augustus";
    }
  else
    if (integer == 9) {
      translatedMonth.innerHTML = "september";
    }
  else
    if (integer == 10) {
      translatedMonth.innerHTML = "oktober";
    }
  else
    if (integer == 11) {
      translatedMonth.innerHTML = "november";
    }
  else
    if (integer == 12) {
      translatedMonth.innerHTML = "december";
    }
  else {
    translatedMonth.innerHTML = "Voer een cijfer in van 1 tot 12 of die gelijk is aan 1 of 12."
  }
}