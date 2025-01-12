// counting animation
let container = document.querySelector(".stat-item")
container.addEventListener("mouseenter", () => {
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
  });
  