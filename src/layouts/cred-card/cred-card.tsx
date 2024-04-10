import React, { FC } from 'react'
import SpinCounter from '../spin-counter/spin-counter'
import style from "./cred-card.module.css"

interface IPROPS {
    head: string,
    info: string,
    toChange: boolean
}

const CredCard: FC<IPROPS> = ({ head, info, toChange }): JSX.Element => {
    
    const infoArray: string[] = info.split('');
    return (
        <div className={`${style.credCard} flex-center flex-column`}>
            <div className={`flex-center `}>
                {infoArray.map((element, index) => <SpinCounter toChange={toChange} value={element} key={index} />)}
            </div>
            <h5>{head}</h5>
        </div>
    )
}

export default CredCard;