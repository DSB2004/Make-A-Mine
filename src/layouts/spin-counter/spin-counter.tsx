import { FC, useEffect, useState } from 'react'
import style from "./spin-counter.module.css"

interface IPROPS {
    value: string;
}

const ValueCon: FC<IPROPS> = ({ value }): JSX.Element => {
    return (
        <>
            <div className={`flex-center ${style.valueCon}`}>
                {value}
            </div>
        </>
    )
}

const SpinCounter: FC<IPROPS> = ({ value }): JSX.Element => {
    const numVal = Number(value)
    const [translate, setTranslate] = useState<string>('0%');
    useEffect(() => {
        const num: number = 9 - numVal;
        setTranslate(`-${num}0%`)
    }, [])
    const numArray: string[] = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
    return (
        <div className={style.spinCounter}>
            <div className={style.numArray} style={{ transform: `translateY(${translate})` }}>
                {numArray.map((element, index) => <ValueCon value={element} key={index} />)}
            </div>
        </div>
    )
}


export default SpinCounter;