import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

export function initGsapLocoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

export function fadeToTop(el) {
  let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

  gsap.from(el, {
    y: 100,
    autoAlpha: 0,
    "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    stagger: 0.2,
  });

  return tl;

  /*  gsap.registerEffect({
    name: "fadex",
    defaults: { duration: 2 }, //defaults get applied to the "config" object passed to the effect below
    effect: (el, config) => {
      return gsap.to(el, { duration: config.duration, x: 500 });
    },
  }); */
}

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

export function fadeToRight(el) {
  onMounted(() => {
    let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });

    tl.from(el, {
      autoAlpha: 0,
      "clip-path": "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      stagger: stgr,
    });
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
