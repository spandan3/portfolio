import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
} 

export default App;
