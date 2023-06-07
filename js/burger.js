const spots = document.querySelector(".header-box_spot")
const cross = document.querySelector(".burger-box_icon-cross")
// const login = document.querySelector(".login")
// const shop = document.querySelector(".shop")
// const delivery = document.querySelector(".delivery")
// const contacts = document.querySelector(".contacts")
spots.onclick = () =>{
  document.querySelector(".burger-box").classList.toggle("burger-box_anim")
  document.querySelector(".background").style.visibility = "visible"
}
cross.onclick = () =>{
  document.querySelector(".burger-box").classList.toggle("burger-box_anim")
  document.querySelector(".background").style.visibility = "hidden"
}