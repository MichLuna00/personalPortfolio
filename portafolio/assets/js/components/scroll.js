function initScroll() {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;
  let isHovering = false;

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      if (scrollTop > headerHeight) {
        header.classList.add("hidden");
      } else {
        header.style.transform = `translateY(-${scrollTop}px)`;
        header.style.opacity = 1 - scrollTop / headerHeight;
      }
    } else {
      // Scrolling up
      header.classList.remove("hidden");
      header.style.transform = "translateY(0)";
      header.style.opacity = 1;
    }

    lastScrollTop = scrollTop;
  });

  document.addEventListener("mousemove", function (e) {
    if (e.clientY < 50) {
      isHovering = true;
      header.classList.remove("hidden");
      header.style.transform = "translateY(0)";
      header.style.opacity = 1;
    } else {
      isHovering = false;
      if (window.scrollY || document.documentElement.scrollTop > headerHeight) {
        header.classList.add("hidden");
      }
    }
  });

  document.addEventListener("scroll", function () {
    if (!isHovering && (window.scrollY || document.documentElement.scrollTop > headerHeight)) {
      header.classList.add("hidden");
    }
  });
}

export default initScroll;
