let wrapper;

window.addEventListener("DOMContentLoaded", () => {
  wrapper = document.querySelector('#wrapper');

  // Scroll to page 3 on load
  setTimeout(() => {
    wrapper.scrollTo({ left: window.innerWidth * 2, behavior: "smooth" });
  }, 100);

  // Enable horizontal scroll with mouse wheel
  wrapper.addEventListener("wheel", function (e) {
    if (e.deltaY !== 0) {
      e.preventDefault(); // stop vertical scroll
      wrapper.scrollBy({ left: e.deltaY, behavior: "smooth" });
    }
  });
});

// Next and previous buttons
function scrollLeft() {
  if (!wrapper) return;
  const newPos = wrapper.scrollLeft - window.innerWidth;
  wrapper.scrollTo({ left: newPos, behavior: "smooth" });
}

function scrollRight() {
  if (!wrapper) return;
  const newPos = wrapper.scrollLeft + window.innerWidth;
  wrapper.scrollTo({ left: newPos, behavior: "smooth" });
}

function goBack() {
  window.location.href = "main.html";
}
