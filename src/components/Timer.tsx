import { useEffect, useState } from "react";

function Timer() {

  const title = "FOCUS";
  const initTime = 5;
  const color = "#2a9d8f";

  const [start, setStart] = useState<boolean>(false);

  const [time, setTime] = useState<number>(initTime);
  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");

  useEffect(() => {

    if(!start)
      return ;

    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);

  }, [start]);

  useEffect(() => {
    if(time >= 0)
      return ;

    setTime(initTime);
    setStart(false);
  }, [time]);

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
        <h2>{minutes}:{seconds}</h2>
      </div>

      <button
        className="w-full text-center text-white p-2 rounded text-2xl"
        style={{ backgroundColor: color}}
        onClick={() => setStart(true)}
      >
        START
      </button>
    </div>
  );
}

export default Timer;