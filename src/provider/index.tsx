import { FC } from "react";
import EventProvider from "./handleEvent";
import HeaderProvider from "./handleHeaderEvent";
import LoadingProvider from "./handleCustomLoading";
import { contextType } from "../types/type";
const Provider: FC<contextType> = ({ children }): JSX.Element => {
    return (
        <>
            <EventProvider>
                <HeaderProvider>
                    <LoadingProvider>
                        {children}
                    </LoadingProvider>
                </HeaderProvider>
            </EventProvider>
        </>
    );
};

export default Provider;