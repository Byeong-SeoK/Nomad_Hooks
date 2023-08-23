import { useState } from "react";

function UseState() {
  const [item, setItem] = useState(1);
  //만약 item만 사용하고 싶으면 아래와 같이 작성해야한다.
  //const item = useState(1)[0];
  //마찬가지로 setItem만 사용하고 싶으면
  //const setItem = useState(1)[1]; 이 된다.

  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div>
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}

export default UseState;
