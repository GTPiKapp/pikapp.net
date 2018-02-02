import React, {Component} from 'react';

import {Row} from 'antd';
import Slide from './slide';

import Dots from './dots';

const imageData = [
	{
		title: 'PI KAPPA PHI',
		description: 'IOTA CHAPTER',
		src: '/images/carousel/slide_1.jpg',
		animation: null,
		button: {
			link: '/about/involvement',
			title: 'LEARN MORE'
		}
	},
	{
		title: 'Pi Kappa Phi',
		description: 'Iota Chapter',
		src: '/images/carousel/slide_3.jpg',
		animation: null
	},
	{
		title: 'Campus Involvement',
		description: 'Iota Chapter',
		button: {
			link: '/about/involvement',
			title: 'Learn More'
		},
		src: '/images/carousel/slide_2.jpg',
		animation: null
	},
];

const transitionDuration = 350;
const duration = 4000000;

class Carousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			animating: false,
			indexVisible: 0,
			translateValue: 0
		};
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.goToPreviousSlide = this.goToPreviousSlide.bind(this);

		setInterval(() => {
			this.goToNextSlide();
		}, duration);
	}

	renderSlides() {
		return imageData.map((curr, i) => <Slide key={i} index={i} data={curr} />);
	}

	goToPreviousSlide() {
		const { indexVisible, translateValue } = this.state;

		if (index === 0) {
			return this.setState({indexVisible: imageData.length - 1});
		}

		this.setState({
			translateValue: translateValue + this.slideWidth(),
			indexVisible: indexVisible - 1
		});
	}

	goToNextSlide() {
		const {indexVisible, translateValue } = this.state;

		if (indexVisible === imageData.length - 1) {
			console.log('restarting')
			this.setState({
				indexVisible: 0,
				translateValue: 0
			});
			return;
		}

		this.setState({
			translateValue: translateValue - this.slideWidth(),
			indexVisible: indexVisible + 1
		});
	}

	slideWidth() {
	  return document.querySelector('.slide').clientWidth;
	}

	render() {
		const { indexVisible, translateValue } = this.state;

		return (
			<div className="slider">
				<div
					className="slider-wrapper"
					style={{
						transform: `translateX(${translateValue}px)`,
						transition: 'transform ease-out 2s'
					}}>
					{this.renderSlides()}
				</div>
				{/*<Dots
					indexVisible={indexVisible}
					slides={imageData}
					onDotClick={this.handleDotClick} />*/}
			</div>
		);
	}
}

export default Carousel;