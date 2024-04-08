import { FC } from "react";
import EventProvider from "./handleEvent";
import HeaderProvider from "./handleHeaderEvent";
import { contextType } from "../types/type";
const Provider: FC<contextType> = ({ children }): JSX.Element => {
    return (
        <>
            <EventProvider>
                <HeaderProvider>
                    {children}
                </HeaderProvider>
            </EventProvider>
        </>
    );
};

export default Provider;