import React from 'react';
import '../../MainCSS/MainCSS.css';
import BazarFirstSection from '../BazarFirstSection/BazarFirstSection';
import BazarSecondSection from '../BazarSecondSection/BazarSecondSection';
import BazerLocation from '../BazerLocation/BazerLocation';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainFeatures from '../MainFeatures/MainFeatures';
import Pay from '../Pay/Pay';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MainFeatures></MainFeatures>
            <BazerLocation></BazerLocation>
            <BazarFirstSection></BazarFirstSection>
            <BazarSecondSection></BazarSecondSection>
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default Home;