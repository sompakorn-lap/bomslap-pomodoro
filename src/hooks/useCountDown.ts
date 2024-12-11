import { useEffect, useState } from "react";

function useCountDown(initRemainingTime: number, start: boolean) {
  const [remainingTime, setRemainingTime] = useState(initRemainingTime);

  useEffect(() => {
    if(!start) {
      setRemainingTime(initRemainingTime);
      return ;
    }

    if(remainingTime <= 0)
      return ;

    const interval = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime > 0 ? prevRemainingTime - 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [initRemainingTime, start]);

  return remainingTime;
}

export default useCountDown;