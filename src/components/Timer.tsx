import { useEffect, useState } from "react";
import useCountDown from "../hooks/useCountDown";
import formatRemainingTime from "../utils/formatRemainingTime";
import COUNTDOWN_TIMERS from "../constants/countDownTimers";

function Timer() {

  const [start, setStart] = useState(false);
  const [order, setOrder] = useState(0);

  const { title, initRemainingTime, color } = COUNTDOWN_TIMERS[order % COUNTDOWN_TIMERS.length];
  const remainingTime = useCountDown(initRemainingTime, start);
  const handleStart = () => setStart(true);
  
  useEffect(() => {
    if(remainingTime > 0)
      return ;

    setStart(false);
    setOrder(prevOrder => prevOrder + 1);
  }, [remainingTime]);

  return (
    <div className="w-4/5 max-w-2xl p-4 mx-auto rounded border-2">
      <div
        className="w-full text-center text-white mb-4 p-2 rounded text-2xl"
        style={{ backgroundColor: color}}
      >
        <h2>{title}</h2>
      </div>

      <div
        className="w-full text-center text-white mb-4 p-2 rounded text-9xl"
        style={{ backgroundColor: color}}
      >
        <h2>{formatRemainingTime(remainingTime)}</h2>
      </div>

      <button
        className="w-full text-center text-white p-2 rounded text-2xl"
        style={{ backgroundColor: color}}
        onClick={handleStart}
      >
        START
      </button>
    </div>
  );
}

export default Timer;