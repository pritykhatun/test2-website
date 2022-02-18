import React from 'react';

import About from '../about/About';
import Banner from '../banner/Banner';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

import Gallary from '../gallary/Gallary';
import Menu from '../menu/Menu';




const Home = () => {
    return (
        <div>
          <Banner></Banner>
           <About></About>
           <Menu></Menu>
          <Gallary></Gallary>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;