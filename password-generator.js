function capitalLetter(str, length) {
  Letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  arr = str.split("");
  let random;

  for (i = 0; i < length; i++) {
    random = Math.floor(Math.random() * length);
    arr[random] = Letters[i];
  }
  arr = arr.join("");
  return arr;
}

function smallLetter(str, length) {
  Letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  arr = str.split("");
  let random;

  for (i = 0; i < length; i++) {
    random = Math.floor(Math.random() * length);
    arr[random] = Letters[i];
  }
  arr = arr.join("");
  return arr;
}

function number(str, length) {
  intg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  arr = str.split("");
  let random;

  for (i = 0; i < Math.floor(length / 2); i++) {
    random = Math.floor((Math.random() * length) / 2);
    arr[random] = intg[i];
  }
  arr = arr.join("");
  return arr;
}

function pg() {
  let str = "";
  var capitalChk = document.getElementById("capital");
  var smallChk = document.getElementById("small");
  var numberChk = document.getElementById("number");
  var outputObj = document.getElementById("output");
  var lenghtP = parseInt(prompt("Length of your password? ", ""));

  for (i = 0; i < lenghtP; i++) {
    str += "X";
  }

  if (capitalChk.checked == true) {
    str = capitalLetter(str, lenghtP);
  }

  if (smallChk.checked == true) {
    str = smallLetter(str, lenghtP);
  }

  if (numberChk.checked == true) {
    str = number(str, lenghtP);
  }

  outputObj.innerHTML = str;
}
