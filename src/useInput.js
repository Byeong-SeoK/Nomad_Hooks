import { useState } from "react";

const useInput = (initialValue, validator) => {
  // useInput은 input을 업데이트 해주는 hook이다.

  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
  //hook은 객체나 배열을 반환해야하기 때문에 value를 중괄호로 감싸야한다.
};

function UseInput() {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}

export default UseInput;
