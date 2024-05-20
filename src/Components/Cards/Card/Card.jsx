import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
const CardComponent = () => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="235"
                    image="https://s3-alpha-sig.figma.com/img/65d6/8f72/4f70b8f021d5f479cd5eb6004696c267?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMzc~0Qfa3T0m7TyJE9RySKUPHuFOJh5IgE5xmd8DCNV2yvpbyeq4N9IOEjPkrjb0iISFgDFQcKJDbQc9jPa91JIXHbdO2jU6Zp1TdP7Wngz84viGD3H~mxFL6i-FGwOLH-1AI1fZJzbJ6huqnMLPZokVt0XvCt-gWdAgPdNko3D-NM14rQk4KT5asFMfBCrNIyXvO0Trn-URUkXU4GlmbY44aJ1yRJkRrIuvmedqsb8EVNWDlUZCZb3dMjUXvg9IjAy6Q0XQkiff22WRnID41sgHclllmAlQOqiBHmPe3vyUlJ5XgtENgvIU8MVEuvKAyp0BvEYeAuY3o~ZA7Wz8w__"
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