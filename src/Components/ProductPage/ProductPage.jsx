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
                                    image="https://s3-alpha-sig.figma.com/img/65d6/8f72/4f70b8f021d5f479cd5eb6004696c267?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMzc~0Qfa3T0m7TyJE9RySKUPHuFOJh5IgE5xmd8DCNV2yvpbyeq4N9IOEjPkrjb0iISFgDFQcKJDbQc9jPa91JIXHbdO2jU6Zp1TdP7Wngz84viGD3H~mxFL6i-FGwOLH-1AI1fZJzbJ6huqnMLPZokVt0XvCt-gWdAgPdNko3D-NM14rQk4KT5asFMfBCrNIyXvO0Trn-URUkXU4GlmbY44aJ1yRJkRrIuvmedqsb8EVNWDlUZCZb3dMjUXvg9IjAy6Q0XQkiff22WRnID41sgHclllmAlQOqiBHmPe3vyUlJ5XgtENgvIU8MVEuvKAyp0BvEYeAuY3o~ZA7Wz8w__"
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