import React, { useEffect, useState } from "react";

const GifIntro = ({ children }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 8000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return children;

  return (
    <div className="intro-wrapper">
      <div className="intro-overlay"></div>

      <img
        className="intro-gif"
        src="https://i.pinimg.com/originals/78/1f/50/781f50512d9292fe1d421c76e15e2125.gif"
        alt="Intro"
      />

      <div className="scanlines"></div>
    </div>
  );
};

export default GifIntro;
