import imgItems from "./img-items.js";
const prevButton = document.querySelector(".carousel-box_prev");
const nextButton = document.querySelector(".carousel-box_next");
const mainImg = document.querySelector(".carousel-box_main-img");
const costName = document.querySelector(".cost-box_name");
const costSum = document.querySelector(".cost-box_cost-text");
const sizes = document.querySelectorAll(".size");
const buttonSizeL = document.querySelector(".cost-box_size-l");
const buttonSizeXl = document.querySelector(".cost-box_size-xl");
const aboutText = document.querySelector(".about-box_text-contayner_text");
const moreButtons = document.querySelectorAll(".card-item_button-more");
const cardsItems = document
  .querySelector(".more-box")
  .querySelectorAll(".card-item");
let switchValue = 0;
localStorage.setItem("numOnBasket", false);
localStorage.setItem("soket", "");
let idImg = 0;
let numsProduct = [];
let sizesProduct = [];
let sizeL = false;
let sizeXL = false;
let num = localStorage.getItem("numPage");
cardsItems.forEach((item, i) => {
  item
    .querySelector("img")
    .setAttribute("src", imgItems[imgItems[num].nums[i]].mainImg);
  item.querySelector(".card-item_title").textContent =
    imgItems[imgItems[num].nums[i]].name;
  moreButtons[i].id = imgItems[num].nums[i];
});
function createLocaleProduct(num1,size) {
  const obj = {number:num1,size:size}
  localStorage.setItem(num1,JSON.stringify(obj))
}
mainImg.setAttribute("src", imgItems[num].miniImg[switchValue]);
costName.textContent = imgItems[num].name;
costSum.textContent = imgItems[num].cost + ".rub";
aboutText.textContent = imgItems[num].about;
imgItems[num].miniImg.forEach((item, i) => {
  createMiniImg(i);
});
function createMiniImg(images) {
  const img = document.createElement("img");
  img.classList.add("carousel-box_mini-img");
  img.classList.add("mini-img");
  img.id = idImg;
  img.setAttribute("src", imgItems[num].miniImg[images]);
  document.querySelector(".images-box").append(img);
  idImg++;
}
prevButton.onclick = () => {
  switchValue =
    switchValue <= 0 ? imgItems[num].miniImg.length - 1 : switchValue - 1;
  switchImg();
};
nextButton.onclick = () => {
  switchValue =
    imgItems[num].miniImg.length - 1 == switchValue ? 0 : switchValue + 1;
  switchImg();
};
const switchImg = () => {
  const miniImgArr = document.querySelectorAll(".mini-img");
  miniImgArr.forEach((item, i) => {
    if (i == switchValue) {
      item.style.border = "1px solid #000000";
    } else {
      item.style.border = "none";
    }
  });
  mainImg.setAttribute("src", imgItems[num].miniImg[switchValue]);
};
document.querySelector(".images-box").addEventListener("click", (e) => {
  const { target } = e;
  if (target.id) {
    switchValue = Number(target.id);
    switchImg();
  }
});
buttonSizeL.onclick = () => {
  buttonSizeL.classList.toggle("size_anim");
  buttonSizeXl.classList.remove("size_anim");
  const button = document.querySelector(".size_anim");
  if (button) {
    sizeL = true;
    sizeXL = false;
    checkBasket = true;
  } else {
    sizeL = false;
    sizeXL = false;
    checkBasket = false;
    document.querySelector(".cost-box_button-basket").textContent =
      "ДОБАВИТЬ В КОРЗИНУ";
    localStorage.setItem("numOnBasket", false);
    numsProduct = [];
    let arr = localStorage.getItem("numsProduct");
    let filteredArr = arr.split(",");
    filteredArr.pop();
    localStorage.setItem("numsProduct", filteredArr);
  }
};
let checkBasket = true;
buttonSizeXl.onclick = () => {
  buttonSizeXl.classList.toggle("size_anim");
  buttonSizeL.classList.remove("size_anim");
  const button = document.querySelector(".size_anim");
  if (button) {
    sizeXL = true;
    sizeL = false;
    checkBasket = true;
  } else {
    sizeXL = false;
    sizeL = false;
    checkBasket = false;
    document.querySelector(".cost-box_button-basket").textContent =
      "ДОБАВИТЬ В КОРЗИНУ";
    localStorage.setItem("numOnBasket", false);
    numsProduct = [];
    let arr = localStorage.getItem("numsProduct");
    let filteredArr = arr.split(",");
    filteredArr.pop();
    localStorage.setItem("numsProduct", filteredArr);
  }
};
// localStorage.setItem("sizesProduct","")
// localStorage.setItem("numsProduct", "");
document.querySelector(".cost-box_button-basket").onclick = () => {
  if ((sizeL && checkBasket) || (sizeXL && checkBasket)) {
    document.querySelector(".cost-box_button-basket").textContent = "ДОБАВЛЕНО";
    checkBasket = !checkBasket;
    localStorage.setItem("numOnBasket", true);
    numsProduct.push(num);
    let arr = localStorage.getItem("numsProduct");
    let soket = [...arr, ...numsProduct];
    let filteredArr = [];
    soket.forEach((item) => {
      if (item != ",") {
        filteredArr.push(item);
      }
    });
    localStorage.setItem("numsProduct", filteredArr);
    if (sizeL) {
      createLocaleProduct(num,"l")
    } else if (sizeXL) {
      createLocaleProduct(num,"xl")
    }
  } else {
    numsProduct = [];
    let arr = localStorage.getItem("numsProduct");
    let filteredArr = arr.split(",").filter((n) => n !== num);
    localStorage.setItem("numsProduct", filteredArr);
    localStorage.setItem("numOnBasket", false);
    document.querySelector(".cost-box_button-basket").textContent =
      "ДОБАВИТЬ В КОРЗИНУ";
    checkBasket = !checkBasket;
  }
};
let checkItems = localStorage.getItem("numsProduct").split(",");
checkItems.forEach((item) => {
  if (item == num) {
    document.querySelector(".cost-box_button-basket").textContent = "ДОБАВЛЕНО";
    checkBasket = !checkBasket;
  }
});