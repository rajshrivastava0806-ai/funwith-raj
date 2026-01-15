let winners = [];
let losers = [];

function checkAnswer() {
  const ans = document.getElementById("answer").value.trim();
  const result = document.getElementById("result");
  const quizSection = document.getElementById("quizSection");

  // Hide quiz after submit
  quizSection.style.display = "none";

  if (ans === "299792458") {
    result.innerHTML = "🎉 You are Winner!";
    winners.push("Contestant " + (winners.length + 1));
  } else {
    result.innerHTML = "😅 Better Luck Next Time!";
    losers.push("Contestant " + (losers.length + 1));
  }

  updateLists();
  triggerStars();
}

function updateLists() {
  const winnerList = document.getElementById("winnerList");
  const loserList = document.getElementById("loserList");

  winnerList.innerHTML = "<li>Jo jita hai</li>";
  loserList.innerHTML = "<li>Jo haar gaya hai</li>";

  winners.slice(0,5).forEach(w => {
    const li = document.createElement("li");
    li.textContent = w;
    winnerList.appendChild(li);
  });

  losers.slice(0,5).forEach(l => {
    const li = document.createElement("li");
    li.textContent = l;
    loserList.appendChild(li);
  });
}

// Star animation
function triggerStars() {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      speed: Math.random() * 3 + 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
}
