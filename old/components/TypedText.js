import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 1500,
      loop: false,
      showCursor: true,
      cursorChar: '|',
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef} className="text-shiny-green text-2xl font-bold font-mono" />;
};

export default TypedText;
