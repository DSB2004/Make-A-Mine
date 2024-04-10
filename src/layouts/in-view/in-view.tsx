import React, { FC, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import style from "./in-view.module.css"

interface IPROPS {
    changeView: Function
}
const InView: FC<IPROPS> = ({ changeView }): JSX.Element => {

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: false,
    });

    useEffect(() => {
        changeView(inView)
    }, [inView])
    return (
        <div ref={ref} className={style.inview}>
        </div>
    );
};

export default InView;