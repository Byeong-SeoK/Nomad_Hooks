import { useState, useRef } from "react";

const UseRef = () => {
  const input = useRef();
  //reference는 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법이다.
  //즉 document.getElementById와 비슷한 역할을 한다고 볼 수 있다.
  //아래 input태그의 ref값으로 위의 input을 넣었다.
  //그래서 이제 위 input변수를 통해서 아래 input태그를 받을 수 있고
  //실제로 이 input 변수를 console.log해보면 input태그에 대한 object를 받고 있음을 알 수 있다.

  setTimeout(() => input.current.focus(), 5000);
  //위 코드를 실행해보면 5초 뒤에 input창에 focusing된다.
  //즉, useRef는 특정 컴포넌트를 꼭 집어서 사용할 수 있게 해주는 것이다.

  return (
    <div>
      <div>Hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};

export default UseRef;
