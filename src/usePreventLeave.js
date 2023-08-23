const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
    //이 event.returnValue는 beforeunload에서 요구하기 때문에 존재하는 것이다.
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  //이 beforeunload는 window가 닫하기 전(페이지를 나가기 전)에 function이 실행되는 것을 허락한다.
  //그래서 두번째 파라미터로 들어온 listener함수가 페이지를 나가려할 때 실행되고
  //저 event.returnValue에 특정 값이 담기기 때문에 페이지를 끄려고 할 때
  //현재 페이지에서 나가면 변경사항이 저장되지 않는다라는 alert가 뜬다.

  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const UsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

export default UsePreventLeave;
