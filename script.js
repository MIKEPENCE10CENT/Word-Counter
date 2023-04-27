function getwordcount(str) {
  let splited = str.trim().split(/\s+/)
  if (splited == '') {
    return 0;
  }
  return splited.length;
}

function counter(str) {
  let alphacount = 0;
  let numbercount = 0;
  let charcount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != '' && str[i] != '/n') {
      charcount++;
    }
    if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      alphacount++;
    }
    else if (str[i] >= '0' && str[i] <= '9') {
      numbercount++;
    }
  }
  document.getElementById("chars").value = charcount;
  document.getElementById("numbers").value = numbercount;
  document.getElementById("alphabets").value = alphacount;
}

function wordcounter() {
  let inputtxt = document.getElementById("inputbox");
  let words = getwordcount(inputtxt.value);
  document.getElementById("words").value = words;
  counter(inputtxt.value);
}
