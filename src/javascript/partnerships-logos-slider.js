document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".logo-slider");
  const logos = document.querySelectorAll(".logo");
  const logoCount = logos.length;
  let currentIndex = 0;

  function slideLogos() {
    const logoWidth = logos[0].offsetWidth + 20; // Include the gap (20px from CSS)
    const totalWidth = logoWidth * logoCount;
    
    // Move slider by one logo width at a time
    slider.style.transform = `translateX(-${currentIndex * logoWidth}px)`;

    // Update to next logo or reset to the first
    currentIndex = (currentIndex + 1) % logoCount;
  }

  // Automatically slide every 2 seconds
  setInterval(slideLogos, 1000);

  // Adjust sliding on window resize
  window.addEventListener("resize", () => {
    slider.style.transform = `translateX(0px)`; // Reset position on resize
    currentIndex = 0; // Reset index
  });
});