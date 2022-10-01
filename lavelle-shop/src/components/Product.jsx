import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import '../styles/Product.css';

const Product = ({ item }) => {
    return (
        <div className='container-product'>
            <div className='circle-product' />
            <img className='image-product' src={item.img} alt='Imagenes productos' />
            <div className='info-product'>
                <div className='icon-product'>
                    <ShoppingCartOutlinedIcon />
                </div>
                <div className='icon-product'>
                    <SearchOutlinedIcon />
                </div>
                <div className='icon-product'>
                    <FavoriteBorderOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Product;