import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckOut from "./components/Checkout/Checkout";
import Header from "./components/Header";
import './App.css'
import Cart from "./components/Cart/Cart";
import CartContinue from "./components/Cart/CartContinue";
import Home from "./Home";

function App() {

  const router = 
    createBrowserRouter([
      {index: true, element: <Home/>},{path:'/products', element:<Header/>}, {path: '/cart', element: <Cart />},{path:'/checkout', element: <CheckOut/>},{path: '/cart-continue', element: <CartContinue/>}
    ])
  
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
