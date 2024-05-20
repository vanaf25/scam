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
                                    image="https://s3-alpha-sig.figma.com/img/65d6/8f72/4f70b8f021d5f479cd5eb6004696c267?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMzc~0Qfa3T0m7TyJE9RySKUPHuFOJh5IgE5xmd8DCNV2yvpbyeq4N9IOEjPkrjb0iISFgDFQcKJDbQc9jPa91JIXHbdO2jU6Zp1TdP7Wngz84viGD3H~mxFL6i-FGwOLH-1AI1fZJzbJ6huqnMLPZokVt0XvCt-gWdAgPdNko3D-NM14rQk4KT5asFMfBCrNIyXvO0Trn-URUkXU4GlmbY44aJ1yRJkRrIuvmedqsb8EVNWDlUZCZb3dMjUXvg9IjAy6Q0XQkiff22WRnID41sgHclllmAlQOqiBHmPe3vyUlJ5XgtENgvIU8MVEuvKAyp0BvEYeAuY3o~ZA7Wz8w__"
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