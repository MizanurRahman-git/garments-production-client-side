import React from 'react';
import HeroPage from '../Components/HeroPage/HeroPage';
import DisplayProduct from '../Components/DisplayProduct/DisplayProduct';
import AboutUs from './AboutUs';
import Contact from './Contact';
import StatsSection from '../Components/StatsSection/StatsSection';
import TestimonialsSection from '../Components/TestimonialsSection/TestimonialsSection';
import NewsletterSection from '../Components/NewsletterSection/NewsletterSection';
import FashionBrandSlider from '../Components/BrandSlider/FashionBrandSlider';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <HeroPage/>
            <DisplayProduct/>
            <section>
                <AboutUs/>
                <StatsSection/>
                <TestimonialsSection/>
                <FashionBrandSlider/>
            </section>
            <section>
                <Contact/>
                <NewsletterSection/>
            </section>
        </div>
    );
};

export default Home;