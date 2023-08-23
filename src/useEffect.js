import { useEffect, useState } from "react";

const UseEffect = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  const sayHello = () => console.log("Hello");
  useEffect(sayHello, [number]);
  //useEffect는 componentDidMount 역할을 하기 때문에 첫 render가 끝나고 실행된다.
  //또 useEffect는 componentDidUpdate 역할을 하기 때문에 매 event 발생시 실행된다.
  //그렇기 때문에 첫 render와 아래 button이 눌릴 때 마다 sayHello함수가 실행된다.
  //useEffect의 첫번째 파라미터는 effect에 해당하는 함수이고
  //두번째 파라미터는 해당 함수가 어떤 것에 의존하여 실행될지에 해당하는 의존성이다.
  //의존성에 빈 배열을 전달하면 component가 mount 됐을 때만 해당 effect가 실행되고
  //위와 같이 number라는 의존성을 부여하면 첫 component가 mount 됐을 때랑
  //number가 바뀔 때만 해당 effect가 실행된다.
  //useEffect에 return이 달려있다면 그 return은 component가 unmount될 때 실행된다.

  return (
    <div>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>{" "}
    </div>
  );
};

export default UseEffect;
