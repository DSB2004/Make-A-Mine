import React, { FC } from 'react'
import { credType } from '../../types/type'
import style from "./cred-card.module.css"

const CredCard: FC<credType> = ({ head, info }): JSX.Element => {
    return (
        <div className={`${style.credCard} flex-center flex-column`}>
            <h2>{info}</h2>
            <h5>{head}</h5>
        </div>
    )
}

export default CredCard;