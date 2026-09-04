/**
 * ============================================================================
 * PARA ANDREA - EXPERIENCIA INTERACTIVA
 * Configuración, Lógica de Capítulos, Botón Escurridizo y Efectos Celestiales
 * ============================================================================
 */

// ============================================================================
// CONFIGURACIÓN PERSONALIZABLE (PUEDES EDITAR ESTOS VALORES)
// ============================================================================
const PROPOSAL_CONFIG = {
  // Nombre de ella
  recipientName: "Andrea",

  // Tu número de WhatsApp para recibir su confirmación (Bolivia: +591 71168130)
  whatsappPhone: "59171168130",

  // Mensaje que se escribirá solo en su WhatsApp cuando pulse el botón
  whatsappMessage: "¡Hola mi amor! ❤️ Acabo de ver la página... y mi respuesta es ¡SÍ! 🥰 Te quiero muchísimo. Yo también quiero hacer todo contigo, cocinar, ver pelis, dormir juntos, abrazarte y besarte siempre. ¡Te amo! ✨",

  // Diálogos y preguntas divertidas que se alternan en cada intento de presionar "No"
  teaseDialogues: [
    {
      badge: "👀",
      title: "¿Segura? Piénsalo dos veces...",
      desc: "Mira que esta oferta es de edición limitada y expira hoy 😂",
      noText: "¿En serio? 🤨",
      yesHint: "¡Aquí sí! 💖"
    },
    {
      badge: "🍕",
      title: "¿Y si te prometo consentirte siempre?",
      desc: "Comida rica, tus postres favoritos y escucharte siempre ❤️",
      noText: "¡Casi me das! 😜",
      yesHint: "¡La mejor opción! ✨"
    },
    {
      badge: "🏃💨",
      title: "¡Oye! ¡Ese botón no se deja atrapar!",
      desc: "Tiene patitas y no quiere que le des al No 😂",
      noText: "¡Por acá! ⚡",
      yesHint: "¡Te prometo risas! 🌹"
    },
    {
      badge: "🌌",
      title: "¿Vas a llevarle la contraria al destino?",
      desc: "El universo ya votó y dijo que hacemos la mejor pareja ✨",
      noText: "Frío, frío... ❄️",
      yesHint: "¡Di que sí! 💫"
    },
    {
      badge: "🐱",
      title: "¿Sabías que cada vez que presionas 'No'...",
      desc: "Un gatito en alguna parte del mundo se queda sin croquetas 🥺💔",
      noText: "Intenta otra vez 😏",
      yesHint: "Salva al gatito 🐾"
    },
    {
      badge: "💅",
      title: "¡Pero mira el botón de al lado!",
      desc: "Es rosita, brilla, huele rico y tiene un futuro prometedor 👇",
      noText: "¡Soy veloz! 🏎️",
      yesHint: "¡Vamos por helado! 🍦"
    },
    {
      badge: "🥺",
      title: "¿Quién más te va a querer tanto como yo?",
      desc: "Nadie más tiene tanta paciencia ni te mira con estos ojitos 🥰",
      noText: "No se vale 🙈",
      yesHint: "¡Acepto con amor! ❤️"
    },
    {
      badge: "🤖",
      title: "¡Alerta del sistema!",
      desc: "La opción 'No' no es compatible con una mujer tan hermosa como Andrea ⚠️💖",
      noText: "¡Por aquí no! 🏃",
      yesHint: "100% compatible 🚀"
    },
    {
      badge: "🏃‍♀️",
      title: "¡Estás haciendo más cardio que en el gym!",
      desc: "Persiguiendo el botón por toda la pantalla... ¡ya dale al Sí! 😂",
      noText: "El otro botón 👇",
      yesHint: "¡Ya no corras! 💖"
    },
    {
      badge: "✈️",
      title: "¿Y todos los lugares que visitaremos?",
      desc: "No me digas que vas a cancelar nuestros viajes juntos 🌎✨",
      noText: "¡Ya ríndete! 😋",
      yesHint: "Próxima parada: Juntos ✈️"
    },
    {
      badge: "🌹",
      title: "Te prometo que nunca te faltarán sonrisas",
      desc: "Ni abrazos cuando tengas un mal día, ni besos inesperados ❤️",
      noText: "Último intento 🚀",
      yesHint: "Promesa de amor 💍"
    },
    {
      badge: "💤",
      title: "El botón 'No' acaba de renunciar",
      desc: "Dijo que tú y yo estamos destinados a estar juntos y se fue a descansar 😂",
      noText: "Dí que síiii 🥺",
      yesHint: "¡La respuesta final! 💖"
    },
    {
      badge: "💍",
      title: "¡Ya casi te rindes, lo sé!",
      desc: "Tu dedo quiere ir directo al botón del 'Sí', no lo reprimas 😜",
      noText: "¡Imposible! ❤️",
      yesHint: "¡El Gran Sí! ✨"
    }
  ]
};

// ============================================================================
// ESTADO GLOBAL DE LA APLICACIÓN
// ============================================================================
let currentChapter = 0;
let noClickAttempts = 0;
let isMusicPlaying = true; // Encendida por defecto
let audioContext = null;
let synthInterval = null;

// ============================================================================
// INICIALIZACIÓN AL CARGAR EL DOM
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initStarfield();
  initChapters();
  initMusicController();
  initEvasiveNoButton();
  initYesCelebration();
  initWaxEnvelope();
  initWhatsAppButton();
  initStardustTrail();

  // Activar música por defecto
  startBackgroundAudio();
  setupAutoplayUnlock();
});

// Desbloqueo universal de audio para navegadores móviles (iOS/Android)
function setupAutoplayUnlock() {
  const unlockEvents = ["click", "touchstart", "touchend", "pointerdown", "keydown"];
  const handleFirstInteraction = () => {
    if (isMusicPlaying) {
      const bgAudio = document.getElementById("bg-audio");
      if (bgAudio && bgAudio.paused) {
        startBackgroundAudio();
      }
    }
    unlockEvents.forEach((evt) => {
      window.removeEventListener(evt, handleFirstInteraction, { capture: true });
    });
  };

  unlockEvents.forEach((evt) => {
    window.addEventListener(evt, handleFirstInteraction, { capture: true, passive: true });
  });
}

// ============================================================================
// NAVEGACIÓN ENTRE CAPÍTULOS
// ============================================================================
function initChapters() {
  const btnStart = document.getElementById("btn-start");
  if (btnStart) {
    btnStart.addEventListener("click", () => {
      // Iniciar música si no está sonando con el primer gesto del usuario
      if (isMusicPlaying) {
        startBackgroundAudio();
      }
      goToChapter(1);
    });
  }

  const nextButtons = document.querySelectorAll(".btn-next");
  nextButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = parseInt(btn.getAttribute("data-target"), 10);
      if (!isNaN(target)) {
        goToChapter(target);
      }
    });
  });
}

function goToChapter(chapterIndex) {
  const allChapters = document.querySelectorAll(".chapter-card");
  allChapters.forEach((card) => {
    card.classList.remove("active");
  });

  const nextCard = document.getElementById(`chapter-${chapterIndex}`);
  if (nextCard) {
    currentChapter = chapterIndex;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      nextCard.classList.add("active");
    }, 150);
  }
}

// ============================================================================
// CONTROL DE MÚSICA & SINTETIZADOR CELESTIAL DE RESPALDO (WEB AUDIO API)
// ============================================================================
function initMusicController() {
  const musicToggle = document.getElementById("music-toggle");
  if (!musicToggle) return;

  musicToggle.addEventListener("click", () => {
    if (isMusicPlaying) {
      pauseBackgroundAudio();
    } else {
      startBackgroundAudio();
    }
  });
}

function startBackgroundAudio() {
  const bgAudio = document.getElementById("bg-audio");
  const musicToggle = document.getElementById("music-toggle");
  const musicLabel = document.getElementById("music-label");

  isMusicPlaying = true;
  if (musicToggle) {
    musicToggle.classList.remove("muted");
    musicToggle.classList.add("playing");
    musicToggle.setAttribute("aria-label", "Música sonando: Machu Picchu. Pulsa para silenciar (Mute)");
  }
  if (musicLabel) musicLabel.textContent = "Machu Picchu 🎵";

  if (bgAudio) {
    bgAudio.muted = false;
    bgAudio.volume = 0.85;
    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // En móviles que requieren interacción previa del usuario,
        // la música se reanudará automáticamente al primer toque de pantalla
        console.warn("Autoplay diferido a interacción:", err);
      });
    }
  } else {
    startCelestialSynth();
  }
}

function pauseBackgroundAudio() {
  const bgAudio = document.getElementById("bg-audio");
  const musicToggle = document.getElementById("music-toggle");
  const musicLabel = document.getElementById("music-label");

  isMusicPlaying = false;
  if (musicToggle) {
    musicToggle.classList.remove("playing");
    musicToggle.classList.add("muted");
    musicToggle.setAttribute("aria-label", "Música silenciada. Pulsa para activar sonido");
  }
  if (musicLabel) musicLabel.textContent = "Silenciado";

  if (bgAudio) {
    bgAudio.pause();
    bgAudio.muted = true;
  }
  stopCelestialSynth();
}

/**
 * Generador de acordes celestiales suaves (Estilo caja musical / arpa cósmica)
 * Garantiza música hermosa incluso si el navegador bloquea audio multimedia externo.
 */
function startCelestialSynth() {
  if (synthInterval) return;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioContext) {
      audioContext = new AudioContextClass();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
    let step = 0;
    synthInterval = setInterval(() => {
      if (!isMusicPlaying || !audioContext) return;

      const note = notes[step % notes.length];
      playChime(note, 2.2);

      if (step % 2 === 0) {
        setTimeout(() => {
          if (isMusicPlaying) playChime(notes[(step + 2) % notes.length], 2.5);
        }, 320);
      }

      step++;
    }, 1200);

  } catch (err) {
    console.warn("Web Audio no disponible:", err);
  }
}

function playChime(freq, duration) {
  if (!audioContext || audioContext.state !== "running") return;

  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, audioContext.currentTime);

  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioContext.destination);

  osc.start();
  osc.stop(audioContext.currentTime + duration);
}

function stopCelestialSynth() {
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

// ============================================================================
// BOTÓN "NO" ESCURRIDIZO CON DIÁLOGO DIVERTIDO Y MÚLTIPLES PREGUNTAS
// ============================================================================
function initEvasiveNoButton() {
  const btnNo = document.getElementById("btn-no");
  const btnYes = document.getElementById("btn-yes");
  const teaseBubble = document.getElementById("tease-bubble");

  if (!btnNo) return;

  const triggerEvade = (e) => {
    e.preventDefault();
    evadeButton(btnNo, btnYes, teaseBubble);
  };

  btnNo.addEventListener("mouseenter", triggerEvade);
  btnNo.addEventListener("touchstart", triggerEvade, { passive: false });
  btnNo.addEventListener("click", triggerEvade);
}

function evadeButton(btnNo, btnYes, teaseBubble) {
  noClickAttempts++;

  // Vibración háptica juguetona en móviles
  if (navigator.vibrate) {
    try {
      navigator.vibrate([35, 45, 35]);
    } catch (e) {}
  }

  // 1. Alternar preguntas y diálogos divertidos
  const dialogues = PROPOSAL_CONFIG.teaseDialogues;
  const d = dialogues[(noClickAttempts - 1) % dialogues.length];

  const teaseBadge = document.getElementById("tease-badge");
  const teaseTitle = document.getElementById("tease-title");
  const teaseDesc = document.getElementById("tease-desc");
  const btnNoText = document.getElementById("btn-no-text");
  const yesHint = document.getElementById("yes-hint");

  if (teaseBadge) teaseBadge.textContent = d.badge;
  if (teaseTitle) teaseTitle.textContent = d.title;
  if (teaseDesc) teaseDesc.textContent = d.desc;
  if (btnNoText) btnNoText.textContent = d.noText;
  if (yesHint) yesHint.textContent = d.yesHint;

  if (teaseBubble) {
    teaseBubble.classList.remove("visible");
    void teaseBubble.offsetWidth; // Forzar reflow para reanimar suavemente
    teaseBubble.classList.add("visible");
  }

  // 2. Hacer que el botón SÍ crezca y llame más la atención
  if (btnYes) {
    const scaleFactor = Math.min(1 + (noClickAttempts * 0.05), 1.45);
    btnYes.style.transform = `scale(${scaleFactor})`;
  }

  // 3. Calcular posición segura dentro de la pantalla evitando superponerse al botón Sí
  btnNo.classList.add("moving");

  const btnWidth = btnNo.offsetWidth || 110;
  const btnHeight = btnNo.offsetHeight || 50;
  const padding = 20;

  const maxX = Math.max(padding, window.innerWidth - btnWidth - padding);
  const maxY = Math.max(padding + 80, window.innerHeight - btnHeight - padding - 20);

  const yesRect = btnYes ? btnYes.getBoundingClientRect() : null;
  let randomX = padding;
  let randomY = padding + 80;
  let attempts = 0;

  do {
    randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    randomY = Math.max(padding + 75, Math.floor(Math.random() * maxY));
    attempts++;

    if (yesRect) {
      const noCenterX = randomX + btnWidth / 2;
      const noCenterY = randomY + btnHeight / 2;
      const yesCenterX = yesRect.left + yesRect.width / 2;
      const yesCenterY = yesRect.top + yesRect.height / 2;
      const dist = Math.hypot(noCenterX - yesCenterX, noCenterY - yesCenterY);

      if (dist > 120 || attempts > 15) {
        break;
      }
    } else {
      break;
    }
  } while (attempts < 20);

  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;

  // 4. Lanzar reacción flotante divertida
  spawnFloatingReaction(randomX + btnWidth / 2, randomY, d.badge);
}

function spawnFloatingReaction(x, y, emoji) {
  const el = document.createElement("div");
  el.className = "floating-reaction";
  el.textContent = emoji;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.setProperty("--rx", `${(Math.random() - 0.5) * 60}px`);

  document.body.appendChild(el);
  setTimeout(() => {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, 1100);
}

// ============================================================================
// CELEBRACIÓN DEL "SÍ" & LANZAMIENTO DE CONFETI ESTELAR
// ============================================================================
function initYesCelebration() {
  const btnYes = document.getElementById("btn-yes");
  if (!btnYes) return;

  btnYes.addEventListener("click", () => {
    // Fanfarria sonora de victoria
    playCelebrationChimes();

    // Iniciar lluvia de confeti y fuegos artificiales
    startConfettiCelebration();

    // Pasar al Capítulo 5 (Celebración y carta)
    goToChapter(5);
  });
}

function playCelebrationChimes() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioContext = new AudioContextClass();
  }
  if (!audioContext) return;

  const victoryNotes = [392.00, 523.25, 659.25, 783.99, 1046.50];
  victoryNotes.forEach((freq, idx) => {
    setTimeout(() => {
      playChime(freq, 2.5);
    }, idx * 160);
  });
}

// ============================================================================
// SOBRE DE LACRE INTERACTIVO
// ============================================================================
function initWaxEnvelope() {
  const waxBtn = document.getElementById("wax-seal-btn");
  const envelopeCard = document.getElementById("envelope-card");

  if (!waxBtn || !envelopeCard) return;

  waxBtn.addEventListener("click", () => {
    envelopeCard.classList.add("opened");

    // Llenar datos configurables en la tarjeta
    const valLugar = document.getElementById("val-lugar");
    const valFecha = document.getElementById("val-fecha");

    if (valLugar) valLugar.textContent = PROPOSAL_CONFIG.datePlace;
    if (valFecha) valFecha.textContent = PROPOSAL_CONFIG.dateTime;

    // Pequeño repique sonoro al abrir
    playChime(659.25, 1.8);
  });
}

// ============================================================================
// BOTÓN DE WHATSAPP CON MENSAJE PRE-CARGADO
// ============================================================================
function initWhatsAppButton() {
  const whatsappBtn = document.getElementById("whatsapp-btn");
  if (!whatsappBtn) return;

  const phone = PROPOSAL_CONFIG.whatsappPhone.trim();
  const textEncoded = encodeURIComponent(PROPOSAL_CONFIG.whatsappMessage);
  
  // Enlace oficial de WhatsApp Web / App
  whatsappBtn.href = `https://wa.me/${phone}?text=${textEncoded}`;
}

// ============================================================================
// CANVAS DE CIELO ESTRELLADO & CONSTELACIONES INTERACTIVAS
// ============================================================================
function initStarfield() {
  const canvas = document.getElementById("starfield-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const starCount = Math.floor((width * height) / 7500);
  const stars = [];
  const shootingStars = [];

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  // Generación de estrellas
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.7 + 0.3,
      baseAlpha: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      gold: Math.random() > 0.65
    });
  }

  // Estrellas fugaces ocasionales
  function spawnShootingStar() {
    shootingStars.push({
      x: Math.random() * width * 0.8,
      y: Math.random() * height * 0.4,
      len: Math.random() * 80 + 40,
      speed: Math.random() * 10 + 12,
      angle: Math.PI / 4,
      opacity: 1
    });

    const nextDelay = Math.random() * 5000 + 3500;
    setTimeout(spawnShootingStar, nextDelay);
  }
  setTimeout(spawnShootingStar, 2000);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 1. Dibujar estrellas
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.alpha += s.twinkleSpeed;
      if (s.alpha > 1 || s.alpha < 0.2) {
        s.twinkleSpeed = -s.twinkleSpeed;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = s.gold
        ? `rgba(246, 196, 69, ${s.alpha})`
        : `rgba(226, 232, 245, ${s.alpha})`;
      ctx.fill();

      // Conectar líneas de constelación al cursor cercano
      const dx = mouseX - s.x;
      const dy = mouseY - s.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(246, 196, 69, ${(1 - dist / 100) * 0.35})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }

    // 2. Dibujar estrellas fugaces
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const ss = shootingStars[i];
      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.opacity -= 0.02;

      ctx.beginPath();
      const tailX = ss.x - Math.cos(ss.angle) * ss.len;
      const tailY = ss.y - Math.sin(ss.angle) * ss.len;

      const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
      grad.addColorStop(0, `rgba(255, 235, 170, ${ss.opacity})`);
      grad.addColorStop(1, `rgba(255, 255, 255, 0)`);

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.8;
      ctx.moveTo(ss.x, ss.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      if (ss.opacity <= 0 || ss.x > width || ss.y > height) {
        shootingStars.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ============================================================================
// CANVAS DE CONFETI DE CORAZONES & ESTRELLAS DORADAS
// ============================================================================
function startConfettiCelebration() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;

  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const colors = ["#f6c445", "#ffd97d", "#ff4d6d", "#ff8da1", "#ffffff"];

  // Crear 140 partículas variadas (corazones y destellos)
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: width / 2 + (Math.random() - 0.5) * 120,
      y: height / 2 + (Math.random() - 0.5) * 80,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -15 - 5,
      gravity: 0.35,
      size: Math.random() * 9 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8,
      type: Math.random() > 0.4 ? "heart" : "star",
      opacity: 1
    });
  }

  let startTime = Date.now();

  function drawHeart(x, y, size, color, rot, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rot * Math.PI) / 180);
    ctx.scale(size / 15, size / 15);
    ctx.fillStyle = color;
    ctx.globalAlpha = Math.max(0, alpha);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-5, -7, -12, -2, -12, 5);
    ctx.bezierCurveTo(-12, 11, 0, 16, 0, 20);
    ctx.bezierCurveTo(0, 16, 12, 11, 12, 5);
    ctx.bezierCurveTo(12, -2, 5, -7, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  function renderConfetti() {
    ctx.clearRect(0, 0, width, height);

    let activeCount = 0;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.0035;

      if (p.opacity > 0 && p.y < height + 40) {
        activeCount++;
        drawHeart(p.x, p.y, p.size, p.color, p.rotation, p.opacity);
      }
    }

    if (activeCount > 0 && Date.now() - startTime < 9000) {
      requestAnimationFrame(renderConfetti);
    } else {
      canvas.style.display = "none";
    }
  }

  renderConfetti();
}

// ============================================================================
// ESTELA DE POLVO DE ESTRELLAS AL MOVER EL MOUSE (DESKTOP)
// ============================================================================
function initStardustTrail() {
  if (window.innerWidth < 768) return; // Solo en pantallas medianas / grandes

  const trailContainer = document.getElementById("stardust-trail");
  if (!trailContainer) return;

  let lastX = 0;
  let lastY = 0;

  window.addEventListener("mousemove", (e) => {
    const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    if (dist > 18) {
      createSparkle(e.clientX, e.clientY, trailContainer);
      lastX = e.clientX;
      lastY = e.clientY;
    }
  });
}

function createSparkle(x, y, container) {
  const sparkle = document.createElement("div");
  sparkle.style.position = "fixed";
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  sparkle.style.width = "4px";
  sparkle.style.height = "4px";
  sparkle.style.borderRadius = "50%";
  sparkle.style.backgroundColor = Math.random() > 0.5 ? "#f6c445" : "#ff8da1";
  sparkle.style.boxShadow = "0 0 8px rgba(246, 196, 69, 0.8)";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "99";
  sparkle.style.transition = "all 0.8s ease-out";

  container.appendChild(sparkle);

  requestAnimationFrame(() => {
    sparkle.style.transform = `translate(${(Math.random() - 0.5) * 20}px, ${Math.random() * 25 + 5}px) scale(0)`;
    sparkle.style.opacity = "0";
  });

  setTimeout(() => {
    if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
  }, 850);
}
