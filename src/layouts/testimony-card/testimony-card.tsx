import React, { FC } from 'react'
import style from "./testimony-card.module.css"
import { testimonyType } from '../../types/type'
const TestimonyCard: FC<testimonyType> = ({ name, dest, msg, img }) => {

    return (
        <>

            <div className={style.testimonyCard}>
                <h1 className={`flex-center ${style.comma}`}>“</h1>
                <p className={style.msg}>
                    {msg}
                </p>
                <div className={style.clientOverHead}></div>
                <div className={`flex-center flex-column ${style.client}`}>
                    <img src={img} alt="" className={style.img} />
                    <h2 className={style.name}>{name}</h2>
                    <h4 className={style.dest}>{dest}</h4>
                </div>
            </div>
        </>
    )
}


export default TestimonyCard;