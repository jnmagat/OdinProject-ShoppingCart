import Navbar from "./Components/Navbar"
import Home from "./components/Home"
import { useParams } from "react-router-dom"
import Product from "./components/Product";
import Item from "./components/Item";
import CartPage from "./components/CartPage";
// import { useState } from "react";

async function getAPIData () {
  let url = ('https://fakestoreapi.com/products');
  let response = await fetch(url);
  let data = await response.json(response);
  return data;
}

const products = await getAPIData();

const App = () => {

  const {page} = useParams();
  const {item} = useParams();
  // const [cart, setCart] = useState();

  return (
    <>
      <Navbar/>
      {
        item ? <Item/> : (
         page === "home" ? (
          <Home />
         ) : page === "market" ? (
          <Product products={products} />
         ) : page === "cart" ? (
          <CartPage />
         ) : (
          <Home />
         )
        )
      }
      
      
    </>
  )
};

export default App;
