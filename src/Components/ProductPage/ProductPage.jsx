import React from 'react';
import styles from './ProductPage.module.css'
import Container from "../../common/Container/Container";
import {Box, Button, Card, CardContent, CardMedia, Grid, styled, Typography} from "@mui/material";
import Cards from "../Cards/Cards";
const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "black",
    color:"white",
    '&:hover': {
        color:"black"
    },
}));

const FeaturedProduct = () => {
    return (
        <Container>
            <Box sx={{mt:1}}>
                <Grid  container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    <Grid item xs={4} sm={8} md={7}>
                        <Card className={styles.section__image} sx={{border:"0"}}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hitler_portrait_crop.jpg/274px-Hitler_portrait_crop.jpg"}
                                    alt="green iguana"
                                />
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sm={8} md={5}>
                        <div className={styles.section__text}>
                            <h2 className={styles.sectionTitle}>Welcome to Angular!</h2>
                            <Typography sx={{fontSize: 24, color: "#828282"}}>Subheading</Typography>
                            <p className={styles.sectionP}>
                                <strong>Angular:</strong> This is an indispensable service for those who value tasty,
                                satisfying, and high-quality food, but do not have enough time to prepare it. The varied
                                menu that you can find on our website will provide you with a wide range of dishes: from
                                traditional Ukrainian borscht according to old home recipes to a spicy and sophisticated
                                salmon salad. Now your table depends not on your capabilities, but on your choice.
                            </p>
                            <Typography>11£</Typography>
                            <Typography sx={{color: "#828282", mb: 1}}>Body text for describing why this product is simply a
                                must-buy</Typography>
                            <ColorButton fullWidth sx={{mb: 1}}>Add</ColorButton>
                            <Typography sx={{fontSize: 16, color: "#828282"}}>Text box for additional details or fine
                                print</Typography>

                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Typography variant={"h5"}>Related Products</Typography>
            <Cards related={true}/>
        </Container>
    );
};

export default FeaturedProduct;