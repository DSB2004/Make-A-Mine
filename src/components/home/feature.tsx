import React, { FC } from 'react'
import Underline from '../../layouts/underline/underline'
import style from "../../style/modules/home.module.css"
import { featureType } from '../../types/type'
import FeatureCard from '../../layouts/feature-card/feature-card'
interface IPROPS {
    content: {
        header: string,
        feature: featureType[],
        img: string
    }
}

const Feature: FC<IPROPS> = ({ content }): JSX.Element => {
    const { header, feature, img } = content;

    return (
        <article className={`${style.feature} flex-center flex-column`}>
            <h1 className={`flex-center flex-column`}>
                {header}
                <Underline />
            </h1>
            <div className={`flex-even ${style.featureCardContainerParent}`}>
                <div className={style.featureCardContainer}>
                    <FeatureCard head={feature[0].head} icon={feature[0].icon} info={feature[0].info} />
                    <FeatureCard head={feature[1].head} icon={feature[1].icon} info={feature[1].info} />
                </div>
                <img src={img} alt="" className={style.featureImg} />
                <div className={style.featureCardContainer}>
                    <FeatureCard head={feature[2].head} icon={feature[2].icon} info={feature[2].info} />
                    <FeatureCard head={feature[3].head} icon={feature[3].icon} info={feature[3].info} />
                </div>
            </div>
        </article >
    )
}


export default Feature;