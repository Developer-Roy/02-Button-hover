const titleBtn = document.querySelector(".title");

titleBtn.addEventLister("click", () => {
    gsap.fromTo(".title", {
        scale:1,
        ease: "power3.out"
    },
{
    scale: 0.9,
    ease:"power3.out"
}
)
})