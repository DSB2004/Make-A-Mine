import { ReactNode } from "react"
import { IconType } from "react-icons"

export interface contextType {
    children: ReactNode
}

export interface credType {

    head: string, info: string
}

export interface serviceType {
    head: string,
    info: string,
    icon: IconType
}

export interface featureType {
    head: string,
    info: string,
    icon: IconType
}

export interface contactType {
    icon: IconType,
    info: string,
}

export interface socialMediaType {
    icon: IconType,
    link: string,
    media: string,
    title: string
}
export interface testimonyType {
    name: string,
    dest: string,
    msg: string,
    img: string
}