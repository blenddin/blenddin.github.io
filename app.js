// mobile toggle (original logic preserved)
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) navLinks.classList.remove('active');
  });
});
