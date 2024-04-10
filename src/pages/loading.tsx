import { FC } from 'react'
import LoadingWave from '../layouts/loading-wave/loading-wave'
import style from "../style/modules/loading.module.css"
const Loading: FC = (): JSX.Element => {

    return (
        <section className={`flex-center flex-column ${style.loading}`}>
            <article className={`flex-center flex-column ${style.loadingCover}`}>
                <LoadingWave />
                <h1>
                    Loading 
                </h1>
            </article>
        </section>
    )
}

export default Loading;
