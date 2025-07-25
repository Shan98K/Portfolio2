const celestial = document.querySelector('.celestial');

// Start with sun
celestial.classList.add('sun');

// Function to toggle sun and moon
function toggleCelestial() {
  if (celestial.classList.contains('sun')) {
    celestial.classList.remove('sun');
    celestial.classList.add('moon');
  } else {
    celestial.classList.remove('moon');
    celestial.classList.add('sun');
  }
}

// Toggle every full orbit cycle (matches your orbit animation duration)
setInterval(toggleCelestial, 12000); // 10 seconds
