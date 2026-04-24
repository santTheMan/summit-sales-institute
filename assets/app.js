// Summit Sales Institute — micro interactions

// Sticky nav on scroll
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 20) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal on scroll
const revealTargets = document.querySelectorAll(
  '.section-head, .pillar, .timeline__step, .event, .tier, .quote, .yt, .cta__inner > *'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('is-visible'), i * 40);
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

revealTargets.forEach(el => io.observe(el));

// Timeline bar fill when visible
const timelineBar = document.querySelector('.timeline__bar');
if (timelineBar) {
  const tlIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timelineBar.classList.add('is-visible');
        tlIo.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  tlIo.observe(timelineBar);
}

// Stat count-up
const stats = document.querySelectorAll('.stat__num[data-count]');
const countUp = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1600;
  const start = performance.now();
  const suffix = el.textContent.replace(/[\d]/g, '').trim() || '';
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const statIo = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      statIo.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
stats.forEach(s => statIo.observe(s));

// Smooth scroll with nav offset
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});
