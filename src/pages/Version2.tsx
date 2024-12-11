import { Fragment, useEffect, useState } from "react";
import useCountDown from "../hooks/useCountDown";
import formatRemainingTime from "../utils/formatRemainingTime";

function Version2() {

  const [timers, setTimers] = useState([
    {
      key: "0359323e", 
      mode: "FOCUS",
      initRemainingTime: 25,
      backgroundColor: "#2a9d8f"
    },
    {
      key: "52eada18", 
      mode: "SHORT BREAK",
      initRemainingTime: 5,
      backgroundColor: "#e9c46a"
    },
    {
      key: "5f201172", 
      mode: "LONG BREAK",
      initRemainingTime: 15,
      backgroundColor: "#f4a261"
    }
  ]);

  const [selectedMode, setSelectedMode] = useState("FOCUS");
  const selected = timers.filter(({ mode }) => mode === selectedMode)[0];

  const [start, setStart] = useState(false);

  const remainingTime = useCountDown(selected.initRemainingTime * 60, start);
  const handleStart = () => setStart(true);

  return (
    <Fragment>
      <section className="mb-4 p-4 border-2 rounded">
        <div className="flex gap-4 mb-4">
          {timers.map(({ mode, backgroundColor, key }) => 
            <button
              className="flex-1 p-2 rounded text-gray-100"
              style={{ backgroundColor }}
              key={`selector-${key}`}
              onClick={() => {
                setStart(false);
                setSelectedMode(mode);
              }}
            >
              {mode}
            </button>
          )}
        </div>

        <div
          className="w-full text-center mb-4  p-2 rounded"
          style={{ backgroundColor: selected.backgroundColor }}
        >
          <h2 className="text-white text-9xl">
            {formatRemainingTime(remainingTime)}
          </h2>
        </div>

        <button
          className="w-full p-2 text-xl text-center text-gray-100 rounded"
          style={{ backgroundColor: selected.backgroundColor }}
          onClick={handleStart}
        >
          START
        </button>
      </section>

      <section className="gap-2 mb-4 p-2 border-2 rounded">
        {timers.map(({ mode, backgroundColor, initRemainingTime, key }, index) => 
          <div
            className="flex place-items-center gap-1 mb-2" 
            key={`input-${key}`}
          >
            <label className="w-28">{mode}</label>
            <input
              className="w-11 h-11 rounded border-2"
              type="color"
              value={backgroundColor}
              onChange={(e) => setTimers(timers.map(
                timer => timer.mode === mode 
                  ? { ...timer, backgroundColor: e.target.value }
                  : timer
                ))
              }
              />
            <input
              className="rounded border-2 p-2"
              type="number"
              value={initRemainingTime}
              onChange={(e) => setTimers(timers.map(
                timer => timer.mode === mode 
                  ? { ...timer, initRemainingTime: parseInt(e.target.value) }
                  : timer
                ))
              }
            />
          </div>
        )}
      </section>
    </Fragment>
  );
}

export default Version2;
