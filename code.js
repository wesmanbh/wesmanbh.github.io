let totalCO2 = parseFloat(localStorage.getItem('totalCO2')) || 0;
let xp = parseInt(localStorage.getItem('xp')) || 0;

const taskData = {
  bike: { co2: 2, xp: 20 },
  carpool: { co2: 1.5, xp: 15 },
  bus: { co2: 1.2, xp: 12 },
  shower: { co2: 0.5, xp: 8 },
  lights: { co2: 0.3, xp: 5 },
  reusable: { co2: 0.8, xp: 10 },
  plantTree: { co2: 10, xp: 50 },
  eatGreen: { co2: 1.5, xp: 25 },
};

const quotes = [
  "Every action counts, no matter how small.",
  "You're doing great—keep going!",
  "Be the change you wish to see in the world.",
  "Less CO₂, more XP, better planet.",
  "Small steps make a big difference.",
  "Sustainability is a journey, not a destination.",
  "You’re helping create a greener future.",
];

function logTask(taskName) {
  if (!taskData[taskName]) return;

  totalCO2 += taskData[taskName].co2;
  xp += taskData[taskName].xp;

  localStorage.setItem('totalCO2', totalCO2);
  localStorage.setItem('xp', xp);

  updateDisplay();
  showMotivationalQuote();
  animateXP();
}

function updateDisplay() {
  document.getElementById("co2Display").textContent = totalCO2.toFixed(1);
  document.getElementById("xpDisplay").textContent = xp;
  document.getElementById("xpProgress").style.width = `${Math.min(xp / 100, 100)}%`;
}

function showMotivationalQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}

function animateXP() {
  document.getElementById("xpProgress").style.transition = "width 0.5s ease-in-out";
}
