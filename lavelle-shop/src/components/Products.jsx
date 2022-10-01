import React from 'react';
import { popularProducts } from '../data';
import Product from './Product';
import '../styles/Products.css';

const Products = () => {
    return (
        <div className='container-products'>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Products;