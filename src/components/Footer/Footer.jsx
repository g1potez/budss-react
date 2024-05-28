import React from "react";
import styles from './Footer.module.css';
import Logo from "../ui/Logo";
import Button from '../ui/Button';

import appstore from '../../assets/img/appstore.png';
import googleplay from '../../assets/img/googleplay.png';

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className={`${styles.block} ${styles.block_border}`}>
                    <Logo />
                    <ul className={styles.menuList}>
                        <li className={styles.menuItem}>
                            For Business
                        </li>
                        <li className={styles.menuItem}>
                            For Customers
                        </li>
                    </ul>
                    <div className={styles.button}>
                        <Button value='Contact sales'/>
                    </div>
                    <ul className={styles.marketList}>
                        <li className={styles.marketItem}>
                            <a href="/" className={styles.marketLink}>
                                <img src={appstore} alt="appstore" />
                            </a>
                        </li>
                        <li className={styles.marketItem}>
                            <a href="/" className={styles.marketLink}>
                                <img src={googleplay} alt="googleplay" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.block} ${styles.block_textTerms}`}>
                    <p className={styles.copyright}>© Copyright 2023, All Rights Reserved by Budss</p>
                    <ul className="footer__terms-list">
                        <li className={styles.termsItem}>
                            <a href="/" className="footer__terms-link">
                                Privacy Policy
                            </a>
                        </li>
                        <li className={styles.termsItem}>
                            <a href="/" className="footer__terms-link">
                                Terms Of Use - Seller
                            </a>
                        </li>
                        <li className={styles.termsItem}>
                            <a href="/" className="footer__terms-link">
                                Terms of Use - Sellers & Customers
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;