import { FC } from 'react'
import { serviceType } from '../../types/type'
import style from "./spec-card.module.css"

const SpecCard: FC<serviceType> = ({ head, info, icon }): JSX.Element => {
    const Icon: FC = icon
    return (
        <>
            <div className={`${style.specCard} flex-center `}>
                <div className={style.innerSpecCard}>
                    <div className={`flex-center flex-column ${style.CardSlide1}`}>
                        <Icon />
                        <h1>{head}</h1>
                    </div>
                    <div className={`flex-center ${style.CardSlide2}`}>
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SpecCard;