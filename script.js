const revealItems = document.querySelectorAll(".hero-copy, .hero-card, .section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});
