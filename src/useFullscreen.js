import { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggeFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
        //이미지를 전체화면으로 할 때는 element를 이용한다.
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }

      runCb(true);
    }
  };

  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;

    if (checkFullScreen !== null) {
      document.exitFullscreen();
      //전체화면 된 이미지를 다시 원상복구하려면 document를 이용한다.

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      runCb(false);
    }
  };

  return { element, triggeFull, exitFull };
};

const UseFullscreen = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };

  const { element, triggeFull, exitFull } = useFullscreen(onFulls);

  return (
    <>
      <div ref={element}>
        <img
          alt="Czech winter sight"
          src="https://cdn.crowdpic.net/detail-thumb/thumb_d_2E34D7365B3BAD1C482D714D04AD89CC.jpg"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggeFull}>Make fullscreen</button>
    </>
  );
};

export default UseFullscreen;
