const s = document.querySelector('.s');
const totals = document.querySelectorAll('.').length;
const faqItems = document.querySelectorAll(".faq-question");
let index = 0;
const interval = 5000; // 5 seconds per 
faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      const arrow = item.querySelector(".arrow");

      // Toggle active class for the current question
      item.classList.toggle("active");
      answer.classList.toggle("visible");
    });
  });

function slides() {
  index = (index + 1) % totals; // Loop back to the first 
  s.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slides, interval);


