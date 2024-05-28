import React from "react";

import styles from './Page.module.css';
import Button from "../components/ui/Button";

import girl from '../assets/img/girl.png';
import girlline from '../assets/img/girl-line.svg';
import star from '../assets/img/star.svg';
import snake from '../assets/img/snake.svg';
import wave from '../assets/img/wave.svg';
import screb from '../assets/img/screb.svg';
import aboutLine from '../assets/img/about-line.svg';
import mobile from '../assets/img/mobile.png';
import bugs from '../assets/img/bugs.png';
import slime from '../assets/img/slime.png';
import slimeWithPhone from '../assets/img/slime-with-phone.png';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import instagram from '../assets/img/instagram.svg';
import tiktok from '../assets/img/tiktok.svg';
import woo from '../assets/img/woo.png'
import shopify from '../assets/img/shopify.png'
import square from '../assets/img/square.png'
import squarespace from '../assets/img/squarespace.png'
import clover from '../assets/img/clover.png'

const Page = () => {
    return (
        <>
        <section className={styles.main}>
            <div className="container">
                <div className={styles.main__inner}>
                    <div className={`${styles.main__block} ${styles.main__blockText}`}>
                        <h1>Everyone is an Influencer</h1>
                        <p className={styles.main__text__margin}>Budss is a payments as a service and WOM engine dedicated to acquisition and retention of customers to your business.</p>
                        <Button value='Contact sales' />
                    </div>
                    <div className={`${styles.main__block} ${styles.main__blockWoman}`}>
                        <img src={girl} alt="girl" />
                        <img src={girlline} alt="girl-line" className={styles.main__imageLine} />
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.about}>
            <div className={`${styles.about__container} container`}>
                <h1 className={styles.about__title}>About Budss</h1>
                <div className={styles.about__inner}>
                    <div className={`${styles.about__block} ${styles.about__blockText}`}>
                        <h4>Payment as a service, powered seamlessly by our <span className="textSpan">network of shoppers</span></h4>
                    </div>
                    <div className={`${styles.about__block} ${styles.about__blockList}`}>
                        <div className={styles.about__blockItem}>
                            <img src={star} className={styles.about__itemImage} alt="star" />
                            <h3>Contactless</h3>
                            <p>Budss uses near field communication (NFC) for making contactless payments.</p>
                        </div>
                        <div className={styles.about__blockItem}>
                            <img src={snake} className={styles.about__itemImage} alt="snake" />
                            <h3>Increased Buying Power</h3>
                            <p>Returning customers spend up to 3X more.</p>
                        </div>
                        <div className={styles.about__blockItem}>
                            <img src={wave} className={styles.about__itemImage} alt="wave" />
                            <h3>Analytics & Insights</h3>
                            <p>Gain a holistic view into your customers’ buying behavior & purchasing patterns. </p>
                        </div>
                        <div className={styles.about__blockItem}>
                            <img src={screb} className={styles.about__itemImage} alt="screb" />
                            <h3>Fraud Protection</h3>
                            <p>Budss handles all payments with a fraud prevention algorithm to flag high risk purchases & a user set PIN code to keep payment info secure. </p>
                        </div>
                    </div>
                </div>
                <div className={styles.about__line}>
                    <img src={aboutLine} alt="about-line" />
                </div>
            </div>
        </section>
        <section className={styles.statistic}>
            <div className="container">
                <div className={styles.statistic__inner}>
                    <div className={styles.statistic__block}>
                        <h2>15%</h2>
                        <p>Increase in Purchase Amount</p>
                    </div>
                    <div className={styles.statistic__block}>
                        <h2>30%</h2>
                        <p>Growth in  Annual Sales</p>
                    </div>
                    <div className={styles.statistic__block}>
                        <h2>10%</h2>
                        <p>Growth in New Customers</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.why}>
            <div className="container">
                <div className={styles.why__title}>
                    <h2>Why Budss</h2>
                    <h4>We Provide Advanced Payment Solutions <br /><span className="textSpan">To Grow Your Business</span></h4>
                </div>
                <div className={styles.why__inner}>
                    <div className={`${styles.why__block} ${styles.block__one}`}>
                        <div className={styles.why__blockImage}>
                            <img src={mobile} alt="mobile" />
                        </div>
                        <div className={styles.why__blockText}>
                            <h3>Turn your customers into loyal influencers</h3>
                            <p>Budss helps businesses harness the exponential power of loyal customers for acquisition and retention.</p>
                        </div>
                    </div>
                    <div className={`${styles.why__block} ${styles.block__two}`}>
                        <div className={styles.why__blockImage}s>
                            <img src={bugs} alt="bugs" />
                        </div>
                        <div className={styles.why__blockText}>
                            <h3>Harness the power of buying in bulk</h3>
                            <p>Get at least 2X more sales with Budss Buying Groups. Your customer base will grow exponentially as your customers add their friends & family to your personalized group.</p>
                        </div>
                    </div>
                    <div className={`${styles.why__block} ${styles.block__three}`}>
                        <div className={styles.why__blockImage}s>
                            <img src={slime} alt="slime" />
                        </div>
                        <div className={styles.why__blockText}>
                            <h3>Supercharge Loyalty With Instant Cash Back</h3>
                            <p>Budss allows for shoppers to earn immediate cash back at their favorite stores.</p>
                        </div>
                    </div>
                    <div className={`${styles.why__block} ${styles.block__four}`}>
                        <div className={styles.why__blockImage}s>
                            <img src={slimeWithPhone} alt="slime-with-phone" />
                        </div>
                        <div className={styles.why__blockText}>
                            <h3>Seasoned with AI and Gamification</h3>
                            <p>AI programming creates a personalized customer journey, offering recommendations for their next purchase and optimizing rewards for after purchase.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.slogan}>
            <div className="container">
                <div className={styles.slogan__inner}>
                    <h2 className={styles.slogan__title}>Let Your Business Grow</h2>
                    <Button value="Contact sales" />
                </div>
            </div>
        </section>
        <section className={styles.links}>
            <div className="container">
                <div className={styles.links__inner}>
                    <div className={styles.links__text}>
                        <h1>Your Brand Awareness Maters</h1>
                        <p>Budss is a husle free solution to put your brand on any digital surface including Instagram, Facebook, Twitter and TikTok</p>
                    </div>
                    <div className={styles.links__buttons}>
                        <Button value={<img src={facebook} alt='facebook' className={styles.links__image} />} className={styles.links__buttonsImage} id={styles.facebook} />
                        <Button value={<img src={twitter} alt='twitter' className={styles.links__image} />} className={styles.links__buttonsImage} id={styles.twitter} />
                        <Button value={<img src={instagram} alt='instagram' className={styles.links__image} />} className={styles.links__buttonsImage} id={styles.instagram} />
                        <Button value={<img src={tiktok} alt='tiktok' className={styles.links__image} />} className={styles.links__buttonsImage} id={styles.tiktok} />
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.brands}>
            <div className="container">
                <div className={styles.brands__list}>
                    <div className={styles.brands__item}>
                        <img src={woo} alt="woo" />
                    </div>
                    <div className={styles.brands__item}>
                        <img src={shopify} alt="shopify" />
                    </div>
                    <div className={styles.brands__item}>
                        <img src={square} alt="square" />
                    </div>
                    <div className={styles.brands__item}>
                        <img src={squarespace} alt="squarespace" />
                    </div>
                    <div className={styles.brands__item}>
                        <img src={clover} alt="clover" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Page;