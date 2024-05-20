import React from 'react';
import {Grid, Pagination} from "@mui/material";
import Card from "./Card/Card";
import Container from "../../common/Container/Container";
const Cards = ({related}) => {
    return (
        <Container>
                <Grid component={"ul"} style={{listStyle:"none",margin:0,padding:0}} container spacing={{xs: 2, md: 3}}
                      columns={{xs: 4, sm: 8, md: 12}}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid className={"item"} style={{paddingLeft:0}} component={"li"}  item xs={4} sm={4} md={4} key={index}>
                                <Card/>
                        </Grid>
                    ))}
                </Grid>
            {!related && <Pagination count={10}/>}
        </Container>

    );
};

export default Cards;