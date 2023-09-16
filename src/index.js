import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/Home";
import Todo from "./views/Todo";
import Products from "./views/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from "./components/ProductDetails";
import EditProduct from "./views/EditProduct";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/todo',
    element: <Todo />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/products/:productId',
    element: <ProductDetails />
  },
  {
    path: '/products/edit/:productId',
    element: <EditProduct />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
