// Start Pixi and put its canvas on the page
const app = new PIXI.Application();
await app.init({ resizeTo: window, background: "#080612" });
document.body.appendChild(app.canvas);

const dots = new PIXI.Graphics();
app.stage.addChild(dots);

// marks where the mouse were last
const mouse = { x: 0, y: 0 };
window.addEventListener("pointermove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// playful colorfull dots that grows with the mouse
app.ticker.add(() => {
  dots.clear();
  for (let x = 0; x < app.screen.width; x += 30) {
    for (let y = 0; y < app.screen.height; y += 30) {
      const distance = Math.hypot(x - mouse.x, y - mouse.y);
      dots.circle(x, y, Math.max(1, 8 - distance / 30));
    }
  }
  // colors that match pur project
  dots.fill("#ff00cc");
dots.stroke({ color: "#00ffff", width: 1 });
});
