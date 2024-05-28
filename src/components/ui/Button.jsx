import React from 'react';

import styles from './css/style.module.css';

const Button = (props) => {
    return (
        <button className={`${styles.button} ${props.className}`} id={props.id}>
            {props.value}
        </button>
    );
}

export default Button;