
import HERO from "../image/HERO.png"

type headerObj = { text: string, action: string, id: string }

export const header: { button: headerObj[], list: headerObj[] } = {
    button: [{ text: "Free Strategy Call", action: "navigate", id: "call btn" }],
    list: [{ text: "About Us", action: "scroll", id: "about" },
    { text: "Features", action: "scroll", id: "feature" },
    { text: "Service", action: "scroll", id: "service" },
    { text: "Review", action: "scroll", id: "review" }]
};


export const hero: { header: string, subheader: string, para: string } = {
    header: "A Digital Marketing Agency",
    subheader: "We Design Interfaces That Users Love",
    para: "Elevate Your Brand's Online Presence with Our Exceptional Digital Marketing Solutions.Let Us Be Your Strategic Ally on the Path toDigital Success."
};
export const footer: {} = {

}


