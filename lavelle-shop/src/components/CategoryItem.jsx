import React from 'react';
import '../styles/CategoryItem.css';

const CategoryItem = ({ item }) => {
    return (
        <div className='container-category-item'>
            <img className='image-category-item' src={item.img} alt='Fotos productos' />
            <div className='info-category-item'>
                <h1 className='title-category-item'>{item.title}</h1>
                <button className='button-category-item'>SHOP NOW</button>
            </div>
        </div>
    );
};

export default CategoryItem;