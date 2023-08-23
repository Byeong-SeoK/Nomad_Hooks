import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  //useNetwork는 navigator가 online 또는 offline으로 가는 것을 막아준다.

  const [status, setStatus] = useState(navigator.onLine);
  //navigator을 online으로 초기 세팅을 하는 것으로 현재 웹사이트가 온라인인지 아닌지 알 수 있다.
  //즉, navigator가 online이면 현재 웹사이트의 상태를 status에게 넘겨준다.

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
      //onChange라는 이름으로 받은 파라미터 함수에 navigator.onLine을 넘긴다.
    }

    setStatus(navigator.onLine);
    //만약 현재 상태가 online이면 handleChange에 의해 offline이 되고
    //만약 현재 상태가 offline이면 handleChange에 의해 online이 된다.
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

const UseNetwork = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We are online" : "We are offline");
  };

  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default UseNetwork;
