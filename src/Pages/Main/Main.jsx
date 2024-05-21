import React from 'react';
import Banner from "../../Components/Banner/Banner";
import Container from "../../common/Container/Container";
import {Box} from "@mui/material";
import SideBar from "../../Components/SideBar/SideBar";
import Cards from "../../Components/Cards/Cards";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";

const Main = () => {
    const products = [
        {
            id: 1,
            title: "Product 1",
            price: 19.99,
            description: "This is the description for Product 1.",
            imageUrl: "https://lp.tvokazje.pl/wp-content/uploads/2022/12/AdobeStock_363258953.jpg"
        },
        {
            id: 2,
            title: "Product 2",
            price: 29.99,
            description: "This is the description for Product 2.",
            imageUrl: "https://lp.tvokazje.pl/wp-content/uploads/2022/12/AdobeStock_363258953.jpg"
        },
        {
            id: 3,
            title: "Product 3",
            price: 39.99,
            description: "This is the description for Product 3.",
            imageUrl: "https://lp.tvokazje.pl/wp-content/uploads/2022/12/AdobeStock_363258953.jpg"
        },
        {
            id: 4,
            title: "Product 4",
            price: 49.99,
            description: "This is the description for Product 4.",
            imageUrl: "https://lp.tvokazje.pl/wp-content/uploads/2022/12/AdobeStock_363258953.jpg"
        },
        {
            id: 5,
            title: "Product 5",
            price: 59.99,
            description: "This is the description for Product 5.",
            imageUrl: "https://lp.tvokazje.pl/wp-content/uploads/2022/12/AdobeStock_363258953.jpg"
        }
    ];
    console.log(products);
    return (
        <>
            <Banner/>
            <Container>
                <Box sx={{display:{
                    xs:"block",
                    sm:"block",
                    md:"flex",
                    lg:"flex",
                    xl:"flex",
                },marginBottom:10}}>
                    <SideBar/>
                    <Cards products={products}/>
                </Box>
            </Container>
            <FeaturedProduct/>
        </>
    );
};

export default Main;