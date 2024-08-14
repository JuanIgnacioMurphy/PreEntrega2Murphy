import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { NotFound } from "./components/NotFound";
import { NavBar } from "./components/NavBar"




function App() {
  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/item/:id" element={< ItemDetailsContainer />}></Route>
        <Route path="*" element={< NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
