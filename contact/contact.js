
gsap.from('.first', { delay: 1, duration: 2, y: 400, ease: "power2.InOut", opacity: 0 });
gsap.from('.fourth', { delay: 1, duration: 2, y: -400, ease: "power2.InOut", opacity: 0 });
gsap.from("#tel", { rotation: 360, x: -400, duration: 2, delay: 2.5 });
gsap.from("#mail", { rotation: 360, x: 400, duration: 2, delay: 2.5 });

let move = 20;

gsap.to(".first", {ease: "bounce", duration: 2, delay: 1.5, stagger:0.3, y: function (i) {
        if (i % 2 === 1) return move;
        else return -move;
}})
