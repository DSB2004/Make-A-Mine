import React, { FC } from 'react';

// components 
import Header from "../components/common/header"
import Hero from "../components/home/hero"
import About from '../components/home/about';
import Service from '../components/home/services';
import Feature from '../components/home/feature';
import Footer from "../components/home/footer"
import Testimony from '../components/home/testimony';
//static content
import { header, hero, about, services, features, footer, testimony } from "../assets/static/home"

const Home: FC = (): JSX.Element => {
    return (
        <section >
            <Header content={header} />
            <Hero content={hero} />
            <About content={about} />
            <Service content={services} />
            <Feature content={features} />
            <Testimony content={testimony} />
            <Footer content={footer} />
        </section>
    );
}

export default Home;
