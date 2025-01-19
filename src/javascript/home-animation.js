// HIDDEN MENU ANIMATION
let menu = document.getElementById("hidden-menu");
let menu_icon = document.getElementById("menu-icon");
let exit = document.getElementById("exit");

// For opening the menu bar
menu_icon.addEventListener("click", () => {
  menu.style.display = "block"; // Show the menu
  animateMenu(30 , 0); // Trigger the animation when the menu is opened
});

// For closing the menu bar
exit.addEventListener("click", () => {
  // animateMenu( 0 , 130);
  menu.style.display = "none"; // Hide the menu
 
});

// Menu-bar animation function
function animateMenu(val1 , val2) {

  let value1 = `translateX(${val1}%)`; //setting values for transformation
  let value2 = `translateX(${val2}%)`;
  menu.animate(
    [
      { transform: value1 }, // Starting state
      { transform: value2 }   // Ending state
    ],
    {
      duration: 500,  // 3 seconds
      easing: "ease-out",
      fill: "forwards", // Ensures the animation stays at the final state
    }
  );
}


// TAGLINE ANIMATION
const words = [ "CREATORS 💡", "LEADERS 🏆", "CHANGEMAKERS ✨ ", "STES Robotians 🤖 "];
let index = 0;

const wordElement = document.querySelector(".TAGLINE-aqua");

function updateWord() {
if(index != words.length) //stops after words end
     {
  // Apply fade-out effect
  wordElement.classList.add("fade-out");

  setTimeout(() => {
    // Update the text after fade-out
    wordElement.innerHTML = words[index];

    // Remove fade-out and apply fade-in effect
    wordElement.classList.remove("fade-out");
    wordElement.classList.add("fade-in");

    // Remove fade-in after animation completes to reset for the next cycle
    setTimeout(() => {
      wordElement.classList.remove("fade-in");
    }, 500); // Match the CSS transition duration (0.5s)

    // Move to the next word 
   index = index + 1 ;
  }, 500); // Match the CSS transition duration (0.5s)
} 
}
// Start the animation loop
setInterval(updateWord, 1500); // Update word every 2 seconds

// IMAGE ANMATION
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".boxes-A"); // Select all container boxes
  
  boxes.forEach((box) => {
    const image = box.querySelector("img"); // Select the image inside each box
    
    if (image) {
      box.addEventListener("mouseenter", () => {
        image.animate(
          [
            { transform: "rotate(0deg)", borderRadius: "50%" }, // Starting state
            { transform: "rotate(360deg)", borderRadius: "50%" } // Ending state
          ],
          {
            duration: 3000, // 3 seconds
            easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            fill: "forwards", // Ensures the animation stays at the final state
          }
        );
      });
    }
  });
});
