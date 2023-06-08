const loginButton = document.querySelector(".login-1");
const signButton = document.querySelector(".signin");
const inputOne = document.querySelector(".input-1");
const inputTwo = document.querySelector(".input-2");
const inputThree = document.querySelector(".input-3");
const inputFour = document.querySelector(".input-4");
const inputFive = document.querySelector(".input-5");
const loginButtonMain = document.querySelector(".login-button");
const signinButtonMain = document.querySelector(".signin-button");
function createObj(login, password, name) {
  const obj = {
    name: name,
    login: login,
    password: password,
  };
  console.log(obj);
}
let err = true;
// function alphabetCheck(word) {
//   console.log(word.split(""));
//   let alphabet = "abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ";
//   alphabet.split("").forEach((item) => {
//     for (let i = 0; i < word.split("").length; i++) {
//       if (item != word.split("")[i]) {
//         err = false;
//         console.log(123);
//       }
//     }
//   });
// }
loginButton.classList.add("anim");
loginButton.onclick = () => {
  loginButton.classList.add("anim");
  signButton.classList.remove("anim");
  document.querySelector(".card-signin").style.visibility = "hidden";
  document.querySelector(".card-login").style.visibility = "visible";
  document.querySelector(".err-login").style.visibility = "hidden";
};
signButton.onclick = () => {
  loginButton.classList.remove("anim");
  signButton.classList.add("anim");
  document.querySelector(".card-login").style.visibility = "hidden";
  document.querySelector(".card-signin").style.visibility = "visible";
  document.querySelector(".err-login").style.visibility = "hidden";
};
loginButtonMain.onclick = () => {
  let login;
  let valid;
  inputOne.value.split("").forEach((item) => {
    if (item == "@") {
      valid = true;
    }
  });
  if (inputTwo.value.length > 8) {
    document.querySelector(".err-login").style.visibility = "hidden";
    let arr = inputTwo.value.split("");
    if (arr[0] == arr[0].toUpperCase) {
      console.log(123);
    }
  } else {
    valid = false;
  }
  if (valid) {
    login = inputOne.value;
    document.querySelector(".err-login").style.visibility = "hidden";
    console.log(123);
  } else {
    document.querySelector(".err-login").style.visibility = "visible";
  }
  let password = inputTwo.value;
};
signinButtonMain.onclick = () => {
  let login;
  let valid;
  let name;
  let password;
  inputFour.value.split("").forEach((item) => {
    if (item == "@") {
      valid = true;
    }
  });
  if (inputThree.value.length > 4) {
    document.querySelector(".err-login").style.visibility = "hidden";
    name = inputThree.value;
  } else {
    valid = false;
  }
  if (inputFive.value.length > 8) {
    let arr = inputFive.value.split("");
    if (arr[0] == arr[0].toUpperCase()) {
      document.querySelector(".err-login").style.visibility = "hidden";
      password = inputFive.value
    }
  } else {
    let arr = inputFive.value.split("");
    valid = false;
  }
  if (valid && err) {
    login = inputFour.value;
    document.querySelector(".err-login").style.visibility = "hidden";
  } else {
    document.querySelector(".err-login").style.visibility = "visible";
  }
  // alphabetCheck(login);
  // alphabetCheck(password);
  if (err) {
    createObj(login, password, name);
  }
};
