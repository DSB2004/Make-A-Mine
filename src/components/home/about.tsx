import React, { FC, useEffect, useState } from 'react'
import style from "../../style/modules/home.module.css"
import { credType } from '../../types/type'
import Underline from '../../layouts/underline/underline'
import CredCard from "../../layouts/cred-card/cred-card"
import InView from '../../layouts/in-view/in-view'
interface IPROPS {
    content: {
        header: string, para: string, summary: string, img: string, cred: credType[]
    }
}
const About: FC<IPROPS> = ({ content }): JSX.Element => {
    const { img, header, para, summary, cred } = content;
    const [inview, changeView] = useState<boolean>(false)
    return (
        <article className={style.about} id="about">
            <InView changeView={changeView} />
            <div className={`flex-even ${style.aboutContent}`}>
                <img src={img} alt="" className={`${inview ? "slide-left-in" : "slide-left-out"} ${style.ABOUT}`} />
                <div className={`${inview ? "slide-right-in" : "slide-right-out"} flex-left flex-column ${style.aboutContentDiv}`}>
                    <h1>
                        {header}
                        <Underline />
                    </h1>
                    <p>{para}</p>
                    <p>{summary}</p>
                    <div className={`${style.cred} flex-even`}>
                        {
                            cred.map((element, index) => <CredCard toChange={inview} head={element.head} info={element.info} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}


export default About;