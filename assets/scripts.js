window.addEventListener("load", enableMobileMenu);
window.addEventListener("resize", enableMobileMenu);

function enableMobileMenu() {
  let menu = document.querySelector(".menu"),
    links = document.querySelector(".links"),
    linkItems = document.querySelectorAll(".links a"); // Seleksi semua tautan dalam menu

  if (window.innerWidth <= 1024) {
    menu.addEventListener("click", () => {
      menu.classList.toggle("opened");
      links.classList.toggle("show");
    });

    // Tambahkan event listener untuk setiap tautan
    linkItems.forEach((link) => {
      link.addEventListener("click", () => {
        if (menu.classList.contains("opened")) menu.classList.remove("opened");
        if (links.classList.contains("show")) links.classList.remove("show");
      });
    });
  } else {
    if (menu.classList.contains("opened")) menu.classList.remove("opened");
    if (links.classList.contains("show")) links.classList.remove("show");
  }
}
