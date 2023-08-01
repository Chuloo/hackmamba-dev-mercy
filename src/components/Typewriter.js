import React, { useEffect, useState, useMemo, useRef } from "react";
import useIO from "../hooks/useIO";

export default function Typewriter({ value }) {
  const [text, setText] = useState("");
  const v = useMemo(() => value.split("").reverse(), []);
  const typedRef = useRef();
  const { isVisible } = useIO({ ref: typedRef });

  useEffect(() => {
    if (isVisible) {
      const typewriterInterval = setInterval(() => {
        const last = v.pop();
        if (last) setText(`${text}${last}`);
        clearInterval(typewriterInterval);
      }, 100);
    }
  }, [text, isVisible]);

  return (
    <>
      <span
        className="absolute top-0 h-full flex items-center left-[0.906rem] "
        ref={typedRef}
      >
        {text}
      </span>

      <span className="text-transparent">{value}</span>
    </>
  );
}
