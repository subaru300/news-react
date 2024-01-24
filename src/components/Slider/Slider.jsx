import React from 'react';
import { useRef } from 'react';
import styles from './Slider.module.css';

const Slider = ({children, step = 150 }) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= step;
    };

    const scrollRight = () => {
        sliderRef.current.scrollLeft += step;
    };

    return (
<header className={styles.slider}>
    <button className={styles.arrow} onClick={scrollLeft}>{`<`}</button>
        {React.cloneElement(children, {ref:sliderRef})}
    <button className={styles.arrow} onClick={scrollRight}>{`>`}</button>
</header>
    )
};

export default Slider;