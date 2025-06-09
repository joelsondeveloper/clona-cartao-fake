function scrollCard() {
  const card = document.querySelector(".card-2");

  let ticking = false;
  let lastScrollY = 0;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function updateTransform(scrollY) {
    
    const scrollPercent =
      clamp(
        scrollY / (document.body.scrollHeight - window.innerHeight),
        0,
        0.6
      ) / 0.6;

    const translateY = -110 + 70 * scrollPercent; // -110% → -40%
    const rotateY = 10 + -20 * scrollPercent; // 10° → -10°
    const rotateX = -10 + 20 * scrollPercent; // -10° → 10°
    const rotateZ = 10 + -20 * scrollPercent; // 10° → -10°
    const scale = 1 + 0.08 * scrollPercent; // 1 → 1.08
    const right = 10 + 35 * scrollPercent; // 10rem → 55rem (se for usar via JS)

    // console.log("isFlipped: ", isFlipped);

    card.style.transform = `
      translate(0%, ${translateY}%) 
      rotateY(${rotateY}deg) 
      rotateX(${rotateX}deg) 
      rotateZ(${rotateZ}deg)
      scale(${scale})
    `;

    card.style.right = `${right}rem`;
  }

  window.addEventListener("scroll", function (event) {
    document.getElementById("cvv").blur();
    // console.log(document.getElementById("display-cvv2"));
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateTransform(lastScrollY);
        ticking = false;
      });
    }
    ticking = true;

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    })

    observer.observe(sentinel);
  });

  function flipCard() {
    isFlipped = !isFlipped;
    card.style.transition = "transform 0.4s ease";
    updateTransform(window.scrollY);
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  }

  updateTransform(window.scrollY);
}
