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
