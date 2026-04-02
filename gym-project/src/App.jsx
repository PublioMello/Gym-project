import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Treino from "./components/Pages/Train/Train";
import Dieta from "./components/Pages/Diet/Diet";
import Cardio from "./components/Pages/Cardio/Cardio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/treino" element={<Treino />} />
        <Route path="/dieta" element={<Dieta />} />
        <Route path="/cardio" element={<Cardio />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
