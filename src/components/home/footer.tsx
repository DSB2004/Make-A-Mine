import React, { FC, useState } from 'react'
import style from "../../style/modules/home.module.css"


import MediaCard from '../../layouts/media-card/media-card'
import ContactCard from '../../layouts/contact-card/contact-card'
import InView from '../../layouts/in-view/in-view'

import { contactType, socialMediaType } from '../../types/type'
interface IPROPS {
    content: { contactInfo: contactType[], socialMedia: socialMediaType[], rights: string, devSection: Object }
}

const Footer: FC<IPROPS> = ({ content }): JSX.Element => {
    const { contactInfo, socialMedia, rights, devSection } = content
    const [inview, changeView] = useState<boolean>(false);
    return (
        <footer className={style.footer} id="footer">
            <InView changeView={changeView} />
            <div className={`flex-center flex-wrap ${style.contact} `}>
                <div className={` flex-center flex-wrap ${inview ? "slide-left-in" : "slide-left-out"}`}>
                    {
                        contactInfo.map((element, index) => <ContactCard info={element.info} icon={element.icon} key={index} />)
                    }
                </div>
            </div>
            <div className={`flex-center flex-column flex-wrap ${style.socialMedia}`}>
                <div className={`flex-center flex-wrap ${inview ? "slide-right-in" : "slide-right-out"}`}>
                    <div className={'flex-even'}>
                        <MediaCard link={socialMedia[0].link} icon={socialMedia[0].icon} title={socialMedia[0].title} media={socialMedia[0].media} />
                        <MediaCard link={socialMedia[1].link} icon={socialMedia[1].icon} title={socialMedia[1].title} media={socialMedia[1].media} />

                    </div>
                    <div className={'flex-even'}>
                        <MediaCard link={socialMedia[2].link} icon={socialMedia[2].icon} title={socialMedia[2].title} media={socialMedia[2].media} />
                        <MediaCard link={socialMedia[3].link} icon={socialMedia[3].icon} title={socialMedia[3].title} media={socialMedia[3].media} />
                    </div>
                </div>
                <h1 className={style.rights}>{rights}</h1>
            </div>
        </footer >
    )
}

export default Footer;
