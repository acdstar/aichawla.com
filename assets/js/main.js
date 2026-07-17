(function () {
  var header = document.getElementById("site-header");
  var openBtn = document.getElementById("menu-open");
  var closeBtn = document.getElementById("menu-close");
  var overlay = document.getElementById("nav-overlay");

  function openNav() {
    overlay.classList.add("is-open");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeNav() {
    overlay.classList.remove("is-open");
    openBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    openBtn.focus();
  }

  if (openBtn && overlay) {
    openBtn.addEventListener("click", openNav);
    closeBtn.addEventListener("click", closeNav);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) closeNav();
    });
  }

  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("is-solid", window.scrollY > 40);
    }, { passive: true });
  }
})();
