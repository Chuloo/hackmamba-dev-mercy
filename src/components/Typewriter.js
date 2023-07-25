import React, { useEffect, useState, useMemo } from "react";

export default function Typewriter({ value }) {
  const [text, setText] = useState("");
  const v = useMemo(() => value.split("").reverse(), []);

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      const last = v.pop();
      if (last) setText(`${text}${last}`);
      clearInterval(typewriterInterval);
    }, 100);
  }, [text]);

  return (
    <>
      <span className="absolute top-0 left-[0.906rem]">{text}</span>

      <span className="text-transparent">{value}</span>
    </>
  );
}
