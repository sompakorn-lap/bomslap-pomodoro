import { BrowserRouter, Route, Routes } from "react-router-dom";
import Version1 from "./pages/Version1";
import Version2 from "./pages/Version2";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">

      <header className="w-full p-4 text-xl text-center bg-[#264653] text-gray-100">
        <h1>BomSLap - Pomodoro timer</h1>
      </header>

      <main className="px-2 py-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Version1/>} />
            <Route path="/v1" element={<Version1/>} />
            <Route path="/v2" element={<Version2/>} />
          </Routes>
        </BrowserRouter>
      </main>

      <footer className="w-full p-4 bg-[#264653] text-gray-100">
        <a 
          className="flex gap-1 text-lg"
          href="https://github.com/sompakorn-lap/bomslap-pomodoro"
        >
          <Icon icon="mdi:github" width={28} height={28} />
          <span>GITHUB</span>
        </a>
      </footer>
    </div>
  );
}

export default App;