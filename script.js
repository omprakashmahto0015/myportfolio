const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // icon toggle
  if (menuBtn.innerText === "☰") {
    menuBtn.innerText = "✕";
  } else {
    menuBtn.innerText = "☰";
  }
});

// close menu when link clicked
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.innerText = "☰";
  });
});
// Typing Effect
const textArray = [
  "High-Quality",
  "Modern",
  "User-Focused",
  "Scalable"
];

let index = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  if (!typingText) return;

  if (charIndex < textArray[index].length) {
    typingText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 80);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeEffect, 400);
  }
}

typeEffect();

// Mouse Tilt Effect
const card = document.getElementById("tilt-card");

if (card) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
}
