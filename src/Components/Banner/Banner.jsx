// CustomElement.js

import React from 'react';
import styles from './Banner.module.css';
import {Box} from "@mui/material";
import BlackButton, {BlackButton2} from "../../common/BlackButton/BlackButton";
import Container from "../../common/Container/Container";

const CustomElement = () => {
    return (
        <Container>
            <div className={`${styles.container}`}>
                <img
                    className={styles.background__image}
                    src="https://cdn.medexpress.pl/media/images/uploads202208iStock-649824716-480x.original.format-webp_VBQAdfX.webp"
                    alt="Repo"/>
                <div className={`${styles.content} ${styles.overlay}`}>
                    <Box>
                        <h1>NOWOSC</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <BlackButton2 variant={"outlined"}>Button</BlackButton2>
                    </Box>

                </div>
            </div>
        </Container>

    );
};

export default CustomElement;
