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
    <section className="w-4/5 max-w-2xl p-4 mx-auto rounded border-2">
      <div className={`w-full text-center text-white mb-4 p-2 rounded bg-[${color}] text-2xl`}>
        <h2>{title}</h2>
      </div>

      <div className={`w-full text-center text-white mb-4 p-2 rounded bg-[${color}] text-9xl`}>
        <h2>00:00</h2>
      </div>

      <button className={`w-full text-center text-white p-2 rounded bg-[${color}] text-2xl`}>
        START
      </button>
    </section>
  );
}

export default Timer;