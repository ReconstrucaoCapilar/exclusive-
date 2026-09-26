
(() => {
  const section = document.getElementById('servicos');
  if (!section) return;
  const activate = () => section.classList.add('services-v10-in');
  if (!('IntersectionObserver' in window)) { activate(); return; }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activate();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
  io.observe(section);
})();
