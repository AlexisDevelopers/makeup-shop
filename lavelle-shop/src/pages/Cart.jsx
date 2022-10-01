import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/Cart.css';
import EyebrowPen from '../assets/PNG de productos/Lapiz_de_Cejas_Retráctil_+_Spooley_Marrón_Oscuro_The_Creme_Shop-removebg-preview.png'

const Cart = () => {
    return (
        <div className='container-cart'>
            <Announcement />
            <NavBar />
            <div className='wrapper-cart'>
                <h1 className='title-cart'>YOUR BAG</h1>
                <div className='top-cart'>
                    <button className='top-button-cart'>CONTINUE SHOPPING</button>
                    <div className='top-texts-cart'>
                        <span className='top-text-cart'>Shopping Bag(2)</span>
                        <span className='top-text-cart'>Your Wishlist (0)</span>
                    </div>
                    <button className='top-button-cart' type="filled">CHECKOUT NOW</button>
                </div>
                <div className='bottom-cart'>
                    <div className='info-cart'>
                        <div className='product-cart'>
                            <div className='product-detail-cart'>
                                <img className='image' src={EyebrowPen} alt='Imagenes carrito compra' />
                                <div className='details-cart'>
                                    <span className='product-name-cart'>
                                        <b>Product:</b> EYEBROW PENCIL
                                    </span>
                                    <span className='product-id-cart'>
                                        <b>ID:</b> 2565565656
                                    </span>
                                    <div className='product-color-cart' color="black" />
                                    <span className='product-size-cart'>
                                        <b>Color:</b> Black
                                    </span>
                                </div>
                            </div>
                            <div className='price-detail-cart'>
                                <div className='product-amount-container-cart'>
                                    <Add />
                                    <div className='product-amount-cart'>1</div>
                                    <Remove />
                                </div>
                                <div className='product-price-cart'>$ 9.99</div>
                            </div>
                        </div>
                    </div> 
                    <div className='summary-cart'>
                        <h1 className='summary-title-cart'>ORDER SUMMARY</h1>
                        <div className='summaryItem-cart'>
                            <span className='summaryI-item-text-cart'>Subtotal</span>
                            <span className='summary-item-price-cart'>$ 80</span>
                        </div>
                        <div className='summary-item-cart'>
                            <span className='summary-item-text-cart'>Estimated Shipping</span>
                            <span className='summary-item-price-cart'>$ 5.90</span>
                        </div>
                        <div className='summary-item-cart'>
                            <span className='summary-item-text-cart'>Shipping Discount</span>
                            <span className='summary-item-price-cart'>$ -5.90</span>
                        </div>
                        <div className='summary-item-cart' type="total">
                            <span className='summary-itemTi-text-cart'>Total</span>
                            <span className='summary-item-price-cart'>$ 80</span>
                        </div>
                        <button className='btn-checkout-cart'>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;