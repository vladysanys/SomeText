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
const moreButtons = document.querySelectorAll(".card-item_button-more")
const cardsItems = document
  .querySelector(".more-box")
  .querySelectorAll(".card-item");
let switchValue = 0;
let idImg = 0;
let numId = 0;
let numCard = [1]
let sizeL = false;
let sizeXL = false;
let num = localStorage.getItem("numPage");
cardsItems.forEach((item,i) => {
  console.log(imgItems[num].nums[i])
  item.querySelector("img").setAttribute("src", imgItems[imgItems[num].nums[i]].mainImg);
  item.querySelector(".card-item_title").textContent = imgItems[imgItems[num].nums[i]].name
  moreButtons[i].id = imgItems[num].nums[i]
});
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
  } else {
    sizeL = false;
  }
};
buttonSizeXl.onclick = () => {
  buttonSizeXl.classList.toggle("size_anim");
  buttonSizeL.classList.remove("size_anim");
  const button = document.querySelector(".size_anim");
  if (button) {
    sizeXL = true;
  } else {
    sizeXL = false;
  }
};
