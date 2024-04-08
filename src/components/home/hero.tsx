import React, { FC } from 'react'
import WAVE from "../../assets/image/WAVE.png"
import style from "../../style/modules/home.module.css"

import Button from '../../layouts/button/button'
import { useEvent } from '../../provider/handleEvent'
import { useHeader } from '../../provider/handleHeaderEvent'

interface IPROPS {
    content: {
        header: string, subheader: string, para: string, img: string, link?: string | undefined
    }
}


const Hero: FC<IPROPS> = ({ content }): JSX.Element => {
    const { img, header, subheader, para, link } = content;
    const { handleScroll, handleExternalLink } = useEvent()

    return (
        <article className={style.hero}>
            <div className={`flex-even ${style.heroContent}`}>
                <div className={`flex-left flex-column ${style.heroContentDiv}`}>
                    <h2>{subheader}</h2>
                    <h1>{header}</h1>
                    <p>{para}</p>
                    <span className={style.heroCallBtn}>
                        <Button content={{
                            text: "Free Strategy Call", id: "call-btn",
                            onClick: (): void => { handleExternalLink(link) }
                        }} key="free-call-btn" />
                    </span>
                    <Button content={{ text: "Contact Us", id: "call btn", onClick: () => handleScroll("id") }} />
                </div>
                <img src={img} alt="" className={style.HERO} />
            </div>
            <img src={WAVE} alt="" className={style.heroWaveBg} />
        </article >
    )
}


export default Hero;