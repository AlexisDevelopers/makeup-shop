import React from 'react';
// import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div>
            {/* <Announcement /> */}
            <NavBar /> 
            <Carousel />
            <Categories />
            <Products /> 
            <Newsletter />
            <Footer /> 
        </div>
    );
};

export default Home;