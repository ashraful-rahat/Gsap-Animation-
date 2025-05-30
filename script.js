function navAnimation() {
  const nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "20vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,

      stagger: {
        amount: 0.6,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 25,

      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.6,
    });
  });
}
// navAnimation();
