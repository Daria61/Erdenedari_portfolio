"use client";
import Spline from "@splinetool/react-spline";
import { Box } from "@mui/material";
import { useState } from "react";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Lenis from "lenis";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const lenis = new Lenis({
      duration: 1.2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const first_move = document.getElementById("first-move");
    const section = gsap.utils.toArray(".section");

    gsap.to(section, {
      xPercent: -100 * (section.length - 1),
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: first_move,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        // markers: true,
        invalidateOnRefresh: true,
      },
    });

    function changeWidth() {
      const section_two = document.getElementById("section-two");
      if (section_two) {
        console.log("====================================");
        console.log("section_two");
        console.log("====================================");
        section_two.style.width = "500px";
      }
    }

    document.addEventListener("scroll", function () {
      console.log("====================================");
      console.log("loggg scroll");
      console.log("====================================");
      requestAnimationFrame(changeWidth);
    });

    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 100);
    // });

    // gsap.ticker.lagSmoothing(0);

    // const section = gsap.utils.toArray(".section");

    // const observerOptions = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.1,
    // };

    // const observerCallback = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       const;
    //     }
    //   });
    // };
  });

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // direction: "column",
          height: height,
          width: width,
          position: "fixed",
        }}
      >
        <Box
          className="section-two section_background section"
          sx={{ backgroundColor: "#B38ED4", width: 0 }}
        ></Box>

        <Box
          sx={{
            width: width,
            height: height,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <Spline scene="https://prod.spline.design/qHRQOYPRxiwNXxBc/scene.splinecode" />
          </Box>
        </Box>

        {/* <Box
          className="section-three section right"
          sx={{ backgroundColor: "#B38ED4", width: width }}
        ></Box> */}
      </Box>
      <Box className="page">
        <Box>
          <Box
            sx={{
              zIndex: 2,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          >
            <Section1 />
          </Box>
          <div className="first-move section-margin"></div>
          <Box
            sx={{
              zIndex: 2,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          >
            <Section2 />
          </Box>
          <div className="second-move section-margin"></div>
          <Box
            sx={{
              zIndex: 2,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          >
            <Section3 />
          </Box>
          <div className="third-move section-margin"></div>
          <Box
            sx={{
              zIndex: 2,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          >
            <Section4 />
          </Box>
          <footer className="footer">
            <span className="footer__copyright">
              Copyright &copy; 2024 - Erdenedari Ch
            </span>
          </footer>
        </Box>
      </Box>
    </Box>
  );
}
