"use client";

import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const SplineModel = ({
  width,
  splineRef,
  setLoading,
}: {
  width: number;
  splineRef: React.RefObject<HTMLDivElement>;
  setLoading: (loading: boolean) => void;
}) => {
  const [dimensions, setDimensions] = useState({
    width: width,
    height: typeof window !== "undefined" ? window.innerHeight : 1000,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Define breakpoints
      const isMobile = windowWidth < 768;
      const isTablet = windowWidth >= 768 && windowWidth < 1024;

      let modelWidth: number;
      let modelHeight: number;

      if (isMobile) {
        // Mobile: full width, adjusted height
        modelWidth = windowWidth;
        modelHeight = windowHeight;
      } else if (isTablet) {
        // Tablet: full width, full height
        modelWidth = windowWidth;
        modelHeight = windowHeight;
      } else {
        // Desktop: full width, full height
        modelWidth = windowWidth;
        modelHeight = windowHeight;
      }

      setDimensions({ width: modelWidth, height: modelHeight });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  return (
    <div
      ref={splineRef}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        pointerEvents: "auto",
        zIndex: 0,
      }}
      className="model"
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: dimensions.width,
          maxHeight: dimensions.height,
          pointerEvents: "auto",
        }}
      >
        <Spline
          scene="https://prod.spline.design/qHRQOYPRxiwNXxBc/scene.splinecode"
          onLoad={(spline) => {
            spline.setZoom(0.25);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
          }}
        />
      </div>
    </div>
  );
};

export default SplineModel;
