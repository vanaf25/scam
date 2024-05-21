import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
const CardComponent = ({imageUrl,title,description,price}) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="235"
                    image={imageUrl}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.bold">
                        {price}£
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardComponent;