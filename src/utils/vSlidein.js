const DISTANCE = 100;
const DURATION = 1000;
const map = new WeakMap()
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const animation = map.get(entry.target);
      animation && animation.play();
      ob.unobserve(entry.target);
    } 
  } 
});
const isBlowViewPort = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top > window.innerHeight;
}
export default {
  mounted(el) {
    if(!isBlowViewPort(el)) {
      return;
    }
    const animation = el.animate(
      [{ transform: `translateY(${DISTANCE}px)`,opacity:0.5 }, { transform: "translateY(0)",opacity:1 }],
      { duration: DURATION, easing: "ease-out",fill:"forwards" }
    );
    animation.pause();
    map.set(el,animation);
    ob.observe(el);
  },
  unmounted(el) {
    ob.unobserve(el);
  }
};
