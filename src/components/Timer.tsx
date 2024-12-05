type TimerProps = {
  title: string;
  interval: number;
  color: string;
};

function Timer({
  title,
  interval,
  color
}: TimerProps) {

  return (
    <div className="w-4/5 max-w-2xl p-4 mx-auto rounded border-2">
      <div className="w-full text-center text-white mb-4 p-2 rounded text-2xl" style={{ backgroundColor: color}}>
        <h2>{title} ({ interval })</h2>
      </div>

      <div className="w-full text-center text-white mb-4 p-2 rounded text-9xl" style={{ backgroundColor: color}}>
        <h2>00:00</h2>
      </div>

      <button className="w-full text-center text-white p-2 rounded text-2xl" style={{ backgroundColor: color}}>
        START
      </button>
    </div>
  );
}

export default Timer;