import React, { FC, useEffect, useRef, useState } from 'react'
import { useEvent } from '../../provider/handleEvent'

//import layouts UI
import Button from '../../layouts/button/button'
import MenuToggle from '../../layouts/menu-btn/menu-btn'
import Logo from '../../assets/svg/LOGO'

// styling import 
import style from "../../style/modules/header.module.css"
import { useHeader } from '../../provider/handleHeaderEvent'

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
        list: headerObjType[], link?: string | undefined
    }
}


//TSX Component

const NavList: FC<ListProp> = ({ content }): JSX.Element => {
    const { action, text, id } = content;
    return (
        <>
            <li className={style.list}>
                {text}
                <div className={style.underline}></div>
            </li >
        </>
    )
}

const DropList: FC<ListProp> = ({ content }): JSX.Element => {
    const { action, text, id } = content;
    return (
        <>
            <li className={style.droplist}>
                {text}
            </li>
        </>
    )
}




const Header: FC<IPROPS> = ({ content }): JSX.Element => {
    const { list, link } = content;
    const { handleExternalLink } = useEvent();
    const { isScroll, isOpen, handleMenuClick, handleListClick, menuBtnRef } = useHeader()
    return (
        <header className={`flex-even ${style.header} ${isScroll ? style.afterScroll : ""}`}>
            <div className={`flex-center ${style.heading}`}>
                <Logo />
                <h1>
                    MakeAMine
                </h1>
            </div>
            <nav className={`flex-center ${style.navbar}`}>
                {list && list.map((element, index) => (
                    <NavList content={element} key={index} />
                ))}
                <Button content={{ text: "Free Strategy Call", id: "call-btn", onClick: (): void => { handleExternalLink(link) } }} darkEffect={isScroll} key="free-call-btn-1" />
            </nav>
            <span className={style.menubtn}>
                <MenuToggle btnRef={menuBtnRef} isScroll={isScroll} onClick={() => { handleMenuClick() }} />
            </span>

            <nav className={`flex-left flex-column ${style.dropmenu} ${isOpen ? style.openMenu : ""}`}>
                <h2 className={style.dropheading}>MakeAMine</h2>
                {list && list.map((element, index) => (
                    <DropList content={element} key={index} />
                ))}
            </nav>
        </header >
    )
}


export default Header;