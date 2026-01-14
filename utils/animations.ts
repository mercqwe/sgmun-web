import gsap from "gsap";

export const animatePageIn = () => {
  const banner = document.getElementById("banner");
  const top = document.getElementById("panel-top");
  const bottom = document.getElementById("panel-bottom");

  if (!banner || !top || !bottom) return;

  const tl = gsap.timeline();

  // Initial state
  tl.set([top, bottom], { y: 0 })
    .set(banner, { opacity: 1 })

    // Hold banner (let user read / feel)
    .to({}, { duration: 0.8 })

    // Banner fades out
    .to(banner, {
      opacity: 0,
      duration: 0.4,
      ease: "power1.out",
      onComplete: () => {
        banner.style.display = "none";
      },
    })

    // Panels slide away
    .to(top, {
      y: "-100%",
      duration: 0.7,
      ease: "power3.inOut",
    })
    .to(
      bottom,
      {
        y: "100%",
        duration: 0.7,
        ease: "power3.inOut",
      },
      "<"
    )

    // Remove panels from flow
    .set([top, bottom], {
      display: "none",
    });
};
