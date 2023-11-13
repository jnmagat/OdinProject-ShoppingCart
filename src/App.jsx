import Navbar from "./Components/Navbar"
import Home from "./components/Home"
import { useParams } from "react-router-dom"
import Product from "./components/Product";
import Item from "./components/Item";
import CartPage from "./components/CartPage";
import { CartProvider } from './components/CartContext';

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

  return (
    <>
    <CartProvider>
      <Navbar/>
      {
        item ? <Item/> : (
         page === "home" ? (
          <Home />
         ) : page === "market" ? (
          <Product 
            // addToCart={addToCart}
            products={products} 
          />
         ) : page === "cart" ? (
          <CartPage 
          />
         ) : (
          <Home />
         )
        )
      }
    </CartProvider>
      
    </>
  )
};

export default App;
