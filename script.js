// Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    setTimeout(() => {
      ring.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    }, 80);
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 100);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Nav on scroll
  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.padding = window.scrollY > 60 ? '1rem 4rem' : '1.8rem 4rem';
  });