import React from 'react';
import {Grid, Pagination} from "@mui/material";
import Card from "./Card/Card";
import Container from "../../common/Container/Container";
import {Link} from "react-router-dom";
const Cards = ({related,products}) => {
    return (
        <Container>
                <Grid component={"ul"} style={{listStyle:"none",margin:0,padding:0}} container spacing={{xs: 2, md: 3}}
                      columns={{xs: 4, sm: 8, md: 12}}>
                    {products?.map(product => (
                        <Grid className={"item"}  component={"li"}
                              item xs={4} sm={4} md={4} key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <Card {...product} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            {!related && <Pagination count={10}/>}
        </Container>

    );
};

export default Cards;