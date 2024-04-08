import React, { FC } from 'react'
import "./media-card.css"
import { socialMediaType } from '../../types/type'
import { useEvent } from "../../provider/handleEvent"
import style from "./media-card.module.css"
const MediaCard: FC<socialMediaType> = ({ title, icon, link, media }): JSX.Element => {
  const Icon: FC = icon
  const { handleExternalLink } = useEvent()
  return (
    <div onClick={() => handleExternalLink(link)} className={`${style.mediaCard} flex-center`}>
      <Icon />
      <div className={` ${style.slideIn} ${media}`}></div>
      <div className={`${media} ${style.titleBar} flex-center `}>{title}</div>
    </div>
  )
}


export default MediaCard;