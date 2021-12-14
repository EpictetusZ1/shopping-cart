import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import Header from "./components/Header";

const RouteSwitch = () => {
   return (
       <BrowserRouter>
       <Header />
           <Routes>
               <Route path="/" element={<App />} />
               <Route path="/welcome" element={<Welcome />} />
               <Route path="/shop" element={<Products />} />
           </Routes>
       </BrowserRouter>
   )
}

export default RouteSwitch