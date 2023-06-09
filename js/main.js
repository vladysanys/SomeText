const imgOne = document.querySelector(".img-0")
const imgTwo = document.querySelector(".img-1")
const imgThree = document.querySelector(".img-2")
const imgFour = document.querySelector(".img-3")
const imgFive = document.querySelector(".img-4")
const imgSix = document.querySelector(".img-5")
imgOne.addEventListener("mouseover",(e)=>{
  const {target} = e
  imgOne.setAttribute("src","img/full-zipped_noodie-2.png")
})
imgOne.addEventListener("mouseout",(e)=>{
  const {target} = e
  imgOne.setAttribute("src","img/full-zipped_noodie.png")
})

imgTwo.addEventListener("mouseover",(e)=>{
  const {target} = e
  imgTwo.setAttribute("src","img/who-are-u_hoodie-2.png")
})
imgTwo.addEventListener("mouseout",(e)=>{
  const {target} = e
  imgTwo.setAttribute("src","img/who-are-u_hoodie.png")
})

imgThree.addEventListener("mouseover",(e)=>{
  const {target} = e
  imgThree.setAttribute("src","img/AEF-logo-TEE-2.png")
})
imgThree.addEventListener("mouseout",(e)=>{
  const {target} = e
  imgThree.setAttribute("src","img/AEF-logo-TEE.png")
})
imgFour.addEventListener("mouseover",(e)=>{
  const {target} = e
  imgFour.setAttribute("src","img/artist-hoodie-2.png")
})
imgFour.addEventListener("mouseout",(e)=>{
  const {target} = e
  imgFour.setAttribute("src","img/artist-hoodie.png")
})
imgFive.addEventListener("mouseover",(e)=>{
  const {target} = e
  imgFive.setAttribute("src","img/artist-TEE-2.png")
})
imgFive.addEventListener("mouseout",(e)=>{
  const {target} = e
  imgFive.setAttribute("src","img/artist-TEE.png")
})
imgSix.addEventListener("mouseover",(e)=>{
  const {target} = e
  imgSix.setAttribute("src","img/carousel-img-2_1.png")
})
imgSix.addEventListener("mouseout",(e)=>{
  const {target} = e
  imgSix.setAttribute("src","img/stih-TEE.png")
})