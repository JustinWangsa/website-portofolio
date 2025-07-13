
document.addEventListener('DOMContentLoaded', function () {
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
});

