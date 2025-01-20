 document.addEventListener("DOMContentLoaded", () => {
      const slider = document.querySelector(".logo-slider");
      const logos = document.querySelectorAll(".logo");
      const logosPerSlide = 4; // Number of logos per slide
      const logoWidth = 25; // Each logo is 25% of the container width
      let currentSlide = 0;

      function slideLogos() {
        const totalSlides = Math.ceil(logos.length / logosPerSlide); // Calculate total slides
        const offset = currentSlide * 100; // Calculate offset percentage
        slider.style.transform = `translateX(-${offset}%)`;

        // Update to next slide or reset to the first slide
        currentSlide = (currentSlide + 1) % totalSlides;
      }

      // Automatically slide every 3 seconds
      setInterval(slideLogos, 3000);
    });