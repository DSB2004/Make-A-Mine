import React, { FC } from 'react'

interface IPROPS {
    content: {
        text: string,
        action: string,
        id: string
    }
}

const Button: FC<IPROPS> = ({ content }): JSX.Element => {
    const { text, action, id } = content;
    return (
        <button>{text}</button>
    )
}


export default Button;