import React, { FC } from 'react'
import style from "../../style/modules/home.module.css"
import { credType } from '../../types/type'
import Underline from '../../layouts/underline/underline'
import CredCard from "../../layouts/cred-card/cred-card"
interface IPROPS {
    content: {
        header: string, para: string, summary: string, img: string, cred: credType[]
    }
}
const About: FC<IPROPS> = ({ content }): JSX.Element => {
    const { img, header, para, summary, cred } = content;
    return (
        <article className={style.about} id="about">
            <div className={`flex-even ${style.aboutContent}`}>
                <img src={img} alt="" className={style.ABOUT} />
                <div className={`flex-left flex-column ${style.aboutContentDiv}`}>
                    <h1>
                        {header}
                        <Underline />
                    </h1>
                    <p>{para}</p>
                    <p>{summary}</p>
                    <div className='flex-even'>
                        {
                            cred.map((element, index) => <CredCard head={element.head} info={element.info} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}


export default About;