import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { Cart } from "./components/Cart";
import { NotFound } from "./components/NotFound";
import { NavBar } from "./components/NavBar";
import { Provider } from "./context/ItemsContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:id" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailsContainer />}></Route>
          <Route path="/cart" element={<Cart />}> </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
