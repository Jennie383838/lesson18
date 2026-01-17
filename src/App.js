import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Diplomas from "./diplomas";
import Diploma from "./diploma";
import Module from "./module";
import Register from "./register";
import Confirmation from "./confirmation";
import Header from "./header";
import FAQ from "./FAQ";
import Favourites from "./favourites";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to RP SOI Portal" />} />

        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module />} />
          </Route>
        </Route>
        <Route path="FAQ" element ={<FAQ />} /> 
        <Route path="register" element={<Register />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="confirmation" element={<Confirmation />} />
      </Routes>

      <footer className="container">
        ©2026 | RP SOI Portal
      </footer>
    </div>
  );
}

export default App;
