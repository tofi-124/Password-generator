function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function passWord(param) {
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
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
  ];

  return Letters[param];
}

function pg() {
  let str = "";
  var capitalChk = document.getElementById("capital");
  var smallChk = document.getElementById("small");
  var numberChk = document.getElementById("number");
  var lenghtP = document.getElementById("length").value;
  var box = document.getElementById("passWordtxt");
  let capitalnum = true;

  for (i = 0; i < lenghtP; i++) {
    if (capitalChk.checked && smallChk.checked && numberChk.checked == true) {
      str += passWord(Math.floor(randomNumber(0, 62)));
    } else if (capitalChk.checked && smallChk.checked == true) {
      str += passWord(Math.floor(randomNumber(0, 53)));
    } else if (capitalChk.checked && numberChk.checked == true) {
      if (capitalnum == false) {
        str += passWord(Math.floor(randomNumber(0, 25)));
        capitalnum = true;
      } else {
        str += passWord(Math.floor(randomNumber(53, 59)));
        capitalnum = false;
      }
    } else if (numberChk.checked && smallChk.checked == true) {
      str += passWord(Math.floor(randomNumber(26, 59)));
    } else if (smallChk.checked == true) {
      str += passWord(Math.floor(randomNumber(26, 53)));
    } else if (numberChk.checked == true) {
      str += passWord(Math.floor(randomNumber(53, 59)));
    } else if (capitalChk.checked == true) {
      str += passWord(Math.floor(randomNumber(0, 25)));
    }
  }

  box.value = str;
  box.innerHTML = str;
}

let saveFile = () => {
  const siteTosave = document.getElementById("txtName");
  var box = document.getElementById("passWordtxt");

  let data =
    "\r Site-Name: " + siteTosave.value + " \r\n " + "Password: " + box.value;

  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = siteTosave.value + ".txt"; // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};
