import gsap from "gsap";

export const Gsaploader = () => {
    return gsap.to(".login-screen", {
      y: '-100%', // Move the element upwards
        duration: 1, // 1 second
        ease: 'power2.inOut', // Smooth ease effect
    });
};
