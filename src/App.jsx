import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PrestasiPage from "./pages/PrestasiPage/PrestasiPage.jsx";
import VisiMisiPage from "./pages/VisiMisiPage/VisiMisiPage.jsx";
// import Loader from "./components/Loader/Loader.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prestasi" element={<PrestasiPage />} />
      <Route path="/visi-misi" element={<VisiMisiPage />} />
      
    </Routes>
  );
}

export default App;
