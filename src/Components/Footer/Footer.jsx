import React from 'react';
import styles from './Footer.module.css'
import icon from './../../images/youtube-icon.png'
import Container from "../../common/Container/Container";
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
const Footer = () => {
    return (
        <Container className={`${styles.page__section} ${styles['sub-footer']}`}>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                <Grid item xs={4} sm={8} md={6}>
                    <div className={`${styles.sub_column} ${styles.main__column}`}>
                        <h3>Store of Pan Cebula</h3>
                        <div className={styles.icons}>
                            <img src={icon} height={24} alt="icon"/>
                            <img src={icon} height={24} alt="icon"/>
                            <img src={icon} height={24} alt="icon"/>
                            <img src={icon} height={24} alt="icon"/>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <div className={styles.sub_column}>
                        <h3 className={styles['section__title'] + ' ' + styles['section__title_left1']}>Offers</h3>
                        <p className={styles.section__p}>Bigos</p>
                        <p className={styles.section__p}>Bigos</p>
                        <p className={styles.section__p}>Bigos</p>
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <div className={styles.sub_column}>
                        <h3 className={styles['section__title'] + ' ' + styles['section__title_left1']}>Offers</h3>
                        <p className={styles.section__p}>Bigos</p>
                        <p className={styles.section__p}>Bigos</p>
                        <p className={styles.section__p}>Bigos</p>
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <div className={styles.sub_column}>
                        <h3 className={styles['section__title'] + ' ' + styles['section__title_left1']}>Offers</h3>
                        <p className={styles.section__p}>Bigos</p>
                        <p className={styles.section__p}>Bigos</p>
                        <p className={styles.section__p}>Bigos</p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;