document.querySelector(".product-box").addEventListener("click",(e)=>{
  const {target}=e
  localStorage.setItem("numPage",target.id)
  window.location.replace("pages/pageProduct.html")
})
