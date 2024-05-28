import React from "react";

import styles from './Tabs.module.css';

const Tabs = () => {
    return (
        <div className={styles.tabs}>
            <div className="container">
                <ul>
                    <li className={`${styles.item} ${styles.item_active}`}>For business</li>
                    <li className={styles.item}>For Customers</li>
                </ul>
            </div>
        </div>
    );
}

export default Tabs;