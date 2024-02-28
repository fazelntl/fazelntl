// Player 1
const pl1 = document.querySelector(".pl1");
const scorep1 = document.querySelector(".scorep1");
const curscrp1 = document.querySelector(".curscrp1");

// Player 2
const pl2 = document.querySelector(".pl2");
const scorep2 = document.querySelector(".scorep2");
const curscrp2 = document.querySelector(".curscrp2");

// Global variables
let curscore1 = 0;
let curscore2 = 0;
let actplayer = 1; // Start with player 1
let scp1 = 0;
let scp2 = 0;
let rollsCount = 0; // Track number of rolls

// Buttons
const ngm = document.querySelector(".NGM");
const rld = document.querySelector(".RLD");
const dice = document.querySelector(".dice");

// Function to roll dice for player 1
const dicerfun1 = function () {
  const dicer1 = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${dicer1}.png`;
  dice.classList.remove("hidden");
  curscore1 += dicer1;
  curscrp1.textContent = curscore1;
  scorep1.textContent = curscore1;
  rollsCount++;
  if (rollsCount === 20 || dicer1 !== 6) {
    actplayer = 2; // Switch to player 2
    if (rollsCount === 20) {
      rld.disabled = true; // Disable roll button after 20 rolls
    }
  }
};

// Function to roll dice for player 2
const dicerfun2 = function () {
  const dicer2 = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${dicer2}.png`;
  dice.classList.remove("hidden");
  curscore2 += dicer2;
  curscrp2.textContent = curscore2;
  scorep2.textContent = curscore2;
  rollsCount++;
  if (rollsCount === 20 || dicer2 !== 6) {
    actplayer = 1; // Switch to player 1
    if (rollsCount === 20) {
      rld.disabled = true; // Disable roll button after 20 rolls
    }
  }
};

// Event listener for roll button
rld.addEventListener("click", function () {
  if (actplayer === 1) {
    dicerfun1();
  } else if (actplayer === 2) {
    dicerfun2();
  }
});

// Event listener for new game button
ngm.addEventListener("click", function () {
  location.reload();
});
