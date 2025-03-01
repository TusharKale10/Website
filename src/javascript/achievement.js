// Get DOM elements
const moreBtn = document.getElementById("more-btn");
const arrow = document.getElementById("arrow");
const dropdown = document.getElementById("dropdown");
const menuIcon = document.getElementById("menu-icon");
const exitBtn = document.getElementById("exit");
const hiddenMenu = document.getElementById("hidden-menu");

// Ensure overlay exists once
let overlay = document.querySelector(".overlay");
if (!overlay) {
  overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
}

// Toggle dropdown menu
function toggleDropdown(event) {
  event.stopPropagation(); // Prevent event bubbling
  dropdown.classList.toggle("active");
  arrow.classList.toggle("arrow-rotate");
}

// Close dropdown when clicking outside
function closeDropdownOnClickOutside(event) {
  if (!moreBtn.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
    arrow.classList.remove("arrow-rotate");
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  const isActive = hiddenMenu.classList.contains("active");
  hiddenMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = isActive ? "auto" : "hidden"; // Prevent scrolling when open
}

// Event listeners
if (moreBtn) {
  moreBtn.addEventListener("click", toggleDropdown);
}

document.addEventListener("click", closeDropdownOnClickOutside);
document.addEventListener("touchstart", closeDropdownOnClickOutside); // Support for mobile

if (menuIcon) {
  menuIcon.addEventListener("click", toggleMobileMenu);
}

if (exitBtn) {
  exitBtn.addEventListener("click", toggleMobileMenu);
}

overlay.addEventListener("click", toggleMobileMenu);

// Close dropdown on window resize (for responsive design)
window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    dropdown.classList.remove("active");
    arrow.classList.remove("arrow-rotate");
  }
});

// Ensure dropdown is hidden properly on resize
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

// Mobile Menu Handling for Phones
document.addEventListener("DOMContentLoaded", function () {
  if (menuIcon) {
    menuIcon.addEventListener("click", () => {
      hiddenMenu.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (exitBtn) {
    exitBtn.addEventListener("click", () => {
      hiddenMenu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  overlay.addEventListener("click", () => {
    hiddenMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  document.addEventListener("click", function (event) {
    if (!moreBtn.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
      arrow.classList.remove("arrow-rotate");
    }
  });

  // Prevent menu flickering on fast clicks
  let isMenuOpen = false;
  menuIcon.addEventListener("click", () => {
    if (!isMenuOpen) {
      isMenuOpen = true;
      setTimeout(() => (isMenuOpen = false), 500); // Prevent multiple clicks in 500ms
    }
  });
});
