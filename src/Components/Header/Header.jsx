// Header.js

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <h1 className={styles.title}>Garden House</h1>
            </div>
            <div className={styles.right}>
                <div className={styles.page}>Page</div>
                <div className={styles.page}>Page</div>
                <div className={styles.page}>Page</div>
                <button className={styles.button}>Button</button>
            </div>
        </header>
    );
};

export default Header;
