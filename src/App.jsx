import {BrowserRouter, Routes, Route, Router} from "react-router-dom"

import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { NavBar } from "./components/NavBar"



function App() {
  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ItemListContainer}></Route>
        <Route path="/category/:id" element={ItemListContainer}></Route>
        <Route path="/item/:id" element={ItemDetailsContainer}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
