/* =====================================================
   🎀 BIRTHDAY 23 · LÓGICA
   - Sobre que se abre con click
   - Carousel de fotos
   - Pétalos / corazones flotantes
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initEnvelope();
  initCarousel();
});

/* ============== SOBRE ============== */
function initEnvelope() {
  const envelope = document.getElementById('envelope');
  const screen   = document.getElementById('envelope-screen');
  const site     = document.getElementById('site');
  if (!envelope) return;

  envelope.addEventListener('click', () => {
    if (envelope.classList.contains('open')) return;
    envelope.classList.add('open');

    // Después de la animación del sobre, mostramos la web
    setTimeout(() => {
      screen.classList.add('fade-out');
      site.classList.remove('hidden');
      // Música opcional
      const audio = document.getElementById('bgMusic');
      if (audio) audio.play().catch(() => {});
      // Hacer scroll suave al inicio
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1700);

    // Quitar sobre del DOM tras transición
    setTimeout(() => {
      if (screen) screen.remove();
    }, 2800);
  });
}

/* ============== CAROUSEL ============== */
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsC = document.getElementById('carouselDots');
  if (!track) return;

  const slides = Array.from(track.children);
  const prev = document.querySelector('.car-btn.prev');
  const next = document.querySelector('.car-btn.next');
  let index = 0;
  let timer = null;

  // Crear puntitos
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('aria-label', `Ir a foto ${i + 1}`);
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => goTo(i));
    dotsC.appendChild(b);
  });

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = '';
    slides.forEach((s, k) => {
      s.style.transform = `translateX(-${index * 100}%)`;
    });
    dotsC.querySelectorAll('button').forEach((b, k) =>
      b.classList.toggle('active', k === index)
    );
    restartAuto();
  }

  prev?.addEventListener('click', () => goTo(index - 1));
  next?.addEventListener('click', () => goTo(index + 1));

  function startAuto() {
    timer = setInterval(() => goTo(index + 1), 5000);
  }
  function restartAuto() {
    clearInterval(timer);
    startAuto();
  }
  startAuto();

  // Soporte swipe
  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
  });
}

/* ============== PÉTALOS / CORAZONES ============== */
function initPetals() {
  const container = document.querySelector('.petals');
  if (!container) return;

  const symbols = ['🌸', '🌷', '💗', '✿', '❀', '🌺', '✦'];
  const total = 22;

  for (let i = 0; i < total; i++) {
    const s = document.createElement('span');
    s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.fontSize = (12 + Math.random() * 18) + 'px';
    s.style.animationDuration = (8 + Math.random() * 10) + 's';
    s.style.animationDelay = (Math.random() * 12) + 's';
    s.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);
    container.appendChild(s);
  }
}
