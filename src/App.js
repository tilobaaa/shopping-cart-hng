import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckOut from "./components/Checkout/Checkout";
import Header from "./components/Header";
import "./App.css";
import Cart from "./components/Cart/Cart";
import CartContinue from "./components/Cart/CartContinue";
import Home from "./Home";
import CartProvider from "./store/CartProvider";

function App() {
  const router = createBrowserRouter([
    { index: true, element: <Home /> },
    { path: "/products", element: <Header /> },
    { path: "/cart", element: <Cart /> },
    { path: "/checkout", element: <CheckOut /> },
    { path: "/cart-continue", element: <CartContinue /> },
  ]);

  return (
    <CartProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
}

export default App;

//api key: d5f2bb89b34f4cb8aedfa1319d8feef320240712122839218351
// app id: PGLH2UD8S96IEQG
// organization id : 92bd4485ce7e4659829d85b3795839c4
