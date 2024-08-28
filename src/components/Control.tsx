import ScrollTrigger from "gsap-trial/ScrollTrigger";
import gsap from "gsap";
import React from "react";

export default function Control() {
  gsap.registerPlugin(ScrollTrigger);
  //   ScrollTrigger.create({
  //     trigger: "section-one",
  //     start: "top top",
  //     end: "+-300",
  //     pin: true,
  //   });
  let firstMoveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".first-move",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      // markers: true,
      invalidateOnRefresh: true,
    },
  });
  firstMoveTimeline.to(".section-one", { x: 0, y: 0, z: 0 });
}
