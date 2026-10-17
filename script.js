const envelopeButton = document.getElementById("envelopeButton");
const letterCard = document.getElementById("letterCard");
const envelopeHint = document.getElementById("envelopeHint");

envelopeButton.addEventListener("click", () => {
  const isOpen = envelopeButton.classList.toggle("open");
  envelopeButton.setAttribute("aria-expanded", String(isOpen));
  envelopeButton.setAttribute("aria-label", isOpen ? "Close your birthday letter" : "Open your birthday letter");
  letterCard.hidden = !isOpen;
  envelopeHint.textContent = isOpen ? "Your little love letter is open ♡" : "Tap the envelope to open your letter";

  if (isOpen) {
    window.setTimeout(() => {
      letterCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 180);
  }
});


const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const musicLabel = document.getElementById("musicLabel");

musicToggle.addEventListener("click", () => {
  const spotifySongUrl = "https://open.spotify.com/embed/track/1XjHRolIXL2M1EEOUsGGR4?utm_source=generator&si=afe50fe2c18d4008";

  window.open(spotifySongUrl, "_blank", "noopener,noreferrer");
});


// Birthday cake: blow out and relight the candles.
const wishButton = document.getElementById("wishButton");
const cakeStage = document.querySelector(".cake-stage");

const flames = document.getElementById("flames");

flames.innerHTML = Array.from({ length: 22 }, () =>
  '<span class="candle"><i class="flame"></i><i class="wick"></i></span>'
).join("");

const wishMessage = document.getElementById("wishMessage");
let candlesBlownOut = false;

wishButton.addEventListener("click", () => {
  candlesBlownOut = !candlesBlownOut;
  cakeStage.classList.toggle("blown-out", candlesBlownOut);

  if (candlesBlownOut) {
    wishButton.textContent = "Light the candles again ♡";
    wishMessage.textContent = "Wish made! May this year bring you so much love and happiness, Adreign. 💗";
    makeFloatingHearts();
  } else {
    wishButton.textContent = "Blow out the candles ✨";
    wishMessage.textContent = "Make a wish, Adreign. You deserve every beautiful thing. ♡";
  }
});

function makeFloatingHearts() {
  const symbols = ["♡", "♥", "✧", "✿"];
  for (let i = 0; i < 14; i++) {
    const heart = document.createElement("span");
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.setAttribute("aria-hidden", "true");
    heart.style.position = "fixed";
    heart.style.left = `${10 + Math.random() * 80}%`;
    heart.style.bottom = "12%";
    heart.style.zIndex = "20";
    heart.style.pointerEvents = "none";
    heart.style.color = ["#e994b7", "#d96f9c", "#f2b5cd"][i % 3];
    heart.style.fontSize = `${16 + Math.random() * 18}px`;
    heart.style.transition = "transform 2.2s ease-out, opacity 2.2s ease-out";
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-${160 + Math.random() * 280}px) rotate(${Math.random() * 90 - 45}deg)`;
      heart.style.opacity = "0";
    });
    window.setTimeout(() => heart.remove(), 2400);
  }
}
