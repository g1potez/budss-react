import React from 'react';

import styles from './Header.module.css';
import Button from "../ui/Button";
import Logo from '../ui/Logo';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className={styles.inner}>
                    <Logo />
                    <Button value='Contact sales'/>
                </div>
            </div>
        </header>
    );
}

export default Header;