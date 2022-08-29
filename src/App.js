import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/home";

import Carac from "./containers/carac"
import Pokedex from "./components/pokedex"
import Type from "./components/Types"
import PokType from "./components/PokType"
import "./style.css"
const App = () => {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caracteristiques/:id" element={<Carac />} />
         
          <Route path="/Type" element={<Type />} />
          <Route path="/PokemonByType/:type" element={<PokType />} />
       
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
