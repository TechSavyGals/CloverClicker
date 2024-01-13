let counter = 0;
let clickValue = 1; // Initial click value
let clickRate = 0; // Initial click rate (clicks per second)
let clickCountLastSecond = 0;
let totalClicks = 0;

document.getElementById("button").onclick = () => {
  counter = counter + clickValue;
  document.getElementById("score").innerText = counter;
  totalClicks++;
};

function buyUpgrade(upgradeId) {
  switch (upgradeId) {
    case 1:
      if (counter >= 10) { // Cost of Upgrade 1
        counter -= 10;
        clickValue *= 2; // Double the click value
        document.getElementById("score").innerText = counter;
      }
      break;
    case 2:
      if (counter >= 30) { // Cost of Upgrade 3
        counter -= 30;
        activateClickRateUpgrade();
        document.getElementById("score").innerText = counter;
      }
      break;
    // Add more upgrades as needed
  }
}

function activateClickRateUpgrade() {
  if (clickRate === 0) {
    clickRate = 0.5; // Initial click rate (click every 2 seconds)
    setInterval(() => {
      counter += clickRate;
      document.getElementById("score").innerText = counter;
      clickCountLastSecond = 0; // Reset click count every second
    }, 2000); // Click every 2 seconds
  }
}

setInterval(() => {
  const averageSpeed = totalClicks / 2; // Calculate average clicks per second
  document.getElementById("average-speed").innerText = `Average Speed: ${averageSpeed} clicks per second`;
  totalClicks = 0; // Reset total clicks every second
}, 1000); // Update every second
