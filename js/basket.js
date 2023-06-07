import imgItems from "./img-items.js";
const numsProduct = localStorage.getItem("numsProduct");
const basket = document.querySelector(".basket-1");
const basketTwo = document.querySelector(".basket-2");
const basketBox = document.querySelector(".basket-box");
let check = false;
basket.onclick = () => {
  let numOnBasket = localStorage.getItem("numOnBasket");
  document.querySelector(".basket-box").classList.toggle("basket-box_anim");
  document.querySelector(".background-basket").style.visibility = "visible";
  document.querySelector(".burger-box").classList.remove("burger-box_anim");
  document.querySelector(".background").style.visibility = "hidden";
  check = true;
  if (numOnBasket == "true") {
    document.querySelector(".basket-box_err").textContent = "";
    console.log(numsProduct);
  } else {
    document.querySelector(".basket-box_err").textContent =
      "КОРЗИНА ПУСТАЯ. ДОБАВЬТЕ ХОТЯ БЫ ОДИН ТОВАР В КОРЗИНУ";
  }
};
basketTwo.onclick = () => {
  let numOnBasket = localStorage.getItem("numOnBasket");
  document.querySelector(".basket-box").classList.toggle("basket-box_anim");
  document.querySelector(".burger-box").classList.remove("burger-box_anim");
  document.querySelector(".background").style.visibility = "hidden";
  document.querySelector(".background-basket").style.visibility = "visible";
  check = true;
  if (numOnBasket == "true") {
    document.querySelector(".basket-box_err").textContent = "";
    console.log(numsProduct);
  } else {
    document.querySelector(".basket-box_err").textContent =
      "КОРЗИНА ПУСТАЯ. ДОБАВЬТЕ ХОТЯ БЫ ОДИН ТОВАР В КОРЗИНУ";
  }
};
document.addEventListener("click", (e) => {
  const { target } = e;
  if (target.className == "background-basket") {
    document.querySelector(".basket-box").classList.toggle("basket-box_anim");
    check = false;
    document.querySelector(".background-basket").style.visibility = "hidden";
  }
});
const createProduct = (num) => {};
