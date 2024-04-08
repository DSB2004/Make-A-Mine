import React, { FC, RefObject, useEffect } from 'react'
import "./menu-btn.css"
interface IPROPS {
    btnRef: RefObject<HTMLInputElement> | null,
    isScroll: boolean, onClick: Function
}


const MenuToggle: FC<IPROPS> = ({ btnRef, isScroll, onClick }): JSX.Element => {
    const handleClick: Function = (): void => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <>
            <input type="checkbox" ref={btnRef} id="checkbox" onClick={() => handleClick()} />
            <label htmlFor="checkbox" className="toggle">
                <div className={`${isScroll ? "black-bar" : ""} bars`} id="bar1"></div>
                <div className={`${isScroll ? "black-bar" : ""} bars`} id="bar2"></div>
                <div className={`${isScroll ? "black-bar" : ""} bars`} id="bar3"></div>
            </label>
        </>
    )
}

export default MenuToggle;