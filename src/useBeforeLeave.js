import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    //clientY는 event 객체에 들어있는 하나의 key로 현재 마우스 위치의 y축 값을 가지고 있다.
    if (clientY <= 0) {
      //이 clientY를 통해서 마우스의 위치가 0보다 작아질 때
      //즉, 화면을 넘어 위의 탭바로 이동하게 될 때 아래 함수가 실행되게 한다.
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);

    return () => document.removeEventListener("mouseleave", handle);
  }, []);

  if (typeof onBefore !== "function") {
    return;
  }
};

const UseBeforeLeave = () => {
  const begForLife = () => console.log("Please don't leave");
  useBeforeLeave(begForLife);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default UseBeforeLeave;
