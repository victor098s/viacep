import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import Cep from "./assets/Pages/Buscarcep/Cep";
import Home from "./assets/Pages/Home/Home";
import Frete from "./assets/Pages/Frete/frete";

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
        <NavLink
          to="/frete"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Frete
        </NavLink>
      </div>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscarcep" element={<Cep />} />
          <Route path="/frete" element={<Frete />} />
         
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
