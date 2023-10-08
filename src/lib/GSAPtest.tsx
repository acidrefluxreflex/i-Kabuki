"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all"; // Import necessary GSAP modules

// Ensure that GSAP plugins are registered
gsap.registerPlugin(SplitText);

const MyComponent: React.FC = () => {
  useEffect(() => {
    console.clear();

    const mySplitText = new SplitText(".txt");

    let gtl = gsap.timeline({ yoyo: true, repeat: -1, delay: 0 });

    function animateText() {
      let tl = gsap.timeline().to(".char", {
        fontWeight: 100,
        fontStretch: "10%",
        ease: "sine.inOut",
        duration: 0.8,
        stagger: {
          each: 0.4,
          yoyo: true,
          repeat: -1,
        },
      });

      return tl;
    }

    gsap.to(".container", {
      autoAlpha: 1,
      duration: 4,
      ease: "none",
    });

    gtl.add(animateText()).seek(6).play();
  }, []); // Run the effect only once on mount

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1 className="txt">ETC</h1>
          <h1 className="txt">ETC</h1>
          <h1 className="txt">ETC</h1>
          <h1 className="txt">ETC</h1>
        </div>
      </div>

      <div className="collection"></div>
    </>
  );
};

export default MyComponent;
