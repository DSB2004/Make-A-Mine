import React, { FC, useState } from 'react'
import Underline from '../../layouts/underline/underline'
import { serviceType } from '../../types/type'
import SpecCard from '../../layouts/spec-card/spec-card'
import style from "../../style/modules/home.module.css"
import InView from '../../layouts/in-view/in-view'
interface IPROPS {
    content: {
        header: string, service: serviceType[]
    }
}

const Service: FC<IPROPS> = ({ content }): JSX.Element => {
    const { header, service } = content
    const [inview, changeView] = useState(false)
    return (
        <article className={`${style.service} flex-center flex-column`} id="service">
            <InView changeView={changeView} />
            <h1 className={`flex-center flex-column ${inview ? "slide-left-in" : "slide-left-out"}`}>
                {header}
                <Underline />
            </h1>
            <div className={`flex-even flex-wrap ${inview ? "slide-right-in" : "slide-right-out"} delay-500 ${style.serviceContent}`}>
                {
                    service.map((element, index) => <SpecCard icon={element.icon} head={element.head} info={element.info} key={index} />)
                }
            </div>
        </article>
    )
}

export default Service;