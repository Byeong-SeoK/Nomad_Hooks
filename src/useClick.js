import { useRef, useEffect } from "react";

const useClick = (onclick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onclick);
      //useRef를 통해서 지금 h1태그를 다룰 수 있게 되었다.
      //그리고 이 h1에는 지금 ref props가 존재하기 때문에
      //해당 h1태그에 eventListener를 추가할 수 있게 됐다.
      //즉, useRef를 통해서 우리는 특정 컴포넌트에만 특정 이벤트를 추가할 수 있다.
    }

    return () => {
      //이 return에 들어있는 함수는 컴포넌트가 unMount될 때 실행된다.
      //지금 상황에서 이 return함수를 실행해야하는 이유는
      //위에서 우리가 넣은 eventListener는 근본적으로 h1태그에 없던 것이다.
      //그렇기 때문에 해당 페이지에 나가 다른 곳으로 갈 때
      //이 태그에 있는 eventListener가 다른 곳에도 영향을 주면 안되므로
      //페이지에서 나갈 떄(컴포넌트가 unMount될 떄) 우리가 만든 eventListener를 지운다.

      if (element.current) {
        console.log("Remove EventListener");
        element.current.removeEventListener("click", onclick);
      }
    };
  }, []);
  //이 useEffect는 별다른 의존성이 없기 때문에 우리가 추가한 eventListener는
  //첫 rendering때 만들어지고 새 rendering 없이 해당 컴포넌트가 unMount되기 전까지 유효하다.

  if (typeof onclick !== "function") {
    return;
  }

  return element;
};

const UseClick = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default UseClick;
