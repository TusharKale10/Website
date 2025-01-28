// counting animation
const container = document.querySelector(".stat");

// Function to animate counters
function animateCounters() {
  const counters = document.querySelectorAll(".stats-number");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target"); // Convert target to a number
    const duration = 2000; // Duration of animation in milliseconds
    const startTime = performance.now(); // Animation start time

    function updateCounter(currentTime) {
      const elapsedTime = currentTime - startTime; // Time elapsed since start
      const progress = Math.min(elapsedTime / duration, 1); // Progress as a fraction (0 to 1)
      const currentValue = Math.floor(progress * target); // Calculate current value based on progress
      counter.textContent = currentValue.toLocaleString() + "+"; // Update counter text

      if (progress < 1) {
        requestAnimationFrame(updateCounter); // Continue animation
      }
    }

    requestAnimationFrame(updateCounter); // Start the animation
  });
}

// Use Intersection Observer to trigger the animation when scrolling into view
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters(); // Start animation
        observer.unobserve(container); // Stop observing once animation starts
      }
    });
  },
  { threshold: 0.9 } // Trigger when 90% of the element is visible
);

observer.observe(container);
