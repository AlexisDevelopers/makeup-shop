import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import '../styles/ProductsList.css';

const ProductsList = () => {
    return (
        <div className='cotainer-products-list'>
            <Announcement />
            <NavBar />         
            <h1 className='title-products-list'>Makeup</h1>
            <div className='filter-container-products-list'>
                <div className='filter-products-list'>
                    <div className='filter-text-products-list'>Filter Products:</div>
                    <select className='select-products-list'>
                        <option className='option-products-list' disabled selected>
                            Color
                        </option>
                        <option className='option-products-list'>Shadow palette</option>
                        <option className='option-products-list'>Lipstick</option>
                        <option className='option-products-list'>Mascara</option>
                        <option className='option-products-list'>Eyebrow pomade</option>
                        <option className='option-products-list'>Eyebrow pencil</option>
                        <option className='option-products-list'>Eyebrow set</option>
                    </select>
                    <select>
                        <option className='option-products-list' disabled selected>
                            Size
                        </option>
                        <option className='option-products-list'>XS</option>
                        <option className='option-products-list'>S</option>
                        <option className='option-products-list'>M</option>
                        <option className='option-products-list'>L</option>
                        <option className='option-products-list'>XL</option>
                    </select>
                </div>
                <div className='filter-products-list'>
                    <div className='filter-text-products-list'>Sort Products:</div>
                    <select className='select-products-list'>
                        <option className='option-products-list' selected>Newest</option>
                        <option className='option-products-list'>Price (asc)</option>
                        <option className='option-products-list'>Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default ProductsList;