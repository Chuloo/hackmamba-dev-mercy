import React, { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { gsap } from "gsap";

export default function FlipLogo() {
  const flipDown = useRef();
  const flipDownReverse = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = currentIndex + 1 >= Logo.length ? 0 : currentIndex + 1;

  const company = {
    currentCompany: Logo[currentIndex],
    nextCompany: Logo[nextIndex],
  };

  function resetUI() {
    gsap.set(flipDown.current, { rotateX: 0 });
    gsap.set(flipDownReverse.current, { rotateX: 0, zIndex: 1 });
  }

  function goToNext() {
    resetUI();

    gsap.to(flipDown.current, { rotateX: 180, transformOrigin: "bottom" });
    gsap.to(flipDownReverse.current, {
      rotateX: 180,
      transformOrigin: "bottom",
      zIndex: 30,
      onComplete: () => setCurrentIndex(nextIndex),
    });
  }

  useEffect(() => resetUI(), [currentIndex]);

  useEffect(() => {
    const interv = setInterval(() => goToNext(), 2000);
    return () => clearInterval(interv);
  }, [nextIndex]);

  return (
    <>
      <div className="flip-logo-container">
        <div className="flip-logo-container__top">
          <span className="flip-span">
            <img src={company.nextCompany} alt="logo" className="flip-span_img" />
          </span>

          <span ref={flipDownReverse} className="flip-span">
            <img src={company.nextCompany} alt="logo" className="flip-span_img" />
          </span>

          <span ref={flipDown} className="flip-span">
            <img src={company.currentCompany} alt="logo" className="flip-span_img" />
          </span>
        </div>
        <div className="flip-logo-container__bottom">
          <span className="flip-span">
            <img src={company.currentCompany} alt="logo" className="flip-span_img" />
          </span>
        </div>
      </div>
    </>
  );
}
