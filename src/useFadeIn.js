import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      //duration과 delay를 넣어서 delay시간 이후로 duration시간 동안 천천히 나타나게 한다.

      current.style.opacity = 1; //투명도를 1로 하여 초기에는 불투명하게 한다.
    }
  }, []);

  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  return { ref: element, style: { opacity: 0 } };
  //마치 props를 전달하는 것처럼 객체를 반환한다.
};

const UseFadeIn = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);

  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalala</p>
    </div>
  );
};

export default UseFadeIn;
