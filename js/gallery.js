const images = [
  "./assets/images/highlights/H1.JPG",
  "./assets/images/highlights/H2.JPG",
  "./assets/images/highlights/H3.JPG"
];

let currentIndex = 0;
let intervalId = null;

function showImage(index) {
  const img = document.getElementById("gallery-image");
  if (img) {
    img.src = images[index];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Auto-slide every 5 seconds
function startAutoSlide() {
  intervalId = setInterval(nextImage, 5000);
}

// Optional: Stop auto-slide when hovering
function stopAutoSlide() {
  clearInterval(intervalId);
}

// Start once the page is loaded
window.onload = function () {
  showImage(currentIndex);
  startAutoSlide();

  // Optional: pause on hover
  const gallery = document.getElementById("gallery-image");
  if (gallery) {
    gallery.addEventListener("mouseenter", stopAutoSlide);
    gallery.addEventListener("mouseleave", startAutoSlide);
  }
};
