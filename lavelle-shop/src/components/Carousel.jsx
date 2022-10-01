import React from 'react'
import Slider from 'infinite-react-carousel'
import '../styles/Carousel.css';
import { sliderItems } from '../data';

const Carousel = () => {
	return (
		<section className='carousel'>
			<Slider className='content-carousel'>
				{sliderItems.map((item) => (
					<div key={item.id} className='content-item-carousel'>
						<img src={item.img} alt={item.title} />
						<div className='info-container-carousel'>
                            <h1 className='title-carousel'>{item.title}</h1>
                            <p className='description-carousel'>{item.desc}</p>
                            <button className='btn-show-carousel'>SHOW NOW</button>
                        </div>
					</div>
				))}
			</Slider>
		</section>
	)
}

export default Carousel