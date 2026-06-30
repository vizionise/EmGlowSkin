// Mobile nav
const toggle = document.querySelector('.menu-toggle');
if (toggle) toggle.addEventListener('click', () => document.querySelector('.nav').classList.toggle('open'));

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => q.closest('.faq-item').classList.toggle('open'));
});

// Cookie banner
const cookie = document.querySelector('.cookie');
if (cookie) {
  if (localStorage.getItem('cookieChoice')) cookie.classList.add('hide');
  cookie.querySelectorAll('button').forEach(b =>
    b.addEventListener('click', () => {
      localStorage.setItem('cookieChoice', b.dataset.choice);
      cookie.classList.add('hide');
    }));
}

// Reviews carousel
(function () {
  const section = document.querySelector('[data-reviews]');
  if (!section) return;

  const viewport = section.querySelector('.review-viewport');
  const track = section.querySelector('.review-track');
  const cards = [...section.querySelectorAll('.review-card')];
  const prev = section.querySelector('.review-prev');
  const next = section.querySelector('.review-next');
  const dotsWrap = section.querySelector('.review-dots');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let timer;

  function perPage() {
    if (window.matchMedia('(max-width: 880px)').matches) return 1;
    if (window.matchMedia('(max-width: 1080px)').matches) return 2;
    return 3;
  }

  function maxIndex() {
    return Math.max(cards.length - perPage(), 0);
  }

  function cardStep() {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return cards[0].getBoundingClientRect().width + gap;
  }

  function renderDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i <= maxIndex(); i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Show review set ' + (i + 1));
      dot.addEventListener('click', () => {
        go(i);
        play();
      });
      dotsWrap.appendChild(dot);
    }
  }

  function updateDots() {
    [...dotsWrap.children].forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function go(nextIndex, smooth = true) {
    const max = maxIndex();
    if (nextIndex > max) index = 0;
    else if (nextIndex < 0) index = max;
    else index = nextIndex;

    viewport.scrollTo({
      left: cardStep() * index,
      behavior: smooth && !reduceMotion.matches ? 'smooth' : 'auto',
    });
    updateDots();
  }

  function stop() {
    clearInterval(timer);
  }

  function play() {
    stop();
    if (!reduceMotion.matches) timer = setInterval(() => go(index + 1), 5500);
  }

  prev.addEventListener('click', () => {
    go(index - 1);
    play();
  });
  next.addEventListener('click', () => {
    go(index + 1);
    play();
  });
  section.addEventListener('mouseenter', stop);
  section.addEventListener('mouseleave', play);
  section.addEventListener('focusin', stop);
  section.addEventListener('focusout', play);
  window.addEventListener('resize', () => {
    const oldMax = maxIndex();
    renderDots();
    if (index > oldMax) index = oldMax;
    go(index, false);
  });

  renderDots();
  go(0, false);
  play();
})();

// Gallery carousel
(function () {
  const car = document.getElementById('gallery');
  if (!car) return;
  const track = car.querySelector('.car-track');
  const slides = [...car.querySelectorAll('.car-slide img')];
  const thumbsWrap = document.getElementById('gallery-thumbs');
  let i = 0;

  slides.forEach((img, idx) => {
    const b = document.createElement('button');
    const t = document.createElement('img');
    t.src = img.getAttribute('src');
    t.alt = 'Thumbnail ' + (idx + 1);
    t.loading = 'lazy';
    b.appendChild(t);
    b.addEventListener('click', () => go(idx));
    thumbsWrap.appendChild(b);
  });
  const thumbs = [...thumbsWrap.children];

  let timer;
  function play() { clearInterval(timer); timer = setInterval(() => go(i + 1), 10000); }

  function go(n) {
    i = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${i * 100}%)`;
    thumbs.forEach((t, idx) => t.classList.toggle('active', idx === i));
  }
  car.querySelector('.prev').addEventListener('click', () => { go(i - 1); play(); });
  car.querySelector('.next').addEventListener('click', () => { go(i + 1); play(); });
  thumbs.forEach((t, idx) => t.addEventListener('click', play));

  // pause on hover, resume on leave
  car.addEventListener('mouseenter', () => clearInterval(timer));
  car.addEventListener('mouseleave', play);

  go(0);
  play(); // auto-advance every 10 seconds
})();

// Newsletter / contact form (demo only)
document.querySelectorAll('form[data-demo]').forEach(f =>
  f.addEventListener('submit', e => { e.preventDefault(); alert('Thanks! This is a demo form.'); f.reset(); }));
