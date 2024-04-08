import React, { FC } from 'react'
import Underline from '../../layouts/underline/underline'
import { serviceType } from '../../types/type'
import SpecCard from '../../layouts/spec-card/spec-card'
import style from "../../style/modules/home.module.css"
interface IPROPS {
    content: {
        header: string, service: serviceType[]
    }
}

const Service: FC<IPROPS> = ({ content }): JSX.Element => {
    const { header, service } = content
    return (
        <article className={`${style.service} flex-center flex-column`}>
            <h1 className={`flex-center flex-column`}>
                {header}
                <Underline />
            </h1>
            <div className={`flex-even flex-wrap ${style.serviceContent}`}>
                {
                    service.map((element, index) => <SpecCard icon={element.icon} head={element.head} info={element.info} key={index} />)
                }
            </div>
        </article>
    )
}

export default Service;