import React from 'react';
import { useRef } from 'react';
import styles from './Slider.module.css';

export interface Props {
    children: React.ReactElement;
    step?: number;
}

const Slider = ({children, step = 150 }: Props) => {
    const sliderRef = useRef<HTMLElement | null>(null);

    const scrollLeft = () => {
        if (!sliderRef.current) return;
        sliderRef.current.scrollLeft -= step;
    };

    const scrollRight = () => {
        if (!sliderRef.current) return;
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