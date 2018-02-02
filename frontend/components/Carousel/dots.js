import React from 'react';
import Dot from './dot';

const Dots = ({indexVisible, slides, onDotClick }) => {
	return (
		<div className="dots-container">
			{slides.map((elem, i) => {
				return (
					<Dot
						key={i}
						slide={i}
						active={i === indexVisible}
						onDotClick={onDotClick}
					/>
				);
			})}
		</div>
	);
}

export default Dots;