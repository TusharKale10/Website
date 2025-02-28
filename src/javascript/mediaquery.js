// HOME PAGE
const mediaQuery1 = window.matchMedia('(max-width: 768px)');

const mediaQuery2 = window.matchMedia('(max-width: 1024px)');

let html = `
      <div class="about-stes">
          <img src="src/Assets/stes-logo/Stes-logo.png" alt="stes-logo">
        <p>
          STES Robotics isn't just a team, we are a movement forging a legacy where innovation meets purpose, and every robot we create tells a story of passion, teamwork, and vision for the future.
        </p>
       
      </div>
      <div id="robo-safar" class="robo-safar">
        <div class="robo-safar-img">
          <img src="src/Assets/robo-safar-logo/robo-safar-logo.png" alt="robo-safar-img">
        </div>
        <div class="join-us-btn">
          <button class="apply2" >Apply Now</button>
        </div>
        <div class="socials">
          <a href="https://www.youtube.com/channel/UCJ3my8s19_uZYK6goPZMV9A">
            <img src="src/Assets/social-icons/youtube.png" alt="youtube">
          </a>
          <a href="https://www.instagram.com/stesrobotics/">
            <img src="src/Assets/social-icons/instagram.png" alt="instagram">
          </a>
          <a href="https://in.linkedin.com/company/stesrobotics"><img src="src/Assets/social-icons/linkedin.png" alt=""></a>
        </div>
        <div  class="copyright">
          <p>&copy; 2025 STES Robotics. All Rights Reserved.</p>
        </div>
      </div>`
      

if (mediaQuery1.matches){
    document.getElementById("hidden-header").style.display = "block"
    document.getElementById("laptop-header").style.display ="none"

    document.getElementById("stes-logo").toggleAttribute("style")

    document.getElementById("footer").innerHTML =  html
}

else if (mediaQuery2.matches) {
    document.getElementById("hidden-header").style.display = "block"
    document.getElementById("laptop-header").style.display ="none"

    document.getElementById("stes-logo").toggleAttribute("style")

    document.getElementById("footer").innerHTML =  html
}

// apply button
let apply2 = document.querySelectorAll(".apply2");
apply2.forEach((Element) => {
  Element.addEventListener("click", () => {
    alert(`SORRY...!! Recruitment process is closed now !!`);
  });
});