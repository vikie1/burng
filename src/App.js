import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { PlayerPage } from "./pages/PlayerPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player/:id" element={<PlayerPage />} />
      </Routes>
    </>
  );
}

export default App;
