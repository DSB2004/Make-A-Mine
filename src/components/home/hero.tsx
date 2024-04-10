import React, { FC, useState } from 'react'

import WAVE1 from "../../assets/image/WAVE.png"
import WAVE2 from "../../assets/image/WAVE-MOBILE.png"

import style from "../../style/modules/home.module.css"

import InView from '../../layouts/in-view/in-view'
import Button from '../../layouts/button/button'

import { useEvent } from '../../provider/handleEvent'

interface IPROPS {
    content: {
        header: string, subheader: string, para: string, img: string, link?: string | undefined
    }
}

const Hero: FC<IPROPS> = ({ content }): JSX.Element => {
    const { img, header, subheader, para, link } = content;
    const { handleScroll, handleExternalLink } = useEvent()
    const [inView, changeView] = useState<boolean>(false)

    return (
        <article className={style.hero} id="hero">
            <InView changeView={changeView} />
            <div className={`flex-even ${style.heroContent}`}>
                <div className={`flex-left flex-column ${inView ? "slide-left-in" : "slide-left-out"} ${style.heroContentDiv}`}>
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
                <img src={img} alt="" className={`${inView ? "slide-right-in" : "slide-right-out"} ${style.HERO}`} />
            </div>
            <img src={WAVE1} alt="" className={style.heroWaveBg1} />
            <img src={WAVE2} alt="" className={style.heroWaveBg2} />
        </article >
    )
}


export default Hero;