import React, { FC } from 'react'
import { credType } from '../../types/type'
import SpinCounter from '../spin-counter/spin-counter'
import style from "./cred-card.module.css"

const CredCard: FC<credType> = ({ head, info }): JSX.Element => {
    const infoArray: string[] = info.split('');
    return (
        <div className={`${style.credCard} flex-center flex-column`}>
            <div className={`flex-center `}>
                {infoArray.map((element, index) => <SpinCounter value={element} key={index} />)}
            </div>
            <h5>{head}</h5>
        </div>
    )
}

export default CredCard;