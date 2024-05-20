import React from 'react';
import Banner from "../../Components/Banner/Banner";
import Container from "../../common/Container/Container";
import {Box} from "@mui/material";
import SideBar from "../../Components/SideBar/SideBar";
import Cards from "../../Components/Cards/Cards";
import FeaturedProduct from "../../Components/FeaturedProduct/FeaturedProduct";

const Main = () => {
    return (
        <>
            <Banner/>
            <Container>
                <Box sx={{display:"flex",marginBottom:10,}}>
                    <SideBar/>
                    <Cards/>
                </Box>
            </Container>
            <FeaturedProduct/>
        </>
    );
};

export default Main;