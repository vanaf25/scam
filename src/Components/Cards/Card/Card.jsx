import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
const CardComponent = () => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="235"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Nazi_Swastika.svg/langru-200px-Nazi_Swastika.svg.png"
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    <Typography variant="body2" color="text.bold">
                      11£
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardComponent;