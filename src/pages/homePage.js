import React from 'react'
import Header from '../components/common/Header';
import TopSection from '../components/TopSection';
import Product from '../components/Product';
import Slide from '../components/Slide';
import Scroll from '../components/Scroll';
import Footer from '../components/common/Footer';

const HomePage = () => {
  return(
    <>
    <Header/>
    <TopSection/>
    <Product/>
    <div className="non-mobile">
    <Slide/>
    </div>
    <Scroll/>
    <Footer/>
    </>
    );
};

export default HomePage;
