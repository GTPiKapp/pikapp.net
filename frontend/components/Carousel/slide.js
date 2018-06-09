import React from 'react';

import {withRouter, Link} from 'react-router-dom';

const Slide = ({index, data}) => {
	const slideStyling = {
		width: '100%',
		height: 'auto',
		objectFit: 'contain',
		display: 'inline-block'
	}

	const imageStyle = {
		maxWidth: '100%',
		maxHeight: '100%',
		objectFit: 'contain'
	};

	return (
		<div style={slideStyling} className="slide">
			<img src={data.src} style={imageStyle}/>
		</div>
	);
}

export default withRouter(Slide);