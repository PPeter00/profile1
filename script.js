


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

function textTyping(elem, speedRange) {
  
  const cursor = document.createElement("span");
  cursor.classList.add("fake-cursor");
  cursor.classList.add('blinking-cursor');
  cursor.innerHTML = "_";
  elem.appendChild(cursor);
  
  const section = document.createElement("span");  
  elem.insertBefore(section, cursor);
  
  return {
    typeText: async function typeText(text) {            
      for await (const letter of asyncGenerator(text, speedRange)) {
        section.innerHTML = section.innerHTML + letter;
      }
    }
  }
}

async function* asyncGenerator(text, speedRange) {  
  const letters = text.split("");
  while (letters.length > 0) {
    const letter = letters.shift();
    yield asyncLetter(letter, getSpeed(speedRange));
  }
}

function asyncLetter(letter, speed) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(letter);
    }, speed);
  });
}

function getSpeed(speedRange) {
  if (Array.isArray(speedRange) && speedRange.length === 2) {
    const min = speedRange[0];
    const max = speedRange[1];
    return (Math.random() * (max - min)) + min;
  }
  return 0;
}

const txt = textTyping(document.getElementById("myTextHolder"), [100, 600]);
txt.typeText("I'm a Front-End");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});



navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// container
ScrollReveal().reveal(".container__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".socials", {
  ...scrollRevealOption,
  delay: 1500,
});