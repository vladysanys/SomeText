const loginButton = document.querySelector(".login-1");
const signButton = document.querySelector(".signin");
const inputOne = document.querySelector(".input-1");
const inputTwo = document.querySelector(".input-2");
const inputThree = document.querySelector(".input-3");
const inputFour = document.querySelector(".input-4");
const inputFive = document.querySelector(".input-5");
const loginButtonMain = document.querySelector(".login-button");
const signinButtonMain = document.querySelector(".signin-button");
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
async function getData() {
  try {
    const response = await fetch(
      "https://giving-oriole-32739.kv.vercel-storage.com/get/users",
      {
        headers: {
          Authorization:
            "Bearer AX_jASQgNWUwNGY4N2ItZDNhZS00OTAzLTkxOTQtNGYzNWRhZTMyM2Y0ZDY0MjBkZDdmMDBiNDRlOTlkMWVjNjM1MTkzM2Q2YWI=",
        },
      }
    );
    const data = await response.json();
    if (data) {
      const data1 = data;
      return data1;
    }
  } catch (error) {
    console.log(error);
  }
}
const result = await getData();
const parseData = JSON.parse(result.result);
const { users } = parseData;
async function saveData() {
  const result = await getData();
  const parseData = JSON.parse(result.result);
  const { users } = parseData;
  console.log(users);
}

let newUsers = [];
const sendingData = () => {
  fetch(`https://giving-oriole-32739.kv.vercel-storage.com/set/users`, {
    headers: {
      Authorization: `Bearer AX_jASQgNWUwNGY4N2ItZDNhZS00OTAzLTkxOTQtNGYzNWRhZTMyM2Y0ZDY0MjBkZDdmMDBiNDRlOTlkMWVjNjM1MTkzM2Q2YWI=`,
    },
    body: JSON.stringify({
      users: newUsers,
    }),
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
function createObj(login, password, name) {
  let check = true;
  saveData();
  const obj = {
    name: name,
    login: login,
    password: password,
    size: localStorage.getItem("numsProduct"),
  };
  users.forEach((item) => {
    if (item.login == login) {
      console.log("err");
      check = false;
    }
  });
  if (check) {
    console.log(666);
    newUsers = [...users, obj];
    document.querySelector(".err-login").style.visibility = "hidden";
    sendingData();
    document.querySelector(".toast-body").textContent ="Вы были успешно зарегистрированы!"
    toastBootstrap.show()
    localStorage.setItem("registered",true)
  } else {
    document.querySelector(".err-login").style.visibility = "visible";
  }
  console.log(newUsers);
}
let err = true;
let check = false;
function alphabetCheck(str) {
  let match = /^[a-zA-Z\d\s!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]+$/i.test(str);
  return match;
}
loginButton.classList.add("anim");
loginButton.onclick = () => {
  loginButton.classList.add("anim");
  signButton.classList.remove("anim");
  document.querySelector(".card-signin").style.visibility = "hidden";
  document.querySelector(".card-login").style.visibility = "visible";
  document.querySelector(".err-login").style.visibility = "hidden";
  document.querySelector(".login-img").setAttribute("src","../img/loginImg.svg")
};
signButton.onclick = () => {
  loginButton.classList.remove("anim");
  signButton.classList.add("anim");
  document.querySelector(".card-login").style.visibility = "hidden";
  document.querySelector(".card-signin").style.visibility = "visible";
  document.querySelector(".err-login").style.visibility = "hidden";
  document.querySelector(".login-img").setAttribute("src","../img/signin-2.png")
};
loginButtonMain.onclick = async () => {
  let password = inputTwo.value;
  let login = inputOne.value;
  async function getData() {
    try {
      const response = await fetch(
        "https://giving-oriole-32739.kv.vercel-storage.com/get/users",
        {
          headers: {
            Authorization:
              "Bearer AX_jASQgNWUwNGY4N2ItZDNhZS00OTAzLTkxOTQtNGYzNWRhZTMyM2Y0ZDY0MjBkZDdmMDBiNDRlOTlkMWVjNjM1MTkzM2Q2YWI=",
          },
        }
      );
      const data = await response.json();
      if (data) {
        const data1 = data;
        return data1;
      }
    } catch (error) {
      console.log(error);
    }
  }
  // const result = await getData();
  const result = await getData();
  const parseData = JSON.parse(result.result);
  const { users } = parseData;
  let check = false;
  let num = 0
  users.forEach((item,i) => {
    if (item.login == login && item.password == password) {
      check = true;
      num = i
    }
  });
  if (check) {
    console.log("Вы успешно зашли!");
    localStorage.setItem("numsProduct",users[num].size)
    toastBootstrap.show()
    localStorage.setItem("registered",true)
    // console.log(users[num].name);\
    console.log(num);
    document.querySelector(".err-login").style.visibility = "hidden";
  } else {
    document.querySelector(".err-login").style.visibility = "visible";
  }
};
console.log(users);
signinButtonMain.onclick = () => {
  let checkLogin = false;
  let checkPass = false;
  let login = inputFour.value;
  let valid;
  let name = inputThree.value;
  let password = inputFive.value;
  let check = false;
  if (
    login.length > 9 &&
    login.length < 22 &&
    password.length > 7 &&
    password.length < 22 &&
    name.length > 5 &&
    name.length < 20
  ) {
    if (alphabetCheck(login)) {
      login.split("").forEach((item) => {
        if (item == "@") {
          checkLogin = true;
        }
      });
    } else {
      check = true;
    }
    if (alphabetCheck(password)) {
      let arr = password.split("");
      if (arr[0] == arr[0].toUpperCase()) {
        checkPass = true;
      }
    } else {
      check = true;
    }
  } else {
    check = true;
  }
  if (checkLogin && checkPass) {
    check = false;
  } else {
    check = true;
  }
  if (check) {
    document.querySelector(".err-login").style.visibility = "visible";
  } else {
    document.querySelector(".err-login").style.visibility = "hidden";
    createObj(login, password, name);
  }
};