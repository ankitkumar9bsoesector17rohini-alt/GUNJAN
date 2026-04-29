const correctPassword = "maharani"; // change this

function checkPassword() {
  let input = document.getElementById("passwordInput").value;

  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("chatScreen").style.display = "block";
  } else {
    alert("Wrong password 😝");
  }
}

function startMain() {
  document.getElementById("chatScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  
  startTyping();
  document.getElementById("music").play();
  startSlideshow();
}

// typing
const text = "I didn’t know what gift to give you... so I made this ❤️";
let i = 0;

function startTyping() {
  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

// slideshow
let slideIndex = 0;

function startSlideshow() {
  let slides = document.getElementsByClassName("slide");

  setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 2) % slides.length;
    slides[slideIndex].classList.add("active");
  }, 2000);
}

// final message
function showFinal() {
  document.getElementById("finalMessage").style.display = "block";
}