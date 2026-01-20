const facts = [
  "Cats sleep up to 16 hours a day 😴",
  "Cats can jump 6 times their height 🐾",
  "Cats recognize your voice 👂",
  "Slow blinking means a cat loves you 😽",
  "Cats love warm and cozy places ☀️",
  "Cats like to play with flexible and moveable things🥰",
  " White Cats can reduce your stress😀 "
  
];

function changeFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("catFact").innerText = facts[random];
}
