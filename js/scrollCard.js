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

    let translateY;
    let rotateY;
    let rotateX;
    let rotateZ;
    let scale;
    let right;
    let opacity;

    if (window.matchMedia("(min-width: 80rem)").matches) {
      translateY = -110 + 70 * scrollPercent; // -110% → -40%
      rotateY = 10 + -20 * scrollPercent; // 10° → -10°
      rotateX = -10 + 20 * scrollPercent; // -10° → 10°
      rotateZ = 10 + -20 * scrollPercent; // 10° → -10°
      scale = 1 + 0.08 * scrollPercent; // 1 → 1.08
      right = 10 + 45 * scrollPercent; // 10rem → 55rem (se for usar via JS)
    }else if (window.matchMedia("(max-width: 37.5rem)").matches) {
      translateY = -110 + 70 * scrollPercent; // -110% → -40%
      rotateY = 10 + -20 * scrollPercent; // 10° → -10°
      rotateX = -10 + 20 * scrollPercent; // -10° → 10°
      rotateZ = 10 + -20 * scrollPercent; // 10° → -10°
      scale = 1 + 0.08 * scrollPercent; // 1 → 1.08
      right = 10 + 2 * scrollPercent; // 10rem → 55rem (se for usar via JS)
      opacity = 1 - scrollPercent;
    } else if (window.matchMedia("(max-width: 48rem)").matches) {
      translateY = -110 + 70 * scrollPercent; // -110% → -40%
      rotateY = 10 + -20 * scrollPercent; // 10° → -10°
      rotateX = -10 + 20 * scrollPercent; // -10° → 10°
      rotateZ = 10 + -20 * scrollPercent; // 10° → -10°
      scale = 1 + -0.5 * scrollPercent; // 1 → 1.08
      right = 10 + 10 * scrollPercent; // 10rem → 55rem (se for usar via JS)
      opacity = 1
    } else if (window.matchMedia("(max-width: 64rem)").matches) {
      translateY = -110 + 70 * scrollPercent; // -110% → -40%
      rotateY = 10 + -20 * scrollPercent; // 10° → -10°
      rotateX = -10 + 20 * scrollPercent; // -10° → 10°
      rotateZ = 10 + -20 * scrollPercent; // 10° → -10°
      scale = 1 + -.03 * scrollPercent; // 1 → 1.08
      right = 10 + 17 * scrollPercent; // 10rem → 55rem (se for usar via JS)
    }
    else if (window.matchMedia("(max-width: 80rem)").matches) {
      translateY = -110 + 70 * scrollPercent; // -110% → -40%
      rotateY = 10 + -20 * scrollPercent; // 10° → -10°
      rotateX = -10 + 20 * scrollPercent; // -10° → 10°
      rotateZ = 10 + -20 * scrollPercent; // 10° → -10°
      scale = 1 + 0.08 * scrollPercent; // 1 → 1.08
      right = 10 + 25 * scrollPercent; // 10rem → 55rem (se for usar via JS)
    }

    // console.log("isFlipped: ", isFlipped);

    card.style.transform = `
      translate(0%, ${translateY}%) 
      rotateY(${rotateY}deg) 
      rotateX(${rotateX}deg) 
      rotateZ(${rotateZ}deg)
      scale(${scale})
    `;

    card.style.right = `${right}rem`;

    card.style.opacity = `${opacity}`;
  }

  window.addEventListener("scroll", function (event) {
    const alertScroll = document.querySelector(".alert-scroll");

    if (!alertScroll.classList.contains("alert-hide")) {
      alertScroll.classList.add("alert-hide");
    }

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
    });

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
