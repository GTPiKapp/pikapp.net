import React from 'react';

const Dot = ({ slide, active, onDotClick }) => {
  const name = active ? 'dot active' : 'dot'
  
  return (
    <div
    	data-slide={slide}
    	className={name}
    	onClick={e => onDotClick(parseInt(e.target.getAttribute('data-slide')))}>
    </div>
  )
}

export default Dot;