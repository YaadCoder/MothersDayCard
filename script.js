const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupButton = document.getElementById("popup-button");
const poemContainer = document.getElementById("poem-container");

const poemLines = [
  "You are more than just a mother,",
  "You are the heartbeat of this home.",
  "The whisper behind every smile,",
  "The steady hand that holds it all.",
  "",
  "I see the strength in your quiet moments,",
  "The grace in your tired eyes,",
  "You never boast, but you move mountains—",
  "With love, with patience, with fire.",
  "",
  "You are a wife, a friend, a G, a mother,",
  "A superwoman in your own right.",
  "Not just holding the family together,",
  "But lifting it higher every night.",
  "",
  "Our children are better because of you,",
  "I am better because of you.",
  "This family breathes through your love,",
  "And none of us would ever trade you.",
  "",
  "So today, I say thank you—",
  "From the bottom of my soul.",
  "Not because I think you’re the best mother,",
  "But because I know you are.",
  "",
  "We love you…",
];

const finalMessages = [
  "From Your Husband – Marvin",
  "To the Wife and Best mother this family could ask for",
  "I owe you a gift, don’t worry it will be worth the wait and worth your while",
  "Bye, I love you 💚"
];

let stage = 0;

popupButton.addEventListener("click", handlePopupStep);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && popup.style.display !== "none") {
    handlePopupStep();
  }
});

function handlePopupStep() {
  if (stage === 0) {
    popup.style.display = "none";
    displayPoem();
  } else if (stage <= finalMessages.length) {
    popupText.innerText = finalMessages[stage - 1];
    popup.style.display = "flex";
    stage++;
  } else {
    popup.style.display = "none";
  }
}

function displayPoem() {
  poemContainer.innerHTML = "";
  poemLines.forEach((line, index) => {
    const p = document.createElement("p");
    p.textContent = line;
    p.style.animationDelay = `${index * 0.5}s`;
    setTimeout(() => {
      poemContainer.appendChild(p);
      p.style.animation = "fadeIn 1.5s forwards";
    }, index * 1800);
  });

  setTimeout(() => {
    popupText.innerText = "Press enter to continue...";
    popupButton.innerText = "Enter";
    popup.style.display = "flex";
    stage = 1;
  }, poemLines.length * 1800 + 2000);
}
