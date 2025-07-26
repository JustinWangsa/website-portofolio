document.addEventListener('DOMContentLoaded', function () {
  // Navbar 
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-200px"; 
    } else {
      navbar.style.top = "2rem"; 
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // scroll-in animation
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  const scrollAnimatedSections = document.querySelectorAll('.project-wrapper, .skills-wrapper');
  scrollAnimatedSections.forEach(section => observer.observe(section));
});
