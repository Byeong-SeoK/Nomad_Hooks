const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    //Notification이라는 기능은 window내에 있는 객체중 하나로
    //콘솔 창에서 new Notification을 통해서 생성하고 사용할 수 있다.
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        //이 코드는 사용자로부터 알림 허용을 받는 코드이다.
        //그래서 알림 허용을 할 때까지 비동기적으로 기다렸다가 아래 코드를 실행한다.
        //그래서 then((permission)) 이라는 코드를 사용하는 것이다.
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
      //알림을 사용할 때는 새로운 객체를 생성해야한다.
    }
  };

  return fireNotif;
};

const UseNotification = () => {
  const triggerNotif = useNotification("Do you want to notify?", {
    body: "I want to notify",
  });

  return (
    <div>
      <button onClick={triggerNotif}>Notify</button>
    </div>
  );
};

export default UseNotification;
