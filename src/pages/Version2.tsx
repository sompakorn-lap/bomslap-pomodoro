import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";

function Version2() {

  const timers = [
    { 
      mode: "FOCUS",
      initRemainingTime: 25 * 60,
      backgroundColor: "#2a9d8f"
    },
    { 
      mode: "SHORT BREAK",
      initRemainingTime: 5 * 60,
      backgroundColor: "#e9c46a"
    },
    { 
      mode: "LONG BREAK",
      initRemainingTime: 15 * 60,
      backgroundColor: "#f4a261"
    }
  ];

  const [selectedMode, setSelectedMode] = useState("FOCUS");
  const setting = timers.filter(({ mode }) => mode === selectedMode)[0];

  return (
    <Fragment>
      <section className="mb-4 p-4 border-2 rounded">
        <div className="flex gap-4 mb-4">
          {timers.map(({ mode, backgroundColor }) => 
            <button
              className="flex-1 p-2 rounded text-gray-100"
              style={{ backgroundColor }}
              key={mode}
              onClick={() => setSelectedMode(mode)}
            >
              {mode}
            </button>
          )}
        </div>

        <div
          className="w-full text-center mb-4  p-2 rounded"
          style={{ backgroundColor: setting.backgroundColor }}
        >
          <h2 className="text-white text-9xl">00:00</h2>
        </div>

        <button
          className="w-full p-2 text-xl text-center text-gray-100 rounded"
          style={{ backgroundColor: setting.backgroundColor }}
        >
          START
        </button>
      </section>

      <section className="flex gap-2 mb-4 p-2 border-2 rounded">
        <button className="flex gap-1 p-2 rounded text-gray-100 bg-indigo-600">
          <Icon icon="mdi:lock" width={24} height={24}/>
          <span>LOCK</span>
        </button>
        <button className="flex gap-1 p-2 rounded text-gray-100 bg-indigo-600">
          <Icon icon="mdi:settings" width={24} height={24}/>
          <span>SETTING</span>
        </button>
      </section>
    </Fragment>
  );
}

export default Version2;
