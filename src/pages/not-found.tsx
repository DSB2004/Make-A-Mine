import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import style from "../style/modules/not-found.module.css"
const NotFound: FC = (): JSX.Element => {
    return (
        <section className={`flex-center flex-column ${style.notFound}`}>
            <h1 className={style.errorpagehead}>
                "Oops! The Page is Lost in Cyberspace."
            </h1>
            <p className={style.errorpagepara}>
                "Looks like you've ventured into the unknown. The page you're
                searching for might have taken a detour or evaporated into the digital
                abyss."
            </p>
            <ul>
                <h3>What you can do:</h3>
                <li className={style.errorpagelist}>
                    "Double-check the URL for typos or try again."
                </li>
                <li className={style.errorpagelist}>
                    "Return to the homepage and start fresh."
                </li>
            </ul>
            <Link to="/" className={style.errorpagepara}>
                <p>Click Me to Go back to Home Page</p>
            </Link>
        </section>
    )
}

export default NotFound;
