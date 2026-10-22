/* =========================================================
   for Anny — interactions
   Everything is intentionally sweet, a little silly, and easy
   to personalise. The content lives at the top of this file.
   ========================================================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const pad = (number) => String(number).padStart(2, "0");
const randomFrom = (list) => list[Math.floor(Math.random() * list.length)];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------
   1. WORDS — edit these to make the whole site feel even more like you
   ------------------------------------------------------------------ */

const loveNotes = [
  {
    category: "a reminder",
    text: "If you’re reading this and wondering whether you’re on my mind — yes. You are. Constantly. It’s becoming a full-time job."
  },
  {
    category: "the honest truth",
    text: "I don’t just miss you when something big happens. I miss you at 2pm on a random Tuesday, when I see something funny and my first thought is “Anny would love this.”"
  },
  {
    category: "a tiny confession",
    text: "I’ve replayed your voice in my head more times than I’d like to admit. It’s my favorite sound. Don’t tell anyone I’m this soft."
  },
  {
    category: "for when you’re tired",
    text: "You don’t have to be everything for everyone today. Put the world down for a minute. I’m proud of you for simply existing. That’s enough."
  },
  {
    category: "a very serious promise",
    text: "I promise to always be your safest place, your loudest hype person, and the one who will absolutely fight a pigeon for you if it looks at you wrong."
  },
  {
    category: "the short version",
    text: "I miss you. I like you. I love you. Come here."
  },
  {
    category: "a note to keep",
    text: "You are not “too much.” You are exactly enough, and then some. I hope you feel that every single day, especially on the days you don’t."
  },
  {
    category: "one more thing",
    text: "If I could give you one thing right now, it would be the ability to see yourself through my eyes for five seconds. You’d never doubt how beautiful you are again."
  }
];

const flashcardData = [
  {
    question: "If I could teleport to you right now…",
    answer: "I’d appear behind you, wrap my arms around you, and stay there until you believed how much I missed you."
  },
  {
    question: "The thing I miss most about you",
    answer: "The ordinary stuff. Your voice, your laugh, the way a boring day stops feeling boring when you’re in it."
  },
  {
    question: "A promise I’ll keep",
    answer: "I’ll never make you guess where you stand with me. You’re my favorite. Loudly. Always."
  },
  {
    question: "If missing you was a subject",
    answer: "I’d be top of the class. Probably annoying the teacher. Definitely thinking about you instead of the lesson."
  },
  {
    question: "What I want to say before you sleep",
    answer: "You are so loved. Even on the days you don’t feel like it. Especially then."
  },
  {
    question: "A tiny thing I love about you",
    answer: "The way you can turn a normal moment into a memory. I don’t know how you do it. I hope you never stop."
  },
  {
    question: "When you come online, I want to…",
    answer: "Hear everything. The big things, the tiny things, the random things. I want the whole Anny update."
  },
  {
    question: "The short version",
    answer: "I miss you. I like you. I love you. Come here."
  }
];

const dateIdeas = [
  {
    emoji: "🎬",
    mood: "cozy",
    vibe: "cozy night",
    title: "Blanket-fort cinema",
    description: "Every pillow in the house, the biggest blanket, questionable snacks, and a movie neither of us will actually finish.",
    time: "at home · no fixed bedtime"
  },
  {
    emoji: "🍝",
    mood: "cozy",
    vibe: "slow evening",
    title: "Cook something we’ve never made",
    description: "Pick a recipe. Make a mess. Rate each other’s chopping technique. Order pizza if it all goes wrong.",
    time: "one ambitious evening"
  },
  {
    emoji: "🧴",
    mood: "cozy",
    vibe: "soft hours",
    title: "At-home spa night",
    description: "Face masks, warm towels, and me legally required to compliment you every three minutes.",
    time: "one very soft night"
  },
  {
    emoji: "🍪",
    mood: "silly",
    vibe: "chaos",
    title: "The most chaotic cookie bake-off",
    description: "You get half the counter, I get the other half, and the kitchen gets destroyed for the sake of sugar.",
    time: "a rainy afternoon"
  },
  {
    emoji: "👕",
    mood: "silly",
    vibe: "chaos",
    title: "$10 thrift-store challenge",
    description: "We each pick a full outfit for the other. Then we wear them to get coffee and act completely normal.",
    time: "a Saturday"
  },
  {
    emoji: "📸",
    mood: "silly",
    vibe: "chaos",
    title: "Photo-booth crime scene",
    description: "Cram into a photo booth and take the most ridiculous photos physically possible. One has to be frame-worthy.",
    time: "20 minutes + laughing"
  },
  {
    emoji: "🌅",
    mood: "outside",
    vibe: "golden hour",
    title: "Golden-hour walk",
    description: "Find a pretty street, walk with no destination, and take exactly one photo of each other looking unreasonably good.",
    time: "just before sunset"
  },
  {
    emoji: "🧺",
    mood: "outside",
    vibe: "sunshine",
    title: "Picnic under the prettiest tree",
    description: "A blanket, too much food, and a full afternoon of doing nothing together. My favorite activity.",
    time: "a warm afternoon"
  },
  {
    emoji: "📚",
    mood: "outside",
    vibe: "slow day",
    title: "Bookshop crawl",
    description: "Wander through every bookshop we find, pick a book for each other, then find dessert immediately after.",
    time: "an unhurried day"
  },
  {
    emoji: "🌌",
    mood: "late-night",
    vibe: "after dark",
    title: "Stargazing + overthinking",
    description: "Blanket on the ground, snacks within reach, and us solving the whole universe one conversation at a time.",
    time: "late, when it’s quiet"
  },
  {
    emoji: "🚗",
    mood: "late-night",
    vibe: "after dark",
    title: "Midnight drive, no destination",
    description: "A playlist of songs that remind us of each other and a road that keeps going. Windows down, volume up.",
    time: "way past bedtime"
  },
  {
    emoji: "🥞",
    mood: "late-night",
    vibe: "2am energy",
    title: "Late-night diner run",
    description: "Comfiest clothes, the weirdest thing on the menu, and a booth where we stay until someone kicks us out.",
    time: "when the city gets quiet"
  }
];

const openWhenNotes = {
  missme: {
    emoji: "🌙",
    title: "you miss me",
    text: "Look at the time. Somewhere, at this exact second, I’m probably missing you too. That has to count as being together, right? Come find me when you can. I’ll be the one refreshing the chat."
  },
  overwhelmed: {
    emoji: "🌿",
    title: "everything is too loud",
    text: "Put it all down for a minute. You do not have to earn rest, and you do not have to be productive to be loved. Unclench your jaw. Breathe. Drink some water. I’m proud of you, even on the days you do nothing at all."
  },
  sleep: {
    emoji: "☁️",
    title: "you can’t sleep",
    text: "Imagine I’m right beside you. My arm around you, your head on my shoulder, and me telling you the most boring story in the world until you drift off. Goodnight, my favorite person. Dream about something ridiculous."
  },
  laugh: {
    emoji: "🫶",
    title: "you need a laugh",
    text: "A reminder that you chose me. Voluntarily. With your whole chest. That’s objectively hilarious. Anyway, you’re stuck with me now and I’m aggressively obsessed with you. Sorry about your luck. xo"
  }
};

/* ------------------------------------------------------------------
   2. Small helpers: storage, toast, particles
   ------------------------------------------------------------------ */

const storage = {
  get(key, fallback) {
    try {
      const value = window.localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      /* Private mode or a locked-down browser. The site still works. */
    }
  }
};

const toastEl = $("#toast");
let toastTimer;

function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove("is-visible"), 2600);
}

const particleLayer = $("#particleLayer");
const celebrationColors = ["#ff6f96", "#ffd37d", "#c4acef", "#ff876d", "#b8e0c9", "#fff7ee"];

function burstAt(element, amount = 16) {
  if (!element || reduceMotion || !particleLayer) return;
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const glyphs = ["♥", "♥", "✦", "♡", "♥"];

  for (let i = 0; i < amount; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent = randomFrom(glyphs);
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.color = randomFrom(celebrationColors);
    particle.style.fontSize = `${11 + Math.random() * 19}px`;
    particle.style.lineHeight = "1";
    particleLayer.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 130;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const duration = 700 + Math.random() * 750;

    const animation = particle.animate(
      [
        { transform: "translate(-50%, -50%) scale(0.4) rotate(0deg)", opacity: 0 },
        { opacity: 1, offset: 0.12 },
        {
          transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${0.8 + Math.random() * 0.9}) rotate(${Math.random() * 300 - 150}deg)`,
          opacity: 0
        }
      ],
      { duration, easing: "cubic-bezier(.2,.75,.2,1)" }
    );

    animation.finished.catch(() => {}).finally(() => particle.remove());
  }
}

function celebrate() {
  if (reduceMotion || !particleLayer) return;

  for (let i = 0; i < 115; i += 1) {
    const piece = document.createElement("span");
    const isHeart = i % 5 === 0;
    piece.className = "particle";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = "-30px";
    piece.style.color = randomFrom(celebrationColors);

    if (isHeart) {
      piece.textContent = "♥";
      piece.style.fontSize = `${12 + Math.random() * 18}px`;
      piece.style.lineHeight = "1";
    } else {
      piece.style.width = `${5 + Math.random() * 9}px`;
      piece.style.height = `${7 + Math.random() * 12}px`;
      piece.style.background = randomFrom(celebrationColors);
      piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    }

    particleLayer.appendChild(piece);

    const drift = Math.random() * 260 - 130;
    const duration = 2400 + Math.random() * 2200;
    const delay = Math.random() * 750;
    const rotation = Math.random() * 900 - 450;

    const animation = piece.animate(
      [
        { transform: "translate3d(0, 0, 0) rotate(0deg)", opacity: 1 },
        {
          transform: `translate3d(${drift}px, ${window.innerHeight + 90}px, 0) rotate(${rotation}deg)`,
          opacity: 0.9,
          offset: 0.85
        },
        {
          transform: `translate3d(${drift + Math.random() * 70 - 35}px, ${window.innerHeight + 150}px, 0) rotate(${rotation + 90}deg)`,
          opacity: 0
        }
      ],
      { duration, delay, easing: "cubic-bezier(.16,.6,.4,1)", fill: "both" }
    );

    animation.finished.catch(() => {}).finally(() => piece.remove());
  }
}

/* ------------------------------------------------------------------
   3. Cursor glow and scroll reveals
   ------------------------------------------------------------------ */

const glow = $("#cursorGlow");
if (glow && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  let lastMove = 0;
  document.addEventListener(
    "pointermove",
    (event) => {
      const now = performance.now();
      if (now - lastMove < 16) return;
      lastMove = now;
      glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      document.body.classList.add("has-cursor");
    },
    { passive: true }
  );
  document.addEventListener("mouseleave", () => document.body.classList.remove("has-cursor"));
}

const revealItems = $$(".reveal");
if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -45px" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* ------------------------------------------------------------------
   4. Kisses / love counter
   ------------------------------------------------------------------ */

let loveCount = Number(storage.get("anny-love-count", 0)) || 0;
const loveCountEl = $("#loveCount");
const kissStatusEl = $("#kissStatus");

const kissMessages = [
  "{n} kisses sent. keep going.",
  "{n} kisses and counting. i’m not complaining.",
  "{n} kisses. my heart is doing the thing.",
  "{n} kisses. officially too many? absolutely not.",
  "{n} kisses. okay, now you’re just showing off.",
  "{n} kisses. i miss you even more now, somehow."
];

function updateLoveCount(messageIndex = 0) {
  if (loveCountEl) loveCountEl.textContent = String(loveCount);
  if (kissStatusEl) {
    kissStatusEl.textContent = kissMessages[messageIndex % kissMessages.length].replace("{n}", loveCount);
  }
}

function sendLove(button) {
  loveCount += 1;
  storage.set("anny-love-count", loveCount);
  updateLoveCount(loveCount - 1);
  burstAt(button, button && button.id === "topLoveBtn" ? 10 : 18);
  if (button && button.id === "topLoveBtn") {
    button.animate(
      [
        { transform: "scale(1) rotate(0)" },
        { transform: "scale(1.08) rotate(-2deg)" },
        { transform: "scale(1) rotate(0)" }
      ],
      { duration: 360, easing: "ease-out" }
    );
  }
}

updateLoveCount(0);
$("#topLoveBtn")?.addEventListener("click", (event) => sendLove(event.currentTarget));
$("#heroKissBtn")?.addEventListener("click", (event) => sendLove(event.currentTarget));

/* ------------------------------------------------------------------
   5. The letter
   ------------------------------------------------------------------ */

const envelopeBtn = $("#envelopeBtn");
const envelopeTip = $("#envelopeTip");
const letterReveal = $("#letterReveal");
const closeLetterBtn = $("#closeLetterBtn");

function setLetterOpen(isOpen, scroll = true) {
  if (!envelopeBtn || !letterReveal) return;

  envelopeBtn.classList.toggle("is-open", isOpen);
  envelopeBtn.setAttribute("aria-expanded", String(isOpen));
  envelopeBtn.setAttribute("aria-label", isOpen ? "Close the letter" : "Open the letter for Anny");
  if (envelopeTip) envelopeTip.textContent = isOpen ? "tap to close" : "tap to open";

  letterReveal.classList.toggle("is-open", isOpen);
  letterReveal.setAttribute("aria-hidden", String(!isOpen));

  if (isOpen) {
    letterReveal.removeAttribute("inert");
    if (scroll) {
      window.setTimeout(() => {
        letterReveal.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      }, 420);
    }
    burstAt(envelopeBtn, 14);
  } else {
    letterReveal.setAttribute("inert", "");
    if (scroll) {
      envelopeBtn.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    }
  }
}

letterReveal?.setAttribute("inert", "");

envelopeBtn?.addEventListener("click", () => {
  const isOpen = envelopeBtn.getAttribute("aria-expanded") === "true";
  setLetterOpen(!isOpen);
});

closeLetterBtn?.addEventListener("click", () => setLetterOpen(false));

/* ------------------------------------------------------------------
   6. Open-when notes dialog
   ------------------------------------------------------------------ */

const openWhenDialog = $("#openWhenDialog");
const dialogCloseBtn = $("#dialogCloseBtn");

function openWhenNote(key) {
  const note = openWhenNotes[key];
  if (!note || !openWhenDialog) return;

  $("#dialogIcon").textContent = note.emoji;
  $("#dialogTitle").textContent = note.title;
  $("#dialogNote").textContent = note.text;
  openWhenDialog.showModal();
}

$$(".open-note").forEach((button) => {
  button.addEventListener("click", () => openWhenNote(button.dataset.note));
});

dialogCloseBtn?.addEventListener("click", () => openWhenDialog?.close());

/* ------------------------------------------------------------------
   7. The miss-you meter
   ------------------------------------------------------------------ */

const HOLD_DURATION = 3200;
const meter = $("#meter");
const meterValueEl = $("#meterValue");
const meterSubEl = $("#meterSub");
const meterMessageEl = $("#meterMessage");
const holdBtn = $("#holdBtn");
const holdBtnText = $("#holdBtnText");

let meterValue = 0;
let meterMaxed = false;
let meterHolding = false;
let meterRaf = null;
let meterStart = 0;
let lastMeterBand = -1;

const meterBands = [
  { min: 75, sub: "keep going", message: "almost at the scientifically impossible limit…" },
  { min: 45, sub: "still holding", message: "okay, that’s already more than a normal amount." },
  { min: 18, sub: "holding", message: "this is getting embarrassing (for me)." },
  { min: 0.5, sub: "keep holding", message: "good start. don’t let go yet." }
];

function paintMeter() {
  if (!meter || !meterValueEl) return;
  meter.style.setProperty("--p", meterValue.toFixed(2));
  meterValueEl.textContent = meterValue >= 100 ? "∞" : `${Math.round(meterValue)}%`;

  const bandIndex = meterValue >= 100 ? -2 : meterBands.findIndex((band) => meterValue >= band.min);
  if (bandIndex !== lastMeterBand) {
    lastMeterBand = bandIndex;
    if (meterValue < 100) {
      const band = meterBands[bandIndex];
      if (band) {
        if (meterSubEl) meterSubEl.textContent = band.sub;
        if (meterMessageEl) meterMessageEl.textContent = band.message;
      }
    }
  }
}

function maxOutMeter() {
  if (meterMaxed) return;
  meterMaxed = true;
  meterValue = 100;
  paintMeter();
  meter?.classList.add("maxed");
  if (meterSubEl) meterSubEl.textContent = "officially immeasurable";
  if (meterMessageEl) meterMessageEl.textContent = "ERROR: TOO MUCH LOVE. the meter has given up.";
  if (holdBtnText) holdBtnText.textContent = "okay, you broke it";
  burstAt(meter, 30);
  celebrate();
  window.setTimeout(() => {
    if (meterMessageEl) meterMessageEl.textContent = "still ∞. still completely true.";
  }, 2800);
}

function stepMeter(now) {
  if (!meterHolding || meterMaxed) return;
  const elapsed = now - meterStart;
  meterValue = Math.min(100, (elapsed / HOLD_DURATION) * 100);
  paintMeter();

  if (meterValue >= 100) {
    meterHolding = false;
    meterRaf = null;
    holdBtn?.classList.remove("is-holding");
    maxOutMeter();
    return;
  }

  meterRaf = window.requestAnimationFrame(stepMeter);
}

function startMeterHold() {
  if (meterMaxed) {
    if (meterMessageEl) meterMessageEl.textContent = "You already broke it. That’s on you, gorgeous.";
    burstAt(holdBtn, 10);
    return;
  }
  if (meterHolding) return;

  meterHolding = true;
  meterStart = performance.now() - (meterValue / 100) * HOLD_DURATION;
  holdBtn?.classList.add("is-holding");
  if (holdBtnText) holdBtnText.textContent = "don’t let go…";
  if (meterSubEl) meterSubEl.textContent = "keep holding";
  meterRaf = window.requestAnimationFrame(stepMeter);
}

function stopMeterHold() {
  if (!meterHolding) return;
  meterHolding = false;
  if (meterRaf) window.cancelAnimationFrame(meterRaf);
  meterRaf = null;
  holdBtn?.classList.remove("is-holding");

  if (!meterMaxed) {
    if (holdBtnText) {
      holdBtnText.textContent = meterValue >= 70 ? "hold again, i dare you" : "press + hold again";
    }
    if (meterSubEl) {
      meterSubEl.textContent = meterValue >= 70 ? "that’s only part of it" : "not done yet?";
    }
    if (meterMessageEl) {
      const releaseLines = [
        "you let go. the feeling didn’t.",
        "that was barely a warm-up, my love.",
        "still not the whole truth. not even close.",
        "i’d hold on longer for you. obviously."
      ];
      meterMessageEl.textContent = releaseLines[Math.min(3, Math.floor(meterValue / 30))];
    }
  }
}

holdBtn?.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  startMeterHold();
});

window.addEventListener("pointerup", stopMeterHold);
window.addEventListener("pointercancel", stopMeterHold);

holdBtn?.addEventListener("keydown", (event) => {
  if (event.key !== " " && event.key !== "Enter") return;
  event.preventDefault();
  if (!event.repeat) startMeterHold();
});

holdBtn?.addEventListener("keyup", (event) => {
  if (event.key !== " " && event.key !== "Enter") return;
  event.preventDefault();
  stopMeterHold();
});

window.addEventListener("blur", stopMeterHold);

/* ------------------------------------------------------------------
   8. Love notes deck
   ------------------------------------------------------------------ */

const noteCategoryEl = $("#noteCategory");
const noteTextEl = $("#noteText");
const noteIndexEl = $("#noteIndex");
const bigNoteEl = $("#bigNote");
const prevNoteBtn = $("#prevNoteBtn");
const nextNoteBtn = $("#nextNoteBtn");
const shuffleNoteBtn = $("#shuffleNoteBtn");

let currentNote = 0;

function renderNote(animate = true) {
  const note = loveNotes[currentNote];
  if (!note) return;

  if (noteCategoryEl) noteCategoryEl.textContent = note.category;
  if (noteTextEl) noteTextEl.textContent = note.text;
  if (noteIndexEl) noteIndexEl.textContent = `${pad(currentNote + 1)} / ${pad(loveNotes.length)}`;

  if (animate && bigNoteEl && !reduceMotion) {
    bigNoteEl.classList.remove("is-swapping");
    void bigNoteEl.offsetWidth;
    bigNoteEl.classList.add("is-swapping");
  }
}

if (noteTextEl) {
  noteTextEl.textContent = loveNotes[0].text;
}
renderNote(false);

function nextNote(step = 1) {
  currentNote = (currentNote + step + loveNotes.length) % loveNotes.length;
  renderNote();
}

prevNoteBtn?.addEventListener("click", () => nextNote(-1));
nextNoteBtn?.addEventListener("click", () => nextNote(1));

shuffleNoteBtn?.addEventListener("click", (event) => {
  if (loveNotes.length > 1) {
    let nextIndex = currentNote;
    while (nextIndex === currentNote) {
      nextIndex = Math.floor(Math.random() * loveNotes.length);
    }
    currentNote = nextIndex;
  }
  renderNote();
  burstAt(event.currentTarget, 8);
});

/* ------------------------------------------------------------------
   9. Flashcard deck
   ------------------------------------------------------------------ */

const flashcardEl = $("#flashcard");
const flashQuestionEl = $("#flashQuestion");
const flashAnswerEl = $("#flashAnswer");
const flashKickerEl = $("#flashKicker");
const flashCounterEl = $("#flashCounter");
const flashProgressTextEl = $("#flashProgressText");
const flashProgressBarEl = $("#flashProgressBar");
const secretNoteEl = $("#secretNote");
const flashFrontEl = $("#flashFront");
const flashBackEl = $("#flashBack");
const prevCardBtn = $("#prevCardBtn");
const nextCardBtn = $("#nextCardBtn");

let currentCard = 0;
const flippedCards = new Set();
let secretUnlocked = false;

function renderFlashcard() {
  const card = flashcardData[currentCard];
  if (!card) return;

  if (flashQuestionEl) flashQuestionEl.textContent = card.question;
  if (flashAnswerEl) flashAnswerEl.textContent = card.answer;
  if (flashKickerEl) flashKickerEl.textContent = `card ${pad(currentCard + 1)} / ${pad(flashcardData.length)}`;
  if (flashCounterEl) flashCounterEl.textContent = `${pad(currentCard + 1)} / ${pad(flashcardData.length)}`;

  flashcardEl?.classList.remove("is-flipped");
  flashcardEl?.setAttribute("aria-pressed", "false");
  flashFrontEl?.setAttribute("aria-hidden", "false");
  flashBackEl?.setAttribute("aria-hidden", "true");

  if (flashProgressTextEl) {
    flashProgressTextEl.textContent = `${flippedCards.size} of ${flashcardData.length} flipped`;
  }
  if (flashProgressBarEl) {
    flashProgressBarEl.style.width = `${(flippedCards.size / flashcardData.length) * 100}%`;
  }
}

function unlockSecretNote() {
  if (secretUnlocked || !secretNoteEl) return;
  secretUnlocked = true;
  secretNoteEl.classList.add("is-unlocked");
  secretNoteEl.removeAttribute("aria-hidden");
  window.setTimeout(() => {
    burstAt(secretNoteEl, 24);
  }, 500);
}

flashcardEl?.addEventListener("click", () => {
  if (!flashcardEl) return;
  const isFlipped = flashcardEl.classList.toggle("is-flipped");
  flashcardEl.setAttribute("aria-pressed", String(isFlipped));
  flashFrontEl?.setAttribute("aria-hidden", String(isFlipped));
  flashBackEl?.setAttribute("aria-hidden", String(!isFlipped));

  if (isFlipped) {
    flippedCards.add(currentCard);
    if (flashProgressTextEl) {
      flashProgressTextEl.textContent = `${flippedCards.size} of ${flashcardData.length} flipped`;
    }
    if (flashProgressBarEl) {
      flashProgressBarEl.style.width = `${(flippedCards.size / flashcardData.length) * 100}%`;
    }
    if (flippedCards.size === flashcardData.length) unlockSecretNote();
  }
});

function moveCard(step) {
  currentCard = (currentCard + step + flashcardData.length) % flashcardData.length;
  renderFlashcard();
}

prevCardBtn?.addEventListener("click", () => moveCard(-1));
nextCardBtn?.addEventListener("click", () => moveCard(1));

renderFlashcard();

/* ------------------------------------------------------------------
   10. The date machine
   ------------------------------------------------------------------ */

const dateEmojiEl = $("#dateEmoji");
const dateNumberEl = $("#dateNumber");
const dateVibeEl = $("#dateVibe");
const dateTitleEl = $("#dateTitle");
const dateDescEl = $("#dateDesc");
const dateTimeEl = $("#dateTime");
const dateTicketEl = $("#dateTicket");
const dateWhisperEl = $("#dateWhisper");
const saveDateBtn = $("#saveDateBtn");
const spinDateBtn = $("#spinDateBtn");
const spinDateText = $("#spinDateText");
const moodChips = $$(".mood-chip");
const planEmptyEl = $("#planEmpty");
const savedDatesList = $("#savedDatesList");

let activeMood = "any";
let currentDateIndex = 0;
let savedDateTitles = loadSavedDates();
let isSpinning = false;
let spinTimer = null;

function safeSavedDates(value) {
  if (!Array.isArray(value)) return [];
  const validTitles = new Set(dateIdeas.map((date) => date.title));
  return [...new Set(value.filter((title) => typeof title === "string" && validTitles.has(title)))];
}

function loadSavedDates() {
  return safeSavedDates(storage.get("anny-date-plan", []));
}

function renderDate(index) {
  const date = dateIdeas[index];
  if (!date) return;

  currentDateIndex = index;
  if (dateEmojiEl) dateEmojiEl.textContent = date.emoji;
  if (dateNumberEl) dateNumberEl.textContent = `NO. ${String(index + 1).padStart(3, "0")}`;
  if (dateVibeEl) dateVibeEl.textContent = date.vibe;
  if (dateTitleEl) dateTitleEl.textContent = date.title;
  if (dateDescEl) dateDescEl.textContent = date.description;
  if (dateTimeEl) dateTimeEl.textContent = date.time;

  const isSaved = savedDateTitles.includes(date.title);
  if (saveDateBtn) {
    saveDateBtn.setAttribute("aria-pressed", String(isSaved));
    saveDateBtn.innerHTML = isSaved
      ? '<span aria-hidden="true">✓</span> saved — i’m in'
      : '<span aria-hidden="true">+</span> save to our little plan';
  }
}

function renderSavedDates() {
  if (!savedDatesList || !planEmptyEl) return;
  savedDatesList.innerHTML = "";

  planEmptyEl.hidden = savedDateTitles.length > 0;

  savedDateTitles.forEach((title) => {
    const date = dateIdeas.find((idea) => idea.title === title);
    if (!date) return;

    const item = document.createElement("li");
    const emoji = document.createElement("span");
    const label = document.createElement("span");
    const remove = document.createElement("button");

    emoji.textContent = date.emoji;
    emoji.setAttribute("aria-hidden", "true");
    label.textContent = date.title;
    remove.type = "button";
    remove.className = "saved-date-remove";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Remove ${date.title} from our plan`);
    remove.addEventListener("click", () => {
      savedDateTitles = savedDateTitles.filter((savedTitle) => savedTitle !== title);
      storage.set("anny-date-plan", savedDateTitles);
      renderSavedDates();
      renderDate(currentDateIndex);
      showToast("Removed from our little plan.");
    });

    item.append(emoji, label, remove);
    savedDatesList.appendChild(item);
  });
}

function moodPool() {
  return activeMood === "any" ? dateIdeas : dateIdeas.filter((date) => date.mood === activeMood);
}

function startDateSpin() {
  if (isSpinning) return;

  isSpinning = true;
  const pool = moodPool();
  spinDateBtn?.setAttribute("disabled", "");
  if (spinDateText) spinDateText.textContent = "consulting the stars…";
  dateTicketEl?.classList.add("is-spinning");
  if (dateWhisperEl) dateWhisperEl.textContent = "consulting the universe… one sec…";

  let ticks = 0;
  spinTimer = window.setInterval(() => {
    const pick = randomFrom(pool);
    renderDate(dateIdeas.indexOf(pick));
    ticks += 1;
    if (ticks >= 10) {
      window.clearInterval(spinTimer);
      spinTimer = null;
      finishDateSpin(pool);
    }
  }, 85);
}

function finishDateSpin(pool) {
  let finalPick = randomFrom(pool);
  if (pool.length > 1 && dateIdeas.indexOf(finalPick) === currentDateIndex) {
    const alternatives = pool.filter((date) => dateIdeas.indexOf(date) !== currentDateIndex);
    finalPick = randomFrom(alternatives);
  }

  renderDate(dateIdeas.indexOf(finalPick));
  dateTicketEl?.classList.remove("is-spinning");
  spinDateBtn?.removeAttribute("disabled");
  if (spinDateText) spinDateText.textContent = "spin again, i’m flexible";
  if (dateWhisperEl) {
    dateWhisperEl.textContent = randomFrom([
      "the universe has spoken. clear your schedule.",
      "this one’s happening. i’m already excited.",
      "objectively a great idea. no notes.",
      "put it in the calendar. i’ll bring the snacks.",
      "the machine has taste. trust it."
    ]);
  }

  burstAt(spinDateBtn, 18);
  if (!reduceMotion) {
    dateTicketEl?.animate(
      [
        { transform: "rotate(0deg) scale(1)" },
        { transform: "rotate(-1deg) scale(1.01)" },
        { transform: "rotate(0deg) scale(1)" }
      ],
      { duration: 450, easing: "ease-out" }
    );
  }

  isSpinning = false;
}

spinDateBtn?.addEventListener("click", startDateSpin);

moodChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    if (isSpinning) return;
    activeMood = chip.dataset.mood || "any";
    moodChips.forEach((moodChip) => {
      const isActive = moodChip === chip;
      moodChip.classList.toggle("is-active", isActive);
      moodChip.setAttribute("aria-pressed", String(isActive));
    });

    const pool = moodPool();
    const pick = randomFrom(pool);
    renderDate(dateIdeas.indexOf(pick));
    if (dateWhisperEl) {
      const moodMessages = {
        any: "any mood, any day. i’m easy to convince.",
        cozy: "cozy it is. spin when you’re ready.",
        silly: "chaos mode selected. excellent choice.",
        outside: "fresh air and you. perfect combination.",
        "late-night": "the night is ours. spin it."
      };
      dateWhisperEl.textContent = moodMessages[activeMood] || "spin when you’re ready.";
    }
  });
});

saveDateBtn?.addEventListener("click", () => {
  if (isSpinning) return;
  const title = dateIdeas[currentDateIndex].title;

  if (savedDateTitles.includes(title)) {
    savedDateTitles = savedDateTitles.filter((savedTitle) => savedTitle !== title);
    showToast("Okay, un-saved. I’ll pretend I’m not disappointed.");
  } else {
    savedDateTitles = [...savedDateTitles, title];
    showToast("Saved to our little plan. It’s basically a promise now.");
    burstAt(saveDateBtn, 12);
  }

  storage.set("anny-date-plan", savedDateTitles);
  renderSavedDates();
  renderDate(currentDateIndex);
});

renderDate(0);
renderSavedDates();

/* ------------------------------------------------------------------
   11. The very important question
   ------------------------------------------------------------------ */

const dodgeBtn = $("#dodgeBtn");
const yesBtn = $("#yesBtn");
const askActions = $("#askActions");
const askResult = $("#askResult");
const askFootnote = $(".ask-footnote");

const dodgeLabels = [
  "are you sure?",
  "hmm, suspicious…",
  "this button is scared",
  "nice try, angel",
  "the no button is broken",
  "you’re really thinking about this?",
  "okay, the yes is right there →"
];

let dodgeCount = 0;
let saidYes = false;

function moveDodgeButton() {
  if (!dodgeBtn || saidYes) return;

  dodgeCount += 1;
  const dx = (Math.random() > 0.5 ? 1 : -1) * (26 + Math.random() * 36);
  const dy = Math.random() * 28 - 14;
  const scale = Math.max(0.64, 1 - dodgeCount * 0.045);

  dodgeBtn.style.setProperty("--dx", `${dx}px`);
  dodgeBtn.style.setProperty("--dy", `${dy}px`);
  dodgeBtn.style.setProperty("--s", scale.toFixed(2));
  dodgeBtn.textContent = dodgeLabels[Math.min(dodgeCount - 1, dodgeLabels.length - 1)];

  if (dodgeCount >= 7) {
    if (askFootnote) askFootnote.textContent = "p.s. the “no” button has officially given up. the yes button is right there.";
  }
}

dodgeBtn?.addEventListener("click", () => {
  moveDodgeButton();
  burstAt(dodgeBtn, 5);
});

yesBtn?.addEventListener("click", () => {
  if (saidYes) return;
  saidYes = true;

  if (askActions) askActions.hidden = true;
  if (askResult) askResult.hidden = false;
  if (askFootnote) askFootnote.textContent = "p.s. you can pick the date. i’m serious.";

  burstAt(yesBtn, 24);
  celebrate();

  if (askResult) {
    window.setTimeout(() => {
      askResult.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    }, 300);
  }
});

/* ------------------------------------------------------------------
   12. Footer year
   ------------------------------------------------------------------ */

const yearEl = $("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
