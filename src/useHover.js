import { useEffect, useRef } from "react";

const useHover = (onHover) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);

  if (typeof onHover !== "function") {
    return;
  }

  return element;
};

const UseHover = () => {
  const mouseHover = () => console.log("Mouse entered");
  const hover = useHover(mouseHover);
  return (
    <div>
      <h1 ref={hover}>Hi</h1>
    </div>
  );
};

export default UseHover;
