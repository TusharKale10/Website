// DROPDOWN
let drop = document.getElementById("dropdown") //selects the dropdown div
let more_btn = document.getElementById
("more-btn")  //selets the more button

let html1 = `More<img src="src/Assets/other-icons/up-arrow.png" alt="up-arrow">` //to add up arrow

let html2 = `More<img id="arrow" src="src/Assets/other-icons/down-arrow.png" alt="down-arrow">`  //to add down arrow

more_btn.addEventListener("click" , ()=>{
  if(drop.style.display == "none")
    {
    drop.style.display = "block";  //makes visible after click
    more_btn.innerHTML = html1 //change to up arrow
    }
      else
      {
        drop.style.display = "none"; //change to hidden
        more_btn.innerHTML = html2 // makes the down arrow
      }
});

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
const words = ["CREATORS 💡", "LEADERS 🏆", "CHANGEMAKERS ✨", "STES Robotians 🤖"];
let index = 0;

const wordElement = document.querySelector(".TAGLINE-aqua");

function updateWord() {
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

    // Move to the next word, looping back to the start if at the end
    index = (index + 1) % words.length;
  }, 500); // Match the CSS transition duration (0.5s)
}

// Start the animation loop
setInterval(updateWord, 1500); // Update word every 1.5 seconds

// IMAGE ANMATION
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".boxes-A"); // Select all container boxes
  
  boxes.forEach((box) => {
    const image = box.querySelector("img"); // Select the image inside each box
    
    if (image) {
      box.addEventListener("mouseenter", () => {
        image.animate(
          [
            { transform: "scale(1)", borderRadius: "50%" }, // Starting state
            { transform: "scale(1.2)", borderRadius: "50%" } // Ending state
          ],
          {
            duration: 500, // 1 seconds
            easing: "ease",
            fill: "forwards", // Ensures the animation stays at the final state
          }
        );
      });
    }
  });
});
