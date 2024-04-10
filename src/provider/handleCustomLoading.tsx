import { FC, createContext, useContext, useState } from "react";
import { contextType } from "../types/type";
interface IPROPS {
    loading: boolean,
    customLoading: Function
}

const LoadingContext = createContext<IPROPS | null>(null)

export const useLoading = (): IPROPS => {
    const context = useContext(LoadingContext);
    if (context === null) {
        throw new Error("useEvent must be used within an EventProvider");
    }
    return context;
}
const LoadingProvider: FC<contextType> = ({ children }): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(true)
    const customLoading: (() => void) = async () => {
        setLoading(true)
        const body: HTMLBodyElement | null = document.querySelector('body');
        if (body !== null) {
            body.style.animation = "visible-in 500ms ease-in-out forwards"
        }
        setTimeout(() => {
            if (body !== null) {
                body.style.animation = "visible-out 500ms ease-in-out forwards"
            }
        }, 2000)
        setTimeout(() => {
            if (body !== null) {
                body.style.animation = "visible-in 500ms ease-in-out forwards"
            }
            setLoading(false)
        }, 3000)
    }
    const value: IPROPS = {
        loading, customLoading
    }
    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider;