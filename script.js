let currentMonth = "";
let currentIndex = 0;

function openModal(month) {
    currentMonth = month;
    currentIndex = 0;

    document.getElementById("modal-title").textContent = blogImages[month].title;
    document.getElementById("modal-caption").textContent = blogImages[month].caption;
    document.getElementById("modal-img").src = blogImages[month].images[currentIndex];

    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function changeSlide(direction) {
    const images = blogImages[currentMonth].images;
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("modal-img").src = images[currentIndex];
}

let slideIndexes = Array(12).fill(0); // Store slide indexes for each month

function showSlides(n, monthIndex) {
  let slides = document.querySelectorAll(`#modal-${getMonthName(monthIndex)} .slide`);
  if (n >= slides.length) slideIndexes[monthIndex] = 0;
  if (n < 0) slideIndexes[monthIndex] = slides.length - 1;
  
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndexes[monthIndex] ? "block" : "none";
  });
}

function changeSlide(n, monthIndex) {
  slideIndexes[monthIndex] += n;
  showSlides(slideIndexes[monthIndex], monthIndex);
}

function getMonthName(index) {
  const months = [
    "january", "february", "march", "april", "may", "june",
    "july", "aug", "sept", "oct", "nov", "dec"
  ];
  return months[index];
}

// Initialize slides
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 12; i++) {
    showSlides(0, i);
  }
});
