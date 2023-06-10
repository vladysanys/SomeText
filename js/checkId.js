document.querySelector(".product-box").addEventListener("click", (e) => {
  const { target } = e;
  if (target.id != "") {
    localStorage.setItem("numPage", target.id);
    localStorage.setItem("deleteItem",target.id)
    window.location.replace("pages/pageProduct.html");
  }
});