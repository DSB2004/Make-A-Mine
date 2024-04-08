import React, { FC } from 'react'
import { contactType } from '../../types/type'
import style from "./contact-card.module.css"

const ContactCard: FC<contactType> = ({ icon, info }): JSX.Element => {
    const Icon: FC = icon;
    return (
        <div className={`flex-left  ${style.contactCard}`}>
            <div className={`flex-center ${style.contactCardIcon}`}>
                <Icon />
            </div>
            <h2>{info}</h2>
        </div>
    )

}

export default ContactCard;