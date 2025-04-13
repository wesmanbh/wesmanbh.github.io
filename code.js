let totalCO2Saved = 0;
let totalXP = 0;
let currentLevel = 1;
let xpToNextLevel = 100;

const co2Display = document.getElementById('co2Display');
const xpDisplay = document.getElementById('xpDisplay');
const levelDisplay = document.getElementById('levelDisplay');
const xpToNextLevelDisplay = document.getElementById('xpToNextLevel');
const xpProgress = document.getElementById('xpProgress');
const quoteDisplay = document.getElementById('quote');

function logTask(task) {
  let co2Saved = 0;
  let xpEarned = 0;

  // CO₂ savings and XP for each task
  const taskData = {
    bike: { co2: 2, xp: 10 },
    carpool: { co2: 3, xp: 15 },
    bus: { co2: 5, xp: 20 },
    walk: { co2: 1.2, xp: 5 },
    electricCar: { co2: 4, xp: 20 },
    rideShare: { co2: 3.5, xp: 18 },
    car: { co2: 4.5, xp: 22 },
    motorcycle: { co2: 3.2, xp: 16 },
    train: { co2: 4.8, xp: 24 },
    telecommute: { co2: 7, xp: 35 },
    bikeShare: { co2: 1.8, xp: 9 },
    vanpool: { co2: 5.5, xp: 25 },
    shower: { co2: 0.5, xp: 5 },
    lights: { co2: 0.3, xp: 3 },
    reusable: { co2: 1.5, xp: 8 },
    unplug: { co2: 0.4, xp: 4 },
    washingMachine: { co2: 0.7, xp: 6 },
    dryClothes: { co2: 0.2, xp: 2 },
    ac: { co2: 1, xp: 5 },
    solarPanels: { co2: 12, xp: 40 },
    insulate: { co2: 3, xp: 15 },
    efficientFridge: { co2: 2.5, xp: 12 },
    bikeCommute: { co2: 3, xp: 14 },
    waterSaving: { co2: 1, xp: 6 },
    plantTree: { co2: 21, xp: 50 },
    eatGreen: { co2: 6, xp: 30 },
    compost: { co2: 2, xp: 12 },
    recycle: { co2: 1, xp: 5 },
    buyLocal: { co2: 0.8, xp: 7 },
    reduceWaste: { co2: 3, xp: 15 },
    ecoShopping: { co2: 1.5, xp: 10 },
    supportEcoBusiness: { co2: 2, xp: 12 },
    greenEnergy: { co2: 15, xp: 40 },
    plantGarden: { co2: 5, xp: 20 },
    waterConservation: { co2: 2, xp: 10 },
    buyElectric: { co2: 3, xp: 18 },
  };

  co2Saved = taskData[task].co2;
  xpEarned = taskData[task].xp;


  totalCO2Saved += co2Saved;
  totalXP += xpEarned;

  // Level up system
  if (totalXP >= xpToNextLevel) {
    currentLevel++;
    totalXP -= xpToNextLevel;
    xpToNextLevel = Math.floor(xpToNextLevel * 1.5); // increase XP to next level by 50%
    updateLevelUpMessage();
  }

  updateStats();
  updateProgressBar();
}

function updateStats() {
  co2Display.innerText = totalCO2Saved;
  xpDisplay.innerText = totalXP;
  levelDisplay.innerText = currentLevel;
  xpToNextLevelDisplay.innerText = xpToNextLevel;
  
  const treesSaved = Math.floor(totalCO2Saved / 25);
  document.getElementById('treesSavedDisplay').innerText = `You have saved ${treesSaved} trees!🌲`;
}

function updateProgressBar() {
  const xpPercentage = (totalXP / xpToNextLevel) * 100;
  xpProgress.style.width = `${xpPercentage}%`;
}

function updateLevelUpMessage() {
  quoteDisplay.innerText = `Level ${currentLevel} Unlocked! Keep it up! 🎉`;
  setTimeout(() => {
    quoteDisplay.innerText = "Keep up the great work!";
  }, 3000);
}

document.getElementById("journalButton").addEventListener("click", function() {
  document.getElementById("journalModal").style.display = "block";
});

function closeJournal() {
  document.getElementById("journalModal").style.display = "none";
}

function saveJournal() {
  const entry = document.getElementById("journalEntry").value;
  const journalLog = document.getElementById("journalLog");

  if (entry) {
    const newEntry = document.createElement("div");
    newEntry.classList.add("journal-entry");
    newEntry.textContent = entry;

    journalLog.appendChild(newEntry);
    document.getElementById("journalEntry").value = ""; // Clear textarea after saving
  }
}

// Toggle "About Me" content visibility
function toggleAbout() {
  const aboutContent = document.getElementById("aboutContent");
  if (aboutContent.style.display === "block") {
    aboutContent.style.display = "none";
  } else {
    aboutContent.style.display = "block";
  }
}
// JavaScript for triggering level-up animation
function triggerLevelUp() {
  const levelUpPopup = document.getElementById('level-up-popup');
  const xpBar = document.getElementById('xpProgress');

  let currentXP = parseFloat(xpBar.style.width); 
  let newXP = currentXP + 10;  
  
  if (newXP >= 100) {
    newXP = 100; 
    levelUpPopup.style.opacity = '1';  
  }
  
  xpBar.style.width = newXP + '%';

  levelUpPopup.classList.add('level-up');
  
  setTimeout(() => {
    levelUpPopup.classList.remove('level-up');
    levelUpPopup.style.opacity = '0'; 
  }, 1500); 
}

document.getElementById('some-button').addEventListener('click', triggerLevelUp);


window.onclick = function(event) {
  const modal = document.getElementById("journalModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};