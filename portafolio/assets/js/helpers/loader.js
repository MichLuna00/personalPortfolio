function initLoader() {
  const loader = document.querySelector(".loader");
  const body = document.querySelector("body");

  loader.style.display = "flex";

  function hideLoader() {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      body.classList.add("loaded");
    }, 3000); 
  }

  setTimeout(hideLoader, 3000);

  window.addEventListener("load", hideLoader);
}

export default initLoader;
