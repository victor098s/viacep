import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import Cep from "./assets/Pages/Buscarcep/Cep";
import Home from "./assets/Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="navBar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/buscarcep"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Buscar cep
        </NavLink>
      </div>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscarcep" element={<Cep />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
