import defaultAxios from "axios";
import { useEffect, useState } from "react";
//Axios란 HTTP request를 만들어주는 것이다.

const useAxios = (option, axiosInstance = defaultAxios) => {
  //axios는 약간의 customization과 configuration을 허용한다.
  //예를 들어 axios는 default URL을 설정하거나 자동으로 header를 설정하는 것등을 허용한다.
  //위 코드에서 우리는 axiosInstance를 클라이언트로 부터 받아야 하는데
  //만약 이 axiosInstance를 받지 못했다면 import한 axios로 부터 default값을 받아 넣어준다.
  //option은 url이 들어있는 객체를 받는 파라미터이다.

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  //이 trigger는 API로부터 data를 다시 가져오기 위한(refetch)하기 위한 것이다.
  //즉, 아래의 useEffect가 이 trigger에 의존하게 만듦으로써
  //trigger의 값이 바뀔 때 마다 API를 다시 호출하여 data를 가져오게 한다.

  const refetech = () => {
    setState({
      ...state,
      //기존에 있는 state를 받은 다음에 아래 새로 바뀌는 것에 대해서 재지정하도록 한다.
      loading: true,
    });
    setTrigger(Date.now());
    //Date.now()를 통해서 임의의 숫자를 생성하고 그 값을 trigger에게 할당한다.
  };

  useEffect(() => {
    if (!option.url) {
      return;
    }

    axiosInstance(option)
      .then((data) => {
        //option 객체로부터 받은 url에 request를 보내고 그에 대한 response를 받아야하므로
        //async await에 해당하는 then을 사용하여 비동기적으로 동작하게 만든다.

        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);

  return { ...state, refetech };
  //객체를 반환해야하므로 객체 안에 객체가 되면 안되니까 state를 구조분해 할당하여
  //하나의 state와 refetch가 하나의 객체 안에 들어있도록 한다.
};

const UseAxios = () => {
  const { loading, error, data, refetech } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\n Error: ${error}\n Data: ${JSON.stringify(data)}`
  );

  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetech}>Refetch</button>
    </div>
  );
};

export default UseAxios;
