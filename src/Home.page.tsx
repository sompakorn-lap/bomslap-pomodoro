import Timer from "./components/Timer";

const timers = [
  {
    title: "FOCUS",
    interval: 12,
    color: "#2a9d8f"
  },
  {
    title: "SHORT BREAK",
    interval: 12,
    color: "#e9c46a"
  },
  {
    title: "LONG BREAK",
    interval: 12,
    color: "#f4a261"
  },
];

function Home() {
  return (
    <section>
      <Timer {...timers[0]} />
    </section>
  )
}

export default Home;
