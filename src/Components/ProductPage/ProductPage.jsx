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

const FeaturedProduct = ({imageUrl,title,description,price,text,additional,subHeading}) => {
    return (
        <Container>
            <Box sx={{mt:1}}>
                <Grid  container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    <Grid item xs={4} sm={8} md={7}>
                        <Box className={styles.section__image} sx={{border:"0"}}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={imageUrl}
                                    alt="green iguana"
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={8} md={5}>
                        <div className={styles.section__text}>
                            <h2 className={styles.sectionTitle}>{title}</h2>
                            <Typography sx={{fontSize: 24, color: "#828282"}}>{subHeading}</Typography>
                            <p className={styles.sectionP}>
                                {description}
                            </p>
                            <Typography>{price}£</Typography>
                            <Typography sx={{color: "#828282", mb: 1}}>{text}</Typography>
                            <ColorButton fullWidth sx={{mb: 1}}>Add</ColorButton>
                            <Typography sx={{fontSize: 16, color: "#828282"}}>{additional}</Typography>
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