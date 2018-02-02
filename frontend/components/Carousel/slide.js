import React from 'react';

import {withRouter, Link} from 'react-router-dom';

const Slide = ({index, data}) => {
	const slideStyling = {
		// backgroundImage: `url(${data.src})`,
		// backgroundSize: 'cover',
		// backgroundPosition: 'center',
		width: '100%',
		height: 'auto',
		objectFit: 'contain'
	}

	const imageStyle = {
		maxWidth: '100%',
		maxHeight: '100%',
		objectFit: 'contain'
	};

	// const imageStyle = {
	// 	width:'100%',
	// 	height: 'auto'
	// };

	const titleStyle = {
		color: '#fff',
		fontSize: '40px'
	};

	const descriptionStyle = {
		color: '#fff',
		fontSize: '25px'
	};

	return (
		<div style={slideStyling} className="slide">
			{/*<div className="slide-title-box">
				{data.title && 
					<h1 className="title" style={titleStyle}>{data.title}</h1>
				}
				{data.description &&
					<h3 className="description" style={descriptionStyle}>{data.description}</h3>
				}
				{data.button && 
					<Link className="slide-button" to={data.button.link}><h3>{data.button.title}</h3></Link>
				}
			</div>*/}
			<img src={data.src} style={imageStyle}/>
		</div>
	);
}

export default withRouter(Slide);