import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  //state는 x:0, y:0이라는 값을 가지고 있는 객체로 초기화된다.

  const onScroll = () => {
    //console.log("y", window.scrollY, "x", window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
    //이 window.scrollX, window.scrollY를 통해서 scroll의 x,y 위치 값을 알 수 있다.
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return state;
};

const UseScroll = () => {
  const { y } = useScroll();

  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ podition: "fixed", color: y > 10 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default UseScroll;
