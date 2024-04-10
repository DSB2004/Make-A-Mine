import React, { FC } from "react";
import style from "./loading-wave.module.css"
const LoadingWave: FC = (): JSX.Element => {
    return (
        <div className={style.loader}>
            <div className={`${style.box} ${style.box1}`}>
                <div className={style.sideLeft}></div>
                <div className={style.sideRight}></div>
                <div className={style.sideTop}></div>
            </div>
            <div className={`${style.box} ${style.box2}`}>
                <div className={style.sideLeft}></div>
                <div className={style.sideRight}></div>
                <div className={style.sideTop}></div>
            </div>
            <div className={`${style.box} ${style.box3}`}>
                <div className={style.sideLeft}></div>
                <div className={style.sideRight}></div>
                <div className={style.sideTop}></div>
            </div>
            <div className={`${style.box} ${style.box4}`}>
                <div className={style.sideLeft}></div>
                <div className={style.sideRight}></div>
                <div className={style.sideTop}></div>
            </div>
        </div>
    )
}


export default LoadingWave;