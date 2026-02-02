const noWrapper = document.getElementById("noWrapper");
const card = document.querySelector(".card");
const yesBtn = document.getElementById("yes");

// move NO wrapper on hover
noWrapper.addEventListener("mouseenter", moveNo);
noWrapper.addEventListener("touchstart", moveNo); // mobile support

function moveNo() {
  const maxX = card.clientWidth - noWrapper.offsetWidth - 20;
  const maxY = card.clientHeight - noWrapper.offsetHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noWrapper.style.left = randomX + "px";
  noWrapper.style.top  = randomY + "px";
}

// YES button action
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:#f4b6c2;
      font-family:Segoe UI, Arial;
      text-align:center;
    ">
      <h1 style="font-size:36px;color:#e63946;">
        I knew it 😘💖
      </h1>
    </div>
  `;
});
