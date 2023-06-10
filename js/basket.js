import imgItems from "./img-items.js";
const basket = document.querySelector(".basket-1");
const basketTwo = document.querySelector(".basket-2");
const basketBox = document.querySelector(".basket-box");
const deleteButton = document.querySelectorAll(".icon-delete");
const buttonBuy = document.querySelector(".basket-box_button");
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
let check = false;
let arr = [];
let gen = true;
let id = 0;
function createProduct(size, img, price, name) {
  const basketItem = document.createElement("div");
  const basketImg = document.createElement("img");
  const basketName = document.createElement("p");
  const basketPrice = document.createElement("p");
  const basketSize = document.createElement("p");
  const basketDeleteButton = document.createElement("button");
  const iconDelete = document.createElement("img");
  basketDeleteButton.classList.add("basket-item_button");
  basketDeleteButton.classList.add("button-setting");
  iconDelete.classList.add("icon-delete");
  iconDelete.id = id;
  basketDeleteButton.append(iconDelete);
  basketItem.classList.add("basket-item");
  basketImg.classList.add("basket-item_img");
  if (window.location.pathname == "SomeText/index.html") {
    let pathImg = img.split("").splice(3, img.split("").length - 2);
    basketImg.setAttribute("src", pathImg.join(""));
    iconDelete.setAttribute("src", "icons/cross.svg");
  } else {
    basketImg.setAttribute("src", img);
    iconDelete.setAttribute("src", "../icons/cross.svg");
  }
  basketName.classList.add("basket-item_name");
  basketName.textContent = name;
  basketPrice.classList.add("basket-item_price");
  basketPrice.textContent = price + ".rub";
  basketSize.classList.add("basket-item_size");
  basketSize.textContent = "size: " + size;
  basketItem.append(
    basketImg,
    basketName,
    basketPrice,
    basketSize,
    basketDeleteButton
  );
  document.querySelector(".basket-container").append(basketItem);
  id++;
}
basket.onclick = () => {
  let numOnBasket = localStorage.getItem("numsProduct");
  document.querySelector(".basket-box").classList.toggle("basket-box_anim");
  document.querySelector(".burger-box").classList.remove("burger-box_anim");
  document.querySelector(".background").style.visibility = "hidden";
  document.querySelector(".background-basket").style.visibility = "visible";
  check = true;
  if (numOnBasket) {
    document.querySelector(".basket-container").style.visibility = "visible";
    document.querySelector(".basket-box_err").textContent = "";
    document.querySelector(".basket-box_cost").style.visibility = "visible";
    document.querySelector(".basket-box_button").style.top = "800px";
  } else {
    document.querySelector(".basket-box_err").textContent =
      "КОРЗИНА ПУСТАЯ. ДОБАВЬТЕ ХОТЯ БЫ ОДИН ТОВАР В КОРЗИНУ";
    document.querySelector(".basket-box_cost").style.visibility = "hidden";
    document.querySelector(".basket-box_button").style.top = "500px";
    document.querySelector(".basket-container").style.visibility = "hidden";
  }
  startBasket();
};
basketTwo.onclick = () => {
  let numOnBasket = localStorage.getItem("numsProduct");
  document.querySelector(".basket-box").classList.toggle("basket-box_anim");
  document.querySelector(".burger-box").classList.remove("burger-box_anim");
  document.querySelector(".background").style.visibility = "hidden";
  document.querySelector(".background-basket").style.visibility = "visible";
  check = true;
  if (numOnBasket) {
    document.querySelector(".basket-container").style.visibility = "visible";
    document.querySelector(".basket-box_err").textContent = "";
    document.querySelector(".basket-box_cost").style.visibility = "visible";
    document.querySelector(".basket-box_button").style.top = "800px";
  } else {
    document.querySelector(".basket-box_err").textContent =
      "КОРЗИНА ПУСТАЯ. ДОБАВЬТЕ ХОТЯ БЫ ОДИН ТОВАР В КОРЗИНУ";
    document.querySelector(".basket-box_cost").style.visibility = "hidden";
    document.querySelector(".basket-box_button").style.top = "500px";
    document.querySelector(".basket-container").style.visibility = "hidden";
  }
  startBasket();
};
document.addEventListener("click", (e) => {
  arr = [];
  const { target } = e;
  if (target.className == "background-basket") {
    document.querySelector(".basket-box").classList.remove("basket-box_anim");
    check = false;
    document.querySelector(".background-basket").style.visibility = "hidden";
    document.querySelectorAll(".basket-item").forEach((item) => {
      item.remove();
    });
    // window.location.reload();
    document.querySelector(".pay-box").style.visibility = "hidden";
  }
});
if (localStorage.getItem("numsProduct") == undefined) {
  localStorage.setItem("numsProduct", "");
  window.location.replace("/index.html");
}
document.querySelector(".basket-container").addEventListener("click", (e) => {
  let numOnBasket = localStorage.getItem("numsProduct");
  const { target } = e;
  let arr = numOnBasket.split(",");
  if (target.id != "") {
    document.querySelectorAll(".basket-item").forEach((item, i) => {
      item.remove();
    });
    localStorage.setItem("deletedItemNum",arr[target.id])
    const filteredArr = numOnBasket
      .split(",")
      .filter((n) => n != Number(arr[target.id]));
    localStorage.setItem("numsProduct", filteredArr);
    startBasket();
    if (filteredArr.length == 0) {
      document.querySelector(".basket-box_err").textContent =
        "КОРЗИНА ПУСТАЯ. ДОБАВЬТЕ ХОТЯ БЫ ОДИН ТОВАР В КОРЗИНУ";
      document.querySelector(".basket-box_cost").style.visibility = "hidden";
      document.querySelector(".basket-box_button").style.top = "500px";
      document.querySelector(".basket-container").style.visibility = "hidden";
    }
  }
});
function startBasket() {
  let sum = 0;
  let numOnBasket = localStorage.getItem("numsProduct");
  numOnBasket.split(",").forEach((item, i) => {
    arr.push(JSON.parse(localStorage.getItem(item)));
  });
  arr.forEach((item, i) => {
    if (arr[i] == null) {
    } else {
      if (arr.length == 0) {
        sum = 0;
      } else {
        createProduct(
          item.size,
          imgItems[Number(item.number)].mainImg,
          imgItems[Number(item.number)].cost,
          imgItems[Number(item.number)].name
        );
        sum = sum += Number(imgItems[Number(item.number)].cost);
      }
    }
    document.querySelector(".basket-box_cost").textContent =
      "sum: " + sum + ".rub";
    if (i == arr.length - 1) {
      id = 0;
    }
  });
}
buttonBuy.onclick = () => {
  let sum = 0;
  let numOnBasket = localStorage.getItem("numsProduct");
  numOnBasket.split(",").forEach((item, i) => {
    arr.push(JSON.parse(localStorage.getItem(item)));
  });
  arr.forEach((item, i) => {
    if (arr[i] == null) {
    } else {
      if (arr.length == 0) {
        sum = 0;
      } else {
        sum = sum += Number(imgItems[Number(item.number)].cost);
      }
    }
    document.querySelector(".pay-button").textContent = "PAY " + sum + ".rub";
    if (i == arr.length - 1) {
      id = 0;
    }
  });
  const items = document
    .querySelector(".basket-container")
    .querySelectorAll(".basket-item");
  if (items.length == 0) {
  } else {
    document.querySelector(".basket-box").classList.remove("basket-box_anim");
    document.querySelector(".pay-box").style.visibility = "visible";
  }
};
let arrNumbersCart;
document
  .querySelector(".pay-box_card-text_input")
  .addEventListener("input", (e) => {
    let newArr = [];
    arrNumbersCart = e.target.value.split("");
    if (arrNumbersCart.length == 4) {
      document.querySelector(".pay-box_card-text_input").value =
        arrNumbersCart.join("") + "   ";
    } else if (arrNumbersCart.length == 11) {
      document.querySelector(".pay-box_card-text_input").value =
        arrNumbersCart.join("") + "   ";
    } else if (arrNumbersCart.length == 18) {
      document.querySelector(".pay-box_card-text_input").value =
        arrNumbersCart.join("") + "   ";
    }
    arrNumbersCart.forEach((item) => {
      if (item === 1) {
        newArr.push(item);
      }
    });
    if (arrNumbersCart.length == 20) {
      for (let i = 0; i < 3; i++) {
        arrNumbersCart.pop();
      }
      document.querySelector(".pay-box_card-text_input").value =
        arrNumbersCart.join("");
    } else if (arrNumbersCart.length == 13) {
      for (let i = 0; i < 3; i++) {
        arrNumbersCart.pop();
      }
      document.querySelector(".pay-box_card-text_input").value =
        arrNumbersCart.join("");
    } else if (arrNumbersCart.length == 6) {
      for (let i = 0; i < 3; i++) {
        arrNumbersCart.pop();
      }
      document.querySelector(".pay-box_card-text_input").value =
        arrNumbersCart.join("");
    }
  });
document.querySelector(".pay-box_card-name_input").addEventListener("input",(e)=>{
  document.querySelector(".pay-box_card-name_input").value = e.target.value.toUpperCase()
})
document.querySelector(".pay-box_address").addEventListener("input",(e)=>{
  document.querySelector(".pay-box_address").value = e.target.value.toUpperCase()
})
document.querySelector(".pay-button").onclick = () => {
  let check = true
  if (document.querySelector(".pay-box_card-text_input").value.length == 25) {
  } else {
    check = false
  }
  if (document.querySelector(".pay-box_card-cvc_input").value.length == 3) {
  } else {
    check = false
  }
  if (document.querySelector(".pay-box_card-name_input").value.length > 10) {
  } else {
    check = false
  }
  if (document.querySelector(".pay-box_address").value.length > 10) {
  } else {
    check = false
  }
  if (document.querySelector(".pay-box_card-date-select-3").value.length == 2) {
  } else {
    check = false
  }
  if (check) {
    document.querySelector(".toast-body").textContent = "Вы успешно оформили заказ! Спасибо за покупку"
    localStorage.setItem("numsProduct","")
    document.querySelector(".pay-box").style.visibility = "hidden";
    document.querySelector(".background-basket").style.visibility = "hidden";
    toastBootstrap.show()
  }
};
document.querySelector(".header-box_title").addEventListener("click",(e)=>{
  const { target } = e;
  localStorage.setItem("deleteItem","")
})