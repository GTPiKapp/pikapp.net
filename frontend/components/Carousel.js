import React from 'react';
import { Carousel } from 'antd';

import Slide from './Carousel/slide';

const imageData = [
	{
		title: 'PI KAPPA PHI',
		description: 'IOTA CHAPTER',
		src: '/images/carousel/slide_1new.JPG',
		button: {
			link: '/about/involvement',
			title: 'LEARN MORE'
		}
	},
	{
		title: 'Pi Kappa Phi',
		description: 'Iota Chapter',
		src: '/images/carousel/slide_2.jpg'
	},
	{
		title: 'Campus Involvement',
		description: 'Iota Chapter',
		button: {
			link: '/about/involvement',
			title: 'Learn More'
		},
		src: '/images/carousel/slide_3.jpg'
	},
	{
		src: '/images/carousel/slide_4.jpg'
	},
];

const CarouselContainer = () => {
	return (
		<Carousel autoplay infinite autoplaySpeed={1500}>
			<Slide key={0} data={imageData[0]} />
			<Slide key={1} data={imageData[1]} />
			<Slide key={2} data={imageData[2]} />
			<Slide key={3} data={imageData[3]} />
		</Carousel>
	);
}

export default CarouselContainer;