// Player 1
const pl1 = document.querySelector(".pl1");
const scorep1 = document.querySelector(".scorep1");
const pa = document.querySelector(".pa");
const mspa = document.querySelector(".mspa");

// Player 2
const pl2 = document.querySelector(".pl2");
const scorep2 = document.querySelector(".scorep2");
const pb = document.querySelector(".pb");
const mspb = document.querySelector(".mspb");

// Global variables
const diceinfo = document.querySelector(".diceinfo");
const rmdic = document.querySelector(".rmdic");
let actplayer = 1; // Start with player 1
let scp1 = 0;
let scp2 = 0;
let rollsCount = 2; // Track number of rolls
diceinfo.textContent = rollsCount;

// Buttons
const ngm = document.querySelector(".ngm");
const rlda = document.querySelector(".rlda");
const rldb = document.querySelector(".rldb");
const dice = document.querySelector(".dice");

// default configuration for the first player
pa.classList.add("bg-gray-900", "border-2", "border-gray-300");

// the winner function
const winner = function () {
  console.log("winner called ");
  dice.classList.add("hidden");
  rlda.classList.add("hidden");
  rldb.classList.add("hidden");
  rmdic.classList.add("hidden");
  diceinfo.classList.add("hidden");
  let scrp1 = scorep1.textContent;
  let scrp2 = scorep2.textContent;
  rlda.disabled = true; // Disable roll button after 20 rolls
  rldb.disabled = true; // Disable roll button after 20 rolls
  if (scrp1 > scrp2) {
    document.querySelector(".pa").style.backgroundColor = "green";
    mspa.classList.remove("hidden");
    document.querySelector(".pb").style.backgroundColor = "red";
    mspb.textContent = "Loser 😆";
    mspb.classList.remove("hidden");
  } else if (scrp1 < scrp2) {
    document.querySelector(".pb").style.backgroundColor = "green";
    mspb.classList.remove("hidden");
    document.querySelector(".pa").style.backgroundColor = "red";
    mspa.textContent = "Loser 😆";
    mspa.classList.remove("hidden");
  }
};

// Function to roll dice for player 1
const dicerfun1 = function () {
  const dicer1 = Math.trunc(Math.random() * 6) + 1;
  if (rollsCount === 0 && dicer1 !== 6) {
    winner();
  } else if (actplayer == 1 && dicer1 !== 6) {
    rollsCount--;
    pa.classList.remove("bg-gray-900", "border-2", "border-gray-300");
    pb.classList.add("bg-gray-900", "border-2", "border-gray-300");
    actplayer == 2; // Switch to player 2
  } else console.log("case 6 in the  running in the fun 1 ");

  dice.src = `dice-${dicer1}.png`;
  dice.classList.remove("hidden");
  scp1 += dicer1;
  scorep1.textContent = scp1;
  diceinfo.textContent = rollsCount;
};

// Function to roll dice for player 2

const dicerfun2 = function () {
  const dicer2 = Math.trunc(Math.random() * 6) + 1;
  if (rollsCount === 0 && dicer2 !== 6) {
    winner();
  } else if (actplayer == 2 && dicer2 !== 6) {
    rollsCount--;
    pb.classList.remove("bg-gray-900", "border-2", "border-gray-300");
    pa.classList.add("bg-gray-900", "border-2", "border-gray-300");
    actplayer == 1; // Switch to player 2
  } else console.log("case 6 in the  running in the fun 2 ");
  dice.src = `dice-${dicer2}.png`;
  dice.classList.remove("hidden");
  scp2 += dicer2;
  scorep2.textContent = scp2;
  diceinfo.textContent = rollsCount;
};

// Event listener for roll button
rlda.addEventListener("click", function () {
  if (actplayer === 1) {
    if (actplayer === 2) {
      rlda.classList.add("hidden");
      rldb.classList.remove("hidden");
    }
    rldb.classList.add("hidden");
    dicerfun1();
  }
});

rldb.addEventListener("click", function () {
  if (actplayer === 2) {
    if (actplayer === 1) {
      rldb.classList.add("hidden");
      rlda.classList.remove("hidden");
    }
    rlda.classList.add("hidden");
    dicerfun2();
  }
});

let keypad = document.addEventListener("keydown", function (e) {
  // console.log(e);
  if (e.key === "r") {
    location.reload();
  } else if (actplayer === 1) {
    if (e.key === "ArrowLeft") {
      if (rollsCount >= 0) {
        dicerfun1();
      } else if (rollsCount === 0) {
        console.log("rolls get 0 and e prevent in the act 1");
        e.preventDefault;
      }
    }
  } else if (actplayer === 2) {
    if (e.key === "ArrowRight") {
      if (rollsCount >= 0) {
        dicerfun2();
      } else if (rollsCount === 0) {
        console.log("rolls get 0 and e prevent in the act 2");
        e.preventDefault;
      }
    }
  }
});

// Event listener for new game button
ngm.addEventListener("click", function () {
  location.reload();
});
