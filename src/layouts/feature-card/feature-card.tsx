import React, { FC } from 'react'
import { featureType } from '../../types/type';
import style from "./feature-card.module.css"
const FeatureCard: FC<featureType> = ({ icon, head, info }): JSX.Element => {
    const Icon: FC = icon;
    return (
        <div className={`flex-even ${style.featureCard}`
        }>
            <div className={`flex-center ${style.featureCardIcon}`}>
                <Icon />
            </div>
            <div className={`flex-left flex-column ${style.featureCardContent}`}>
                <h2>{head}</h2>
                <p>{info}</p>
            </div>
        </ div >
    )
}

export default FeatureCard;