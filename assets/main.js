document.getElementById("year").textContent = new Date().getFullYear();

// Carrossel de frases: troca sozinho a cada 7s e pausa com mouse ou foco em cima
(function () {
  var carousel = document.querySelector(".carousel");
  var quotes = carousel.querySelectorAll(".quote");
  var dots = carousel.querySelector(".quote-dots");
  var dotLabel = dots.dataset.label || "Frase";
  var auto = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var current = 0;
  var timer = null;

  quotes.forEach(function (quote, i) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", dotLabel + " " + (i + 1));
    dot.addEventListener("click", function () { show(i); });
    dots.appendChild(dot);
  });
  dots.children[0].setAttribute("aria-current", "true");

  function show(i) {
    quotes[current].classList.remove("is-active");
    dots.children[current].removeAttribute("aria-current");
    current = i;
    quotes[current].classList.add("is-active");
    dots.children[current].setAttribute("aria-current", "true");
  }

  function start() {
    if (!auto || timer) return;
    timer = setInterval(function () { show((current + 1) % quotes.length); }, 7000);
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", start);
  start();
})();

// Chuva de caracteres no fundo (desligada com prefers-reduced-motion)
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var canvas = document.getElementById("rain");
  var ctx = canvas.getContext("2d");
  var chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789{}<>/=;$".split("");
  var size = 16;
  var columns, drops;

  function resize() {
    var dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    columns = Math.ceil(window.innerWidth / size);
    drops = Array.from({ length: columns }, function () {
      return Math.random() * -window.innerHeight / size;
    });
  }

  function draw() {
    ctx.fillStyle = "rgba(5, 11, 6, 0.12)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.font = size + "px 'JetBrains Mono', monospace";

    for (var i = 0; i < columns; i++) {
      var ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = Math.random() > 0.97 ? "#6fffa0" : "#1f7a35";
      ctx.fillText(ch, i * size, drops[i] * size);
      if (drops[i] * size > window.innerHeight && Math.random() > 0.975) drops[i] = 0;
      drops[i] += 0.5;
    }
  }

  resize();
  window.addEventListener("resize", resize);

  var last = 0;
  (function loop(t) {
    if (t - last > 50) { draw(); last = t; }
    requestAnimationFrame(loop);
  })(0);
})();
