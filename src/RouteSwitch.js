import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import {useState} from "react";

const RouteSwitch = () => {
    const [cartItems, setCartItems] = useState([])
    const [productList, setProductList] = useState([])
    const [apiCalled, setApiCalled] = useState(false)

   return (
       <BrowserRouter>
           <Header cartCounter={cartItems}/>
           <Routes>
               <Route path="/" element={<App />} />
               <Route path="/shop" element={<Products cartHandler={setCartItems}
                                                      products={[productList, setProductList]}
                                                      api={[apiCalled, setApiCalled]}
               />} />
               <Route path="/shop/cart" element={<Cart items={cartItems} />} />
           </Routes>
       </BrowserRouter>
   )
}

export default RouteSwitch