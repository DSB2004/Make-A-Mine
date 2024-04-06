import React, { FC } from 'react';

// components 
import Header from "../components/common/header"
import Hero from "../components/home/hero"
import About from '../components/home/about';
import Service from '../components/home/services';
import Feature from '../components/home/feature';
import Footer from "../components/home/footer"

//static content
import { header } from "../assets/static/home"

const Home: FC = (): JSX.Element => {
    return (
        <section>
            <Header content={header} />
            <Hero />
            <About />
            <Service />
            <Feature />
            <Footer />
        </section>
    );
}

export default Home;
