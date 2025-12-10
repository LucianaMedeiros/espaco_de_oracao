import { Home } from "./pages/Home";
import { About } from "./pages/About/About";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ComingSoon } from "./components/CommingSoon/CommingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<ComingSoon />} />
    </Routes>
  );
}


export default App;
