function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToSection(id) {
  var targetSection = document.getElementById(id);
  var targetPosition = targetSection.offsetTop - 120;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

