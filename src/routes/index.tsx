import React, { FC } from 'react'
import Home from "../pages/home"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router: FC = (): JSX.Element => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<>Not Found</>} />
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Router;