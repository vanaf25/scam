import React from 'react';
import {Grid, Pagination} from "@mui/material";
import Card from "./Card/Card";
import Container from "../../common/Container/Container";
const Cards = ({related}) => {
    return (
        <Container>
            <ul style={{listStyle: "none",margin:"0 0 10px 0", padding:0}}>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <li className={"item"}>
                                <Card/>
                            </li>
                        </Grid>
                    ))}
                </Grid>
            </ul>
            {!related && <Pagination count={10}/>}
        </Container>

    );
};

export default Cards;