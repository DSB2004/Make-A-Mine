import { FC, createContext, useContext, RefObject, useEffect, useState, useRef } from 'react'
import { contextType } from '../types/type'
import { useEvent } from './handleEvent';

interface IPROPS {
    isOpen: boolean,
    isScroll: boolean,
    menuBtnRef: RefObject<HTMLInputElement> | null;
    handleListClick: (id: string) => void,
    handleMenuClick: () => void
}

const HeaderContext = createContext<IPROPS | null>(null);

export const useHeader = (): IPROPS => {
    const context = useContext(HeaderContext);
    if (context === null) {
        throw new Error("useEvent must be used within an EventProvider");
    }
    return context;
};

const HeaderProvider: FC<contextType> = ({ children }): JSX.Element => {
    const [isScroll, setScrolled] = useState<boolean>(false);
    const [isOpen, toggleMenu] = useState<boolean>(false);
    const menuBtnRef = useRef<HTMLInputElement | null>(null)
    // const { handleExternalLink, handleScroll } = useEvent();

    const handleScrollEvent = (): void => {
        if (window.scrollY > 200) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    const handleMenuClick = (): void => {
        if (menuBtnRef.current !== null) {
            toggleMenu(menuBtnRef.current.checked);
        }
    }

    const handleMenuClose = (): void => {
        if (menuBtnRef.current !== null) {
            menuBtnRef.current.checked = false;
            toggleMenu(menuBtnRef.current.checked);
        }
    }

    const handleListClick = (id: string): void => {
        if (menuBtnRef.current !== null) {
            menuBtnRef.current.checked = false;
            toggleMenu(menuBtnRef.current.checked);
            console.log("Clicked list: ", id)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent)
        return (): void => { window.removeEventListener('scroll', handleScrollEvent) }
    }, [])

    return (
        <HeaderContext.Provider value={{ isScroll, isOpen, menuBtnRef, handleMenuClick, handleListClick }}>
            {children}
        </HeaderContext.Provider>
    );
}

export default HeaderProvider