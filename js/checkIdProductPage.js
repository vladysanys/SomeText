document.querySelector(".more-box").addEventListener("click", (e) => {
  const { target } = e;
  if (target.id != "") {
    localStorage.setItem("numPage", target.id);
    window.location.replace("pageProduct.html");
  }
});