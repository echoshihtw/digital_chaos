(() => {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const clamp = (value) => Math.min(1, Math.max(0, value));
  const readDimmer = () => {
    const stored = Number(localStorage.getItem("bg-dimmer"));
    return Number.isFinite(stored) ? clamp(stored) : 0.88;
  };
  let dimmer = readDimmer();
  let rafId = null;

  const getTheme = () =>
    document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";

  class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
      this.characters =
        "Entities should not be multiplied beyond necessity. – Occam’s Razor (Ockham: simplex ≈ verum)" +
        " | Anything that can go wrong, will go wrong. – Murphy’s Law (lex inevitabilis)" +
        " | Never attribute to malice that which is adequately explained by ignorance. – Hanlon’s Razor (humanum error)" +
        " | Eighty percent of effects come from twenty percent of causes. – Pareto Principle (80/20, causa prima)" +
        " | In any consistent system, there exist truths that cannot be proven within it. – Gödel’s Incompleteness (⊥, ∃ veritas)" +
        " | All systems tend toward disorder unless energy is applied. – Entropy (ΔS ≥ 0)" +
        " | For every action there is an equal and opposite reaction. – Newton’s Third Law (actio = reactio)" +
        " | What can be asserted without evidence can be dismissed without evidence. – Hitchens’ Razor (nulla probatio)" +
        " | The longer something has survived, the longer it is likely to survive. – Lindy Effect (tempus → veritas)" +
        " | In a hierarchy, individuals rise to their level of incompetence. – Peter Principle (limitatio humana)" +
        " | The observer affects the observed. – Quantum Observer Effect (Ψ, μέτρον)" +
        " | All is One, and separation is illusion. – Law of One (ἕν, unum)" +
        " | As above, so below; as within, so without. – Hermetic Principle (ὅπως ἄνω, οὕτως κάτω)" +
        " | The map is not the territory. – Korzybski’s Principle (symbolum ≠ res)" +
        " | Change is the only constant. – Heraclitus (πάντα ῥεῖ)" +
        " | Every cause produces an effect, every effect has a cause. – Causality (causa → effectus)" +
        " | Opposites are identical in nature but different in degree. – Law of Polarity (δύο, dualitas)" +
        " | Energy flows where attention goes. – Principle of Focus (intentio → δύναμις)" +
        " | What you seek is seeking you. – Reciprocity Principle (mutua attractio)" +
        " | The whole is greater than the sum of its parts. – Systems Theory (Σ > ∑)";
      // ("アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      this.x = x;
      this.y = y;
      this.fontSize = fontSize;
      this.text = "";
      this.canvasHeight = canvasHeight;
      this.hue = Math.floor(Math.random() * 360);
      this.charIndex = Math.floor(Math.random() * this.characters.length);
    }
    draw(context, theme, brightness) {
      this.text = this.characters.charAt(this.charIndex);
      this.charIndex = (this.charIndex + 1) % this.characters.length;
      const lightness = theme === "light" ? 28 : 45;
      const alpha = (theme === "light" ? 0.35 : 0.5) * brightness;
      context.fillStyle =
        "hsla(" + this.hue + ", 35%, " + lightness + "%, " + alpha + ")";
      // context.fillStyle = '#ff0a74';
      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize,
      );
      if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.95) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    }
  }

  class Effect {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.fontSize = 25;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.#initialize();
    }
    #initialize() {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      }
    }
  }

  const effect = new Effect(canvas.width, canvas.height);

  const clearToBackground = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = getTheme() === "light" ? "rgb(245, 245, 245)" : "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const stopAnimation = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    clearToBackground();
  };

  const startAnimation = () => {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(animate);
  };

  function animate() {
    if (dimmer <= 0) {
      stopAnimation();
      return;
    }
    const theme = getTheme();
    const trailAlpha = (theme === "light" ? 0.2 : 0.05) * dimmer;
    ctx.fillStyle =
      theme === "light"
        ? "rgba(245, 245, 245, " + trailAlpha + ")"
        : "rgba(0, 0, 0, " + trailAlpha + ")";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = effect.fontSize + 'px "Hack", monospace';
    effect.symbols.forEach((symbol) => symbol.draw(ctx, theme, dimmer));
    rafId = requestAnimationFrame(animate);
  }
  const updateDimmer = (next) => {
    dimmer = clamp(next);
    if (dimmer <= 0) {
      stopAnimation();
    } else {
      startAnimation();
    }
  };
  window.addEventListener("bg-dimmer-change", (event) => {
    updateDimmer(Number(event.detail));
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== "bg-dimmer") return;
    updateDimmer(readDimmer());
  });
  window.addEventListener("resize", clearToBackground);
  clearToBackground();
  if (dimmer > 0) startAnimation();
})();
