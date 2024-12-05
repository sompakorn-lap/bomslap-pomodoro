import Timer from "./components/Timer";

const timers = [
  {
    title: "FOCUS",
    interval: 12,
    color: "#7C00FE"
  }
];

function Home() {
  return (
    <section>
      <Timer {...timers[0]} />
    </section>
  )
}

export default Home;
