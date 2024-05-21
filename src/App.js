import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import {Box, Pagination} from "@mui/material";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import FeaturedProduct from "./Components/FeaturedProduct/FeaturedProduct";
import Container from "./common/Container/Container";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import ProductPage from "./Components/ProductPage/ProductPage";
import SideBar from "./Components/SideBar/SideBar";
import Header2 from "./Components/Header2/Header2";
import Main from "./Pages/Main/Main";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path:"/product/:id",
        element:<ProductPage />
    }
]);
function App() {
  return (
    <div className="App">
        <Header2/>
        <RouterProvider router={router} />
        <Footer/>
    </div>
  );
}

export default App;
