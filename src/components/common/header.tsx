import React, { FC } from 'react'
import Button from '../../layouts/button/button'


// type checking 
type headerObjType = {
    text: string,
    action: string,
    id: string
}
interface ListProp {
    content: {
        text: string,
        action: string,
        id: string
    }
}
interface IPROPS {
    content: {
        button: headerObjType[],
        list: headerObjType[]
    }
}


//JSX Component

const NavList: FC<ListProp> = ({ content }): JSX.Element => {
    const { action, text, id } = content;
    return (
        <>
            <li>
                {text}
            </li>
        </>
    )
}

const DropList: FC<ListProp> = ({ content }): JSX.Element => {
    const { action, text, id } = content;
    return (
        <>
            <li>
                {text}
            </li>
        </>
    )
}


const Header: FC<IPROPS> = ({ content }): JSX.Element => {
    const { list, button } = content;
    return (
        <header>
            <h1>MakeAMine</h1>
            <nav>
                {list && list.map((element, index) => (
                    <NavList content={element} key={index} />
                ))}
                {button && button.map((element, index) => (
                    <Button content={element} key={index} />
                ))}
            </nav>
            <nav>
                <h2>MakeAMine</h2>
                {list && list.map((element, index) => (
                    <DropList content={element} key={index} />
                ))}
            </nav>
        </header>
    )
}


export default Header;