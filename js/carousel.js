import imgItems from "./img-items.js";
const prevButton = document.querySelector(".carousel-box_prev");
const nextButton = document.querySelector(".carousel-box_next");
const mainImg = document.querySelector(".carousel-box_main-img");
let switchValue = 0;
let idImg = 0;
let num = localStorage.getItem("numPage");
mainImg.setAttribute("src", imgItems[num].miniImg[switchValue]);
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
