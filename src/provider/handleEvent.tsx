import React, { FC, createContext, useContext } from 'react';
import { contextType } from '../types/type';

interface IPROPS {
    handleScroll: (id?: string | null) => void;
    handleExternalLink: (link?: string | null) => void;
}

const EventContext = createContext<IPROPS | null>(null);

export const useEvent = (): IPROPS => {
    const context = useContext(EventContext);
    if (context === null) {
        throw new Error("useEvent must be used within an EventProvider");
    }
    return context;
};

const EventProvider: FC<contextType> = ({ children }): JSX.Element => {
    const handleScroll = (id?: string | null): void => {
        if (id && id !== null) {
            const element = document.querySelector("#" + id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        }
    };

    const handleExternalLink = (link?: string | null): void => {
        if (link && link !== null) {
            window.open(link, '_blank');
        }
    };

    const contextValue: IPROPS = {
        handleScroll,
        handleExternalLink
    };

    return (
        <EventContext.Provider value={contextValue}>
            {children}
        </EventContext.Provider>
    );
};

export default EventProvider;
