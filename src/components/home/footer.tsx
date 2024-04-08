import React, { FC } from 'react'
import style from "../../style/modules/home.module.css"


import MediaCard from '../../layouts/media-card/media-card'
import ContactCard from '../../layouts/contact-card/contact-card'

import { contactType, socialMediaType } from '../../types/type'
interface IPROPS {
    content: { contactInfo: contactType[], socialMedia: socialMediaType[], rights: string, devSection: Object }
}

const Footer: FC<IPROPS> = ({ content }): JSX.Element => {
    const { contactInfo, socialMedia, rights, devSection } = content
    return (
        <footer className={style.footer} id="footer">
            <div className={`flex-center flex-wrap ${style.contact}`}>
                {
                    contactInfo.map((element, index) => <ContactCard info={element.info} icon={element.icon} key={index} />)
                }
            </div>
            <div className={`flex-center flex-column flex-wrap ${style.socialMedia}`}>
                <div className={`flex-center flex-wrap`}>
                    {
                        socialMedia.map((element, index) => <MediaCard link={element.link} icon={element.icon} title={element.title} media={element.media} />)
                    }
                </div>
                <h1 className={style.rights}>{rights}</h1>
            </div>
        </footer >
    )
}

export default Footer;
