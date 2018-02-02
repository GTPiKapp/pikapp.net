import React from 'react';

const PaddingWrapper = props => {
	return (
		<div style={{paddingTop: 50}}>
			{props.children}
		</div>
	);
}

export default PaddingWrapper;