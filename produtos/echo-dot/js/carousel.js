const carousel = document.querySelector('.amazon-carousel');
const dots = document.querySelectorAll('.dot');

carousel.addEventListener('scroll', () => {
  const scrollPosition = carousel.scrollLeft;
  const itemWidth = document.querySelector('.carousel-item').clientWidth;
  const index = Math.round(scrollPosition / itemWidth);
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
});