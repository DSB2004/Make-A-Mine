import React, { FC } from 'react'
import style from "../../style/modules/home.module.css"
import Underline from '../../layouts/underline/underline'
import TestimonyCard from '../../layouts/testimony-card/testimony-card'
interface IPROPS {
    content: {
        header: string,
        testimony: any[]
    }

}
const Testimony: FC<IPROPS> = ({ content }): JSX.Element => {
    const { header, testimony } = content;
    return (
        <article className={`flex-center flex-column ${style.testimony}`}>
            <h1 className={`flex-center flex-column`}>
                {header}
                <Underline />
            </h1>

            <div className={`flex-even ${style.testimonyCarasoul}`}>

                {
                    testimony.map((element, index) => <TestimonyCard img={element.img} name={element.name} dest={element.dest} msg={element.msg} key={index} />)
                }
            </div>
        </article >
    )
}


export default Testimony;