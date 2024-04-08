import React, { FC } from 'react'
import Underline from '../../layouts/underline/underline'
interface IPROPS {
    content: {
        header: string,
        testimony: any[]
    }

}
const Testimony: FC<IPROPS> = ({ content }): JSX.Element => {
    const { header, testimony } = content;
    return (
        <article className={`flex-center flex-column`}>
            <h1 className={`flex - center flex - column`}>
                {header}
                <Underline />
            </h1>
        </article>
    )
}


export default Testimony;