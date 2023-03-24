import { onMounted } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import gsap from "gsap";

export function fadeDropDown(el) {
  onMounted(() => {
    gsap.from(el.value, {
      duration: 1,
      autoAlpha: 0,
      ease: "power2.out",
    });
  });

  onBeforeRouteLeave((to, from, next) => {
    gsap.to(el.value, {
      duration: 1,
      y: -100,
      autoAlpha: 0,
      ease: "power2.out",
      onComplete: () => {
        next();
      },
    });
  });
}
