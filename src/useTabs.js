import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  //react의 hook은 항상 함수의 최상단에서 호출해야 한다.
  //그렇기 때문에 조건문 내부나 밑에서 호출하면 안된다.

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function UseTabs() {
  const { currentItem, changeItem } = useTabs(0, content);
  //UseTabs는 객체를 반환하기 때문에 이를 받는 것도 객체여야 한다.
  //이때 여기서 currentItem과 changeItem 이라는 이름을 바꾸면 안되는데
  //그 이유는 파이썬의 사전에서 특정 key에 대한 값을 꺼낼 때 반드시 해당 key 이름을 사용해야한다.
  //마찬가지로 지금 useTabs의 return값이 key:value로 이루어진 객체에 해당하고
  //그 객체의 value에 접근하려면 그 value에 매핑된 key 이름을 사용해야한다.
  //즉, 구조분해할당 규칙에 의해 저 currentItem과 changeItem이라는 이름을 사용해야한다.

  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default UseTabs;
