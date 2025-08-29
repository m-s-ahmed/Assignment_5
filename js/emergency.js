const heartText = document.getElementById("heart-text");
const coinText = document.getElementById("coin-text");
const historyContainer = document.getElementById("call-history");

// heart icon functionalities
const heartIcons = document.getElementsByClassName("heart-icon");
console.log(heartIcons);

for (const heart of heartIcons) {
  heart.addEventListener("click", function (e) {
    e.preventDefault();
    heartText.innerText = parseInt(heartText.innerText) + 1;
  });
}

// call button functionalities

const allCall = document.querySelectorAll(".allcall");
console.log(allCall);

allCall.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const serviceName = btn.dataset.name;
    const serviceNumber = btn.dataset.number;

    const coinTextValue = parseInt(coinText.innerText);

    if (coinTextValue < 20) {
      alert("Insufficient Coins to make a call.");
      return;
    }

    const reduceCoin = coinTextValue - 20;
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    coinText.innerText = reduceCoin;

    const time = new Date().toLocaleDateString();
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center p-2  bg-gray-100  text-sm";
    historyItem.innerHTML = `
    <div>
    <p class="font-semibold">${serviceName}</p>
    <p class="text-gray-500">${serviceNumber}</p>
    </div>

    <span class="text-xs text-gray-500">${time}</span>
    `;

    historyContainer.prepend(historyItem);
  });

  // Clear button functionalities
  const clearBtn = document.getElementById("clear-history");
  clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
  });
});
