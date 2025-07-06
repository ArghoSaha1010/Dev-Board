const allCardBtn = document.querySelectorAll(".allcardbtn");
const taskCountArea = document.getElementById("taskCountArea");
const activityContainer = document.querySelector(".activity-container");
const clearHistoryBtn = document.querySelector(".clear-history-btn");
const pointsArea = document.getElementById("pointsarea");

let btncount = allCardBtn.length;
let count = 0;
taskCountArea.innerText = "0" + btncount;
pointsArea.innerText = 23;

allCardBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    if (!btn.hasAttribute("disabled")) {
      const parentCard = btn.closest(".main-card");
      const title = parentCard.querySelector(".task-title").innerText;

      // Alert
      alert("Congratulations! You have completed the task of " + title);

      // Disable button
      btn.setAttribute("disabled", "disabled");

      // Update counts
      btncount--;
      count++;

      taskCountArea.innerText = "0" + btncount;

      const pointsResult = 23 + count;
      pointsArea.innerText = pointsResult;

      if (count === 6) {
        alert("Congratulations! You have finished the course!");
      }

      // Current time formatting
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      const timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;

      // Create new message div
      const newMsg = document.createElement("div");
      newMsg.className = "bg-[#F4F7FF] p-3 rounded-lg shadow-sm";
      newMsg.innerHTML = `You have completed the task <b>${title}</b> at <span class="text-gray-500">${timeStr}</span>`;

      // Append message
      activityContainer.appendChild(newMsg);
    }
  });
});

// Clear history button functionality
clearHistoryBtn.addEventListener("click", () => {
  activityContainer.innerHTML = "";

  const placeholder = document.createElement("div");
  placeholder.style.height = "40px"; 
  activityContainer.appendChild(placeholder);
});
