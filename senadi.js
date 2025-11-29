// Init AOS Animation
AOS.init({ duration: 800, once: true, offset: 100 });

// Navbar Scroll Logic
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const navLogoText = document.getElementById("navLogoText");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("nav-transparent");
    navbar.classList.add("nav-scrolled");
    navLinks.forEach((link) => {
      link.classList.remove("text-gray-300");
      link.classList.add("text-slate-700");
    });
    navLogoText.classList.remove("text-white");
    navLogoText.classList.add("text-senadiBlue");
  } else {
    navbar.classList.add("nav-transparent");
    navbar.classList.remove("nav-scrolled");
    navLinks.forEach((link) => {
      link.classList.add("text-gray-300");
      link.classList.remove("text-slate-700");
    });
    navLogoText.classList.add("text-white");
    navLogoText.classList.remove("text-senadiBlue");
  }
});

// Calculator Logic
function calculateCost() {
  const area = document.getElementById("areaInput").value;
  const price = document.getElementById("typeInput").value;
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");
  const btnText = document.getElementById("btnText");
  const btnLoader = document.getElementById("btnLoader");

  if (area > 0) {
    btnText.classList.add("hidden");
    btnLoader.classList.remove("hidden");
    resultBox.classList.add("hidden");
    setTimeout(() => {
      const total = area * price;
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }).format(total);
      resultText.innerText = formatted;
      resultBox.classList.remove("hidden");
      btnText.classList.remove("hidden");
      btnLoader.classList.add("hidden");
    }, 800);
  } else {
    alert("Mohon masukkan luas bangunan.");
  }
}

// Counters Animation
const counters = document.querySelectorAll(".counter");
const speed = 200;
const animateCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
};
let hasAnimated = false;
window.addEventListener("scroll", () => {
  const section = document.querySelector(".counter").closest("section");
  const sectionPos = section.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (sectionPos < screenPos && !hasAnimated) {
    animateCounters();
    hasAnimated = true;
  }
});

// Mobile Menu Toggle
function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}

// Tabs Struktur Organisasi
function switchTab(tabName) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => {
    content.classList.add("hidden");
  });
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("bg-senadiBlue", "text-white", "border-senadiBlue");
    btn.classList.add("text-gray-500", "border-gray-200");
  });
  document.getElementById("content-" + tabName).classList.remove("hidden");
  const activeBtn = document.getElementById("btn-" + tabName);
  activeBtn.classList.remove("text-gray-500", "border-gray-200");
  activeBtn.classList.add("bg-senadiBlue", "text-white", "border-senadiBlue");
}
