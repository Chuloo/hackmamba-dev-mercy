import React, { useEffect, useState } from "react";

function useIO({ ref }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
  }, []);
  return {
    isVisible,
  };
}

export default useIO;
