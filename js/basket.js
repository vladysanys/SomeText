import imgItems from "./img-items.js";
const basket = document.querySelector(".basket-1");
const basketTwo = document.querySelector(".basket-2");
const basketBox = document.querySelector(".basket-box");
let check = false;
let arr = [];
let gen = true;
function createProduct(size, img, price, name) {
  const basketItem = document.createElement("div");
  const basketImg = document.createElement("img");
  const basketName = document.createElement("p");
  const basketPrice = document.createElement("p");
  const basketSize = document.createElement("p");
  basketItem.classList.add("basket-item");
  basketImg.classList.add("basket-item_img");
  if(window.location.pathname == "/SomeText/index.html"){
    let pathImg = img.split("").splice(3,img.split("").length-2)
    basketImg.setAttribute("src", pathImg.join(""));
  } else{
    basketImg.setAttribute("src", img);
  }
  basketName.classList.add("basket-item_name");
  basketName.textContent = name;
  basketPrice.classList.add("basket-item_price");
  basketPrice.textContent = price + ".rub";
  basketSize.classList.add("basket-item_size");
  basketSize.textContent = "size: " + size;
  basketItem.append(basketImg, basketName, basketPrice, basketSize);
  document.querySelector(".basket-container").append(basketItem);
}
basket.onclick = () => {
  let sum = 0;
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
  numOnBasket.split(",").forEach((item, i) => {
    arr.push(JSON.parse(localStorage.getItem(item)));
  });

  arr.forEach((item, i) => {
    sum = sum += Number(imgItems[Number(item.number)].cost);
    document.querySelector(".basket-box_cost").textContent =
      "sum: " + sum + ".rub";
    createProduct(
      item.size,
      imgItems[Number(item.number)].mainImg,
      imgItems[Number(item.number)].cost,
      imgItems[Number(item.number)].name
    );
  });
};
basketTwo.onclick = () => {
  let sum = 0;
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
  numOnBasket.split(",").forEach((item, i) => {
    arr.push(JSON.parse(localStorage.getItem(item)));
  });

  arr.forEach((item, i) => {
    sum = sum += Number(imgItems[Number(item.number)].cost);
    document.querySelector(".basket-box_cost").textContent =
      "sum: " + sum + ".rub";
    createProduct(
      item.size,
      imgItems[Number(item.number)].mainImg,
      imgItems[Number(item.number)].cost,
      imgItems[Number(item.number)].name
    );
  });
};
document.addEventListener("click", (e) => {
  arr = [];
  const { target } = e;
  if (target.className == "background-basket") {
    document.querySelector(".basket-box").classList.toggle("basket-box_anim");
    check = false;
    document.querySelector(".background-basket").style.visibility = "hidden";
    document.querySelectorAll(".basket-item").forEach((item) => {
      item.remove();
    });
  }
});
if(localStorage.getItem("numsProduct") == undefined){
  localStorage.setItem("numsProduct","")
}
console.log(window.location.pathname);
