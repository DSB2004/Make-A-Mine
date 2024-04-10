import React, { FC, useEffect, useState } from 'react'
import Home from "../pages/home"
import Loading from "../pages/loading";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLoading } from '../provider/handleCustomLoading';
const Router: FC = (): JSX.Element => {
    const { loading, customLoading } = useLoading()
    useEffect(() => {
        customLoading()
    }, [])
    return (
        <>
            {loading ?
                <>
                    <Loading />
                </> :
                <BrowserRouter>
                    <Routes>
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<>Not Found</>} />
                        </>
                    </Routes>
                </BrowserRouter>
            }
        </>
    )
};

export default Router;