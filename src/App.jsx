import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PrestasiPage from "./pages/PrestasiPage/PrestasiPage.jsx";
import VisiMisiPage from "./pages/VisiMisiPage/VisiMisiPage.jsx";
import Struktur from "./pages/Struktur/Struktur.jsx";
// import Loader from "./components/Loader/Loader.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prestasi" element={<PrestasiPage />} />
      <Route path="/visi-misi" element={<VisiMisiPage />} />
      <Route path="/struktur" element={<Struktur />} />
    </Routes>
  );
}

export default App;
