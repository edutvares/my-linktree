gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to(
  "#eu",
  {
    y: -80,
  },
  "<"
)
  .to(
    "#montanhas",
    {
      y: -50,
    },
    "<"
  )
  .to(
    "#ceu",
    {
      y: -30,
    },
    "<"
  )
  .to(
    ".text-area h1",
    {
      y: 50,
    },
    "<"
  )
  .to(
    ".text-area h2",
    {
      y: 40,
    },
    "<"
  )
  .to(
    ".text-area .social-button-area",
    {
      y: 30,
    },
    "<"
  );

ScrollTrigger.create({
  animation: tl,
  trigger: ".header",
  scrub: 1,
  start: "top top",
});
