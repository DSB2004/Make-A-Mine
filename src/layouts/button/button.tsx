import React, { FC } from 'react'
import style from "./button.module.css"

interface IPROPS {
    content: {
        text: string,
        id: string,
        onClick: () => void
    }, darkEffect?: boolean | undefined
}

const Button: FC<IPROPS> = ({ content, darkEffect }): JSX.Element => {
    const { text, id, onClick } = content;

    const handleClick = () => {
        if (onClick) {
            onClick()
        }
    }
    return (
        <button onClick={() => { handleClick() }} className={`${style.button} ${darkEffect ? style.darkButton : ""}`}> {text}</button >
    )
}


export default Button;