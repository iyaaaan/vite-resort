import { onMounted } from "vue";
import gsap from "gsap";

export function fadeToTop(el, stgr, dly, pos) {
  onMounted(() => {
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    tl.from(
      el,
      {
        y: 100,
        autoAlpha: 0,
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        stagger: stgr,
        delay: dly,
      },
      pos
    );
  });
}

/* 
export function fadeToBottom(el, stgr, dly, pos) {
  onMounted(() => {
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    tl.from(
      el,
      {
        y: -100,
        autoAlpha: 0,
        "clip-path": "polygon(0 0, 100% 0, 100% 0, 0 0)",
        stagger: stgr,
        delay: dly,
      },
      pos
    );
  });
}

export function fadeToRight(el, axis, stgr, dly, pos) {
  onMounted(() => {
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    tl.from(
      el,
      {
        x: axis,
        autoAlpha: 0,
        "clip-path": "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        stagger: stgr,
        delay: dly,
      },
      pos
    );
  });
}

export function fadeToLeft(el, axis, stgr, dly, pos) {
  onMounted(() => {
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    tl.from(
      el,
      {
        x: axis,
        autoAlpha: 0,
        "clip-path": "polygon(100% 0%, 100% 0, 100% 100%, 100% 100%)",
        stagger: stgr,
        delay: dly,
      },
      pos
    );
  });
}

export function scaleUp(el, stgr, dly, pos) {
  onMounted(() => {
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    tl.from(
      el,
      {
        autoAlpha: 0,
        "clip-path": "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        stagger: stgr,
        delay: dly,
      },
      pos
    );
  });
}

export function scaleDown(el, stgr, dly, pos) {
  onMounted(() => {
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    tl.to(
      el,
      {
        autoAlpha: 0,
        "clip-path": "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        stagger: stgr,
        delay: dly,
      },
      pos
    );
  });
}
 */
