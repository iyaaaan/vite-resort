import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function smoother(w, c) {
  onMounted(() => {
    ScrollSmoother.create({
      wrapper: w,
      content: c,
    });
  });
}
