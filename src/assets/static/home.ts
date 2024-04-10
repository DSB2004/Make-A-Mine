// import Images
import HERO from "../image/HERO.png"
import ABOUT from "../image/ABOUT.png"
import FEATURE from "../image/FEATURE.png"
import TEST1 from "../image/Amitoptic.png"
import TEST2 from "../image/cadtabs.png"
import TEST3 from "../image/Namanpath.png"

// import icons for usage
import { AiOutlineGlobal as Webdev } from "react-icons/ai";
import { GiPencil as Blog } from "react-icons/gi";
import { RiAdvertisementLine as Add } from "react-icons/ri";
import { GiPaintBrush as Brush } from "react-icons/gi"
import { AiOutlineCode } from "react-icons/ai"
import { FaBug, FaLightbulb as Idea } from "react-icons/fa"
import {
    BsGraphUpArrow as SEO,
    BsFillShareFill as Share,
    BsYoutube as Youtube,
} from "react-icons/bs";
import { FaLocationDot as Location, FaPhone as Phone } from "react-icons/fa6";
import { AiFillMail as Mail } from "react-icons/ai";
import { FaFacebookF as Facebook } from "react-icons/fa";
import { BsInstagram as Instagram } from "react-icons/bs";
import { BiLogoLinkedin as LinkedIn } from "react-icons/bi";

// import types
import { credType, serviceType, featureType, contactType, socialMediaType, testimonyType } from "../../types/type"

// type declaration
type headerObj = { text: string, id: string }

//media links
const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSeEGrojA-oAUOVpOrugBQaHmHes4rVYsOYnlrW9EkLHm34BtA/viewform"
const instagram = "https://www.instagram.com/_makeamineofficial/"
const facebook = "https://www.facebook.com/makeamineofficial/"
const linkedin = "https://www.linkedin.com/company/make-a-mine/"
const youtube = "https://www.youtube.com/@MakeAMine"




export const header: { list: headerObj[], link?: string | undefined } = {
    list: [{ text: "About Us", id: "about" },
    { text: "Service", id: "service" },
    { text: "Features", id: "feature" },
    { text: "Review", id: "review" }],
    link: formLink
};


export const hero: { header: string, subheader: string, para: string, img: string, link?: string | undefined } = {
    subheader: "A Digital Marketing Agency",
    header: "We Design Interfaces That Users Love",
    para: "Elevate Your Brand's Online Presence with Our Exceptional Digital Marketing Solutions.Let Us Be Your Strategic Ally on the Path toDigital Success."
    , img: HERO, link: formLink
};

export const about: { header: string, para: string, summary: string, img: string, cred: credType[] } = {
    header: "Why Our Agency",
    para: "At Make A Mine, we specialize in delivering top-notch digital marketing solutions tailored to elevate your brand's online presence and drive exceptional results. With our comprehensive range of services, we empower businesses to stand out in the digital landscape and achieve their goals.",
    summary: " Let us be your strategic ally on your journey to digital success.",
    img: ABOUT,
    cred: [{ head: "Happy Clients", info: "010" }, { head: "Blogs Written", info: "300" }, { head: "Strategy Call", info: "020" },]
}

export const services: { header: string, service: serviceType[] } = {
    header: "Our Specialization",
    service: [{
        head: "Web Development", icon: Webdev, info: "Crafting success begins with a clear idea. We analyze your vision, goals, & audience, shaping innovative strategies that align with your objectives."
    }, {
        icon: SEO, head: "Search Engine Optimization", info: "Unlock the true potential of your website with our meticulous SEO strategies.We analyze, optimize, and fine-tune your website to improve its search engine rankings, ensuring your target audience finds you effortlessly."
    }, {
        icon: Add,
        head: "Advertisement",
        info: "Facebook, Instagram and Google Empower your brand with Facebook, Instagram, Google, and YouTube advertising. Reach millions, boost sales, and maximize visibility."
    }, {
        icon: Blog,
        head: "Blogging",
        info: "Fuel your digital presence with engaging, informative, and relevant blog content.Our expert writers curate content that resonates with your audience, establishing you as an authority in your industry."
    }, {
        icon: Share,
        head: "Social Media Management", info: "Instagram, LinkedIn and more Amplify your social media impact with our expert management services. We devise captivating strategies for heightened engagement, follower growth, and extensive reach."
    }, {
        icon: Youtube,
        head: "Youtube Management", info: " We optimize your content, develop engaging strategies, assist with video production, boost audience growth, provide data- driven insights, and guide you through monetization.."
    }]
}

export const features: { header: string, feature: featureType[], img: string } = {
    header: "Our Features",
    img: FEATURE,
    feature: [{ head: "Idea Analysis", info: "Crafting success begins with a clear idea. We analyze your vision, goals, & audience, shaping innovative strategies that align with your objectives.", icon: Idea }, { head: "Designing", info: "Visual impact matters. Our designers create captivating visuals, blending creativity with user-centric design principles for seamless and immersive experiences.", icon: Brush }, { head: "Development", info: "From concept to reality. Our experts use cutting-edge tech to build robust solutions tailored to your needs, ensuring user-friendliness and innovation.", icon: AiOutlineCode }, { head: "Testing & Launching", info: "Quality assurance is key. Rigorous testing ensures flawless functionality across devices. With excellence assured, we guide you through a seamless launch, propelling your digital journey.", icon: FaBug }]
}

export const testimony: { header: string, testimony: testimonyType[] } = {
    header: "Our Review", testimony: [
        {
            name: "Ankit Yadav ",
            dest: "Founder , Amit Opticals",
            msg: "Make A Mine has exceptional team and communication is very smooth. Best for ad campaigns . Kudos to the team !!",
            img: TEST1,
        },
        {
            name: "En Hemant Srivastava ",
            dest: "Ceo Cadtabs",
            msg: "I Strongly Recommend Make A Mine , Tried their Web Designing and ad campaign services and I must say , they are the best.",
            img: TEST2,
        },
        {
            name: "Person",
            dest: "Namanpath",
            msg: "The best Video Editing and Post designing services By Make A Mine",
            img: TEST3,
        }
    ]
}

export const footer: { contactInfo: contactType[], socialMedia: socialMediaType[], rights: string, devSection: Object } = {
    contactInfo: [{ icon: Mail, info: "info@makeamine.com" }, { icon: Mail, info: "varun@makeamine.com" }, { icon: Phone, info: "8766247447" }, { info: "Delhi India", icon: Location }],
    socialMedia: [{ icon: Facebook, link: facebook, media: "fb", title: "Facebook" }, { icon: Instagram, media: 'ig', link: instagram, title: "Instagram" }, { icon: Youtube, media: "yt", title: "Youtube", link: youtube }, { icon: LinkedIn, link: linkedin, title: "LinkedIn", media: "ln" }],
    rights: "© 2022 Make A Mine. All Right Reserved",
    devSection: {}

}


