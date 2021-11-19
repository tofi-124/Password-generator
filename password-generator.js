function passwordgenr() {
  let str = "";
  var capitalChk = document.getElementById("capital");
  var smallChk = document.getElementById("small");
  var numberChk = document.getElementById("number");
  var charChk = document.getElementById("character");
  var lengthOfpassword = document.getElementById("length").value;
  var box = document.getElementById("passWordtxt");

  chx = [
    [
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
    ],
    ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
  ];

  if (smallChk.checked == true) {
    console.log("hello");
    for (i = 0; i < lengthOfpassword; i++) {
      str += chx[0][Math.floor(Math.random() * 25)];
      str = str.toLowerCase();
    }
  }

  if (capitalChk.checked == true) {
    if (str) {
      str = str.split("");
      for (j = 0; j < Math.floor(lengthOfpassword / 2); j++) {
        str[j] = str[j].toUpperCase();
      }

      str = str.join("");
    } else {
      for (j = 0; j < lengthOfpassword; j++) {
        str += chx[0][Math.floor(Math.random() * 25)];
      }
    }
  }

  if (numberChk.checked == true) {
    if (str) {
      str = str.split("");
      for (k = 0; k < Math.floor(lengthOfpassword / 2); k++) {
        str[Math.floor(Math.random() * lengthOfpassword)] = Math.floor(
          Math.random() * 10
        );
      }
      str = str.join("");
    } else {
      for (n = 0; n < lengthOfpassword; n++) {
        str += Math.floor(Math.random() * 10);
      }
    }
  }

  if (charChk.checked == true) {
    if (str) {
      str = str.split("");
      for (c = 0; c < Math.floor(lengthOfpassword / 3); c++) {
        str[Math.floor(Math.random() * str.length)] =
          chx[1][Math.floor(Math.random() * 10)];
      }

      str = str.join("");
    } else {
      for (c = 0; c < lengthOfpassword; c++) {
        str += chx[1][Math.floor(Math.random() * 10)];
      }
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
