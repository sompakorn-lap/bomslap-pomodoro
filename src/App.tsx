import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.page";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">

      <header>
        <h1>BomSLap - Pomodoro timer</h1>
      </header>

      <main className="p-2">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </main>

      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;