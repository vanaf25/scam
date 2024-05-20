import React from 'react';
import styles from './FeaturedProduct.module.css'
import Container from "../../common/Container/Container";
import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
const FeaturedProduct = () => {
    return (
        <Container>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    <Grid item xs={4} sm={4} md={7}>
                        <Card className={styles.section__image} sx={{border:"0"}}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    height="640"
                                    image={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hitler_portrait_crop.jpg/274px-Hitler_portrait_crop.jpg"}
                                    alt="green iguana"
                                />
                                <CardContent sx={{bg:"white"}} >
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Desc
                                    </Typography>
                                    <Typography variant="body2" color="text.bold">
                                        11£
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                <Grid item xs={4} sm={4} md={5}>
                    <div className={styles.section__content_1}>
                        <div className={styles.section__text}>
                            <h2 className={styles.sectionTitle}>Welcome to Angular!</h2>
                            <p className={styles.sectionP}>
                                <strong>Angular:</strong> This is an indispensable service for those who value tasty,
                                satisfying, and high-quality food, but do not have enough time to prepare it. The varied
                                menu that you can find on our website will provide you with a wide range of dishes: from
                                traditional Ukrainian borscht according to old home recipes to a spicy and sophisticated
                                salmon salad. Now your table depends not on your capabilities, but on your choice.
                            </p>
                        </div>
                    </div>                </Grid>
            </Grid>
        </Container>
    );
};

export default FeaturedProduct;