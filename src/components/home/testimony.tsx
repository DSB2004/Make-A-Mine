import React, { FC, useState } from 'react'
import style from "../../style/modules/home.module.css"
import Underline from '../../layouts/underline/underline'
import TestimonyCard from '../../layouts/testimony-card/testimony-card'
import InView from '../../layouts/in-view/in-view'
interface IPROPS {
    content: {
        header: string,
        testimony: any[]
    }

}
const Testimony: FC<IPROPS> = ({ content }): JSX.Element => {
    const { header, testimony } = content;
    const [inview, changeView] = useState<boolean>(false);
    return (
        <article className={`flex-center flex-column ${style.testimony}`} id="review">
            <InView changeView={changeView} />
            <h1 className={`flex-center flex-column ${inview ? "slide-left-in" : "slide-left-out"} `}>
                {header}
                <Underline />
            </h1>
            <div className={`${style.testimonyCarasoul} ${inview ? "slide-right-in" : "slide-right-out"}`}>
                <div className={style.testimonyCarasoulInner}>
                    {
                        testimony.map((element, index) => <TestimonyCard img={element.img} name={element.name} dest={element.dest} msg={element.msg} key={index} />)
                    }
                </div>
            </div>
        </article >
    )
}


export default Testimony;